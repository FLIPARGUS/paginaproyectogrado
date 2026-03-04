# Bogota Mobility Risk Data Analysis

**Transformando datos de siniestralidad en conocimiento para la movilidad segura en Bogotá**

Dashboard interactivo desarrollado con React, Vite y Tailwind CSS para el análisis predictivo y geoespacial de accidentes de tránsito en Bogotá D.C.

## Características

- **Análisis Exploratorio de Datos (EDA)**: Visualización completa del dataset de accidentes
- **Modelo de Clasificación**: Random Forest para predicción de gravedad de accidentes
- **Clustering Geográfico**: Identificación de zonas críticas mediante DBSCAN
- **Explainable AI**: Interpretación de predicciones con SHAP
- **Mapas Interactivos**: Visualizaciones geoespaciales con Folium

## Tecnologías

### Frontend
- **React 18**: Framework de UI
- **Vite**: Build tool moderno y rápido
- **Tailwind CSS**: Framework CSS utility-first
- **React Router**: Navegación SPA

### Backend & Análisis
- **Python**: Análisis de datos
- **Scikit-learn**: Machine Learning (Random Forest, DBSCAN)
- **SHAP**: Explainable AI
- **Folium**: Mapas interactivos
- **Pandas & NumPy**: Procesamiento de datos

## Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## Uso

El servidor de desarrollo se ejecutará en `http://localhost:5173`

### Comandos disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview de build de producción
npm run preview
```

## Estructura del Proyecto

```
bogota-mobilityrisk-data-analysis/
├── public/
│   ├── data/           # Archivos JSON con datos procesados
│   ├── maps/           # Mapas HTML interactivos (Folium)
│   └── images/         # Imágenes y gráficos
├── src/
│   ├── components/     # Componentes React reutilizables
│   ├── pages/          # Páginas de la aplicación
│   ├── App.jsx         # Componente principal
│   └── main.jsx        # Punto de entrada
└── package.json
```

## Páginas

1. **Inicio**: Resumen del proyecto y tecnologías
2. **EDA**: Análisis exploratorio con patrones temporales y espaciales
3. **Clustering**: Identificación de zonas críticas con DBSCAN
4. **Modelo**: Random Forest para clasificación de gravedad
5. **IA Explicable**: Análisis SHAP de factores de riesgo
6. **Mapas**: Visualizaciones geoespaciales interactivas

## Diseño

- Diseño responsivo con Tailwind CSS
- Interfaz moderna con gradientes y animaciones
- Navegación intuitiva con indicadores visuales
- Componentes reutilizables y mantenibles

## Datos

Los datos provienen del histórico de accidentes de tránsito en Bogotá D.C., procesados mediante notebooks de Jupyter que se encuentran en el proyecto principal.

## Contribución

Este proyecto es parte de un análisis académico. Para contribuciones o sugerencias, por favor abre un issue.

## Licencia

Proyecto académico - Análisis de Accidentes de Tránsito en Bogotá D.C.

## Autor

Proyecto de Grado - 2026

---

**Nota**: Para generar las visualizaciones completas (imágenes y mapas), es necesario ejecutar los notebooks de análisis ubicados en la carpeta principal del proyecto.
