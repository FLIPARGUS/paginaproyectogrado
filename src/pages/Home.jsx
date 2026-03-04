import React from 'react';

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 mb-8 shadow-xl">
        <h1 className="text-4xl font-bold mb-2">Análisis de Accidentes de Tránsito</h1>
        <h2 className="text-2xl font-semibold mb-4">Bogotá D.C.</h2>
        <p className="text-lg text-blue-100">
          Proyecto de análisis predictivo y geoespacial de accidentes de tránsito
          utilizando Machine Learning, Explainable AI y técnicas de clustering
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Resumen del Proyecto</h2>
        <p className="text-gray-700 mb-4">
          Este dashboard presenta un análisis exhaustivo de los accidentes de tránsito
          en Bogotá D.C., utilizando técnicas avanzadas de ciencia de datos y machine learning.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Objetivos</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Identificar patrones y factores de riesgo en accidentes de tránsito</li>
          <li>Desarrollar modelos predictivos de gravedad de accidentes</li>
          <li>Detectar zonas críticas mediante clustering geográfico</li>
          <li>Explicar las predicciones del modelo mediante SHAP (Explainable AI)</li>
          <li>Visualizar patrones temporales y espaciales</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-2">Random Forest</h3>
          <p className="text-purple-100">Modelo de Clasificación</p>
        </div>
        <div className="bg-gradient-to-br from-pink-500 to-red-600 text-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-2">DBSCAN</h3>
          <p className="text-pink-100">Clustering Geográfico</p>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-2">SHAP</h3>
          <p className="text-blue-100">Explainable AI</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-teal-500 text-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-2">Folium</h3>
          <p className="text-green-100">Mapas Interactivos</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Navegación</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-pink-500 to-red-600 text-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-2">EDA</h3>
            <p className="text-pink-100">Análisis Exploratorio de Datos completo con visualizaciones y estadísticas descriptivas</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-2">Modelo</h3>
            <p className="text-blue-100">Random Forest para clasificación de gravedad con matriz de confusión e importancia de variables</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-teal-500 text-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-2">SHAP</h3>
            <p className="text-green-100">Explainable AI con análisis detallado de factores de riesgo por tipo de lesión</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-2">Clustering</h3>
            <p className="text-yellow-100">Identificación de zonas críticas con análisis geográfico y caracterización de riesgos</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-500 to-indigo-800 text-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-2">Mapas</h3>
            <p className="text-cyan-100">Visualizaciones interactivas con mapas de calor y clusters críticos</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Tecnologías Utilizadas</h2>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Backend & Análisis</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li><strong>Python:</strong> Lenguaje principal para análisis de datos</li>
          <li><strong>Pandas & NumPy:</strong> Procesamiento y manipulación de datos</li>
          <li><strong>Scikit-learn:</strong> Modelos de Machine Learning (Random Forest, DBSCAN)</li>
          <li><strong>SHAP:</strong> Explainable AI para interpretabilidad del modelo</li>
          <li><strong>Matplotlib & Seaborn:</strong> Visualizaciones estadísticas</li>
          <li><strong>Folium:</strong> Mapas interactivos geoespaciales</li>
        </ul>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Frontend</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>React:</strong> Framework para la interfaz de usuario</li>
          <li><strong>React Router:</strong> Navegación entre páginas</li>
          <li><strong>Tailwind CSS:</strong> Framework CSS para diseño moderno y responsivo</li>
          <li><strong>Vite:</strong> Build tool rápido para desarrollo</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
