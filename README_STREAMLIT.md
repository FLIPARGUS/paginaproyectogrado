# Ejecutar la app React con Streamlit

Este proyecto es una aplicacion React/Vite. El archivo `app.py` permite ejecutarla desde Python usando Streamlit.

## Requisitos

- Python 3.10+
- Node.js 18+ (para construir `dist/`)

## Pasos

```bash
pip install -r requirements.txt
npm install
npm run build
streamlit run app.py
```

## Notas

- `app.py` NO ejecuta `npm` automaticamente.
- `dist/index.html` debe existir antes de correr Streamlit.
- La app React se sirve localmente y se incrusta en Streamlit con un `iframe`.
- El servidor estatico incluye fallback SPA para rutas como `/eda`, `/clustering`, etc.
