<script lang="ts">
  import Predict from './lib/Predict.svelte';
</script>

<div class="dark">
  <div
    class="font-body flex min-h-screen w-full bg-gray-100 text-gray-900 dark:bg-stone-900 dark:text-gray-100"
  >
    <div class="flex flex-1 flex-col">
      <div
        class="container ml-auto mr-auto flex h-full items-center justify-center overflow-auto p-2"
      >
        <Predict />
      </div>
    </div>
  </div>
</div>
