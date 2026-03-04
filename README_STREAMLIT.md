# Ejecutar la app React con Streamlit

Este proyecto es una aplicacion React/Vite. El archivo `app.py` permite ejecutarla desde Python usando Streamlit.

## Requisitos

- Python 3.10+
- Node.js 18+ (para construir `dist/`)

## Pasos

```bash
pip install -r requirements.txt
npm install
streamlit run app.py
```

## Notas

- Si `dist/` no existe, `app.py` ejecuta automaticamente `npm run build`.
- La app React se sirve localmente y se incrusta en Streamlit con un `iframe`.
- El servidor estatico incluye fallback SPA para rutas como `/eda`, `/clustering`, etc.
