# Proyecto Módulo 7: Bootcamp Ciencia de Datos e Inteligencia Artificial

## Descripción del Proyecto

Este proyecto es un monorepo hecho con [Turbo](https://turbo.build), el cual contiene el código del entrenamiento del modelo basado en el dataset de kaggle de [Chest X-Ray Images (Pneumonia)](https://www.kaggle.com/datasets/paultimothymooney/chest-xray-pneumonia), así como el código para una API hecha en [Flask](https://flask.palletsprojects.com) y una app hecha con [Svelte](https://svelte.dev) para el FrontEnd.

Para más detalles, acceder a la [Presentación en PDF](<Proyecto M7.pdf>) que contiene Screenshots y una descripción detallada de cada parte del proyecto.

### Archivos relevantes

1. [Presentación PDF](<Proyecto M7.pdf>)
2. [M7_Project.ipynb (Modelo de Entrenamiento)](datascience/M7_Project.ipynb)
3. [M7_Project.ipynb (Google Colab)](https://colab.research.google.com/drive/11x8W6wN6trS1PAeZC8LpP4qmw-PyOwVx?usp=sharing)
4. [Modelo de Entrenamiento con Tuning](app/apps/server/pneumonia_detection_model_tuning.h5)
5. [App.py (API)](app/apps/server/app.py)
6. [Predict.svelte (Client)](app/apps/client/src/lib/Predict.svelte)

## Despliegue en la Nube

La aplicación se desplegó con [Docker](https://docs.docker.com) en [Google Cloud](https://cloud.google.com). Se puede acceder [aquí](https://m7api-dxkxrwg5lq-uc.a.run.app) a la aplicación Web.
