<script lang="ts">
  import { axiosClient } from '../api';

  interface PredictionResponse {
    prediction: string;
  }

  async function makePrediction(file: File) {
    const form = new FormData();
    form.append('file', file);
    const { data } = await axiosClient.post<PredictionResponse>(
      '/predict',
      form,
    );
    return data;
  }

  let promise = Promise.resolve<PredictionResponse>({ prediction: '' });
  let files: FileList;
  let file: File;
  let image: HTMLImageElement;

  $: if (files) {
    file = files[0];
    const reader = new FileReader();
    reader.addEventListener('load', function () {
      image.setAttribute('src', reader.result as string);
    });
    reader.readAsDataURL(file);
    promise = makePrediction(file);
  }
</script>

<div class="flex flex-col items-center justify-center md:w-1/2 lg:w-1/3">
  <div class="flex w-full flex-col items-center justify-center gap-3">
    <h1 class="text-xl">Modelo de Predicción</h1>

    <label
      class="mb-2 hidden text-sm font-medium text-stone-900 dark:text-white"
      for="file_input">Subir Archivo</label
    >
    <input
      class="block w-full cursor-pointer rounded-lg border border-stone-300 bg-stone-50 text-sm text-stone-900 focus:outline-none dark:border-stone-600 dark:bg-stone-700 dark:text-stone-400 dark:placeholder-stone-400"
      id="file_input"
      type="file"
      accept="image/png, image/jpeg"
      bind:files
    />
    {#if file}
      <img bind:this={image} src="" alt="Preview" class="rounded-md" />
    {/if}
    {#await promise}
      <p class="text-gray-100">Cargando...</p>
    {:then result}
      {#if result.prediction != ''}
        <div class="text-lg text-green-500">
          Predicción: {result.prediction}
        </div>
      {/if}
    {:catch}
      <p class="text-red-600">Algo salió mal</p>
    {/await}
  </div>
</div>
