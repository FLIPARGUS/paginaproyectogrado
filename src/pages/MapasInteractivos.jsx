import React, { useState } from 'react';

function MapasInteractivos() {
  const [mapaActual, setMapaActual] = useState('heatmap_accidentes');

  const mapas = {
    heatmap_accidentes: {
      titulo: 'Mapa de Calor General de Accidentes',
      archivo: '/maps/heatmap_accidentes_bogota.html',
      descripcion: 'Visualización de la densidad de todos los accidentes registrados en Bogotá D.C.'
    },
    heatmap_shap: {
      titulo: 'Mapa de Calor SHAP (Riesgo de Fatalidad)',
      archivo: '/maps/heatmap_shap_con_muertos.html',
      descripcion: 'Zonas con mayor riesgo de accidentes fatales según análisis SHAP'
    },
    clusters_criticos: {
      titulo: 'Clusters Críticos',
      archivo: '/maps/clusters_criticos.html',
      descripcion: 'Marcadores de los 5 clusters más peligrosos identificados'
    },
    mapa_clusters: {
      titulo: 'Mapa Completo de Clusters',
      archivo: '/maps/Mapa_Preciso_Clusters_Bogota.html',
      descripcion: 'Visualización completa de los 4,090 clusters con mapa de calor y marcadores'
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 mb-8 shadow-xl">
        <h1 className="text-4xl font-bold mb-2">Mapas Interactivos</h1>
        <p className="text-lg text-blue-100">Visualizaciones geoespaciales de accidentes en Bogotá D.C.</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Seleccionar Mapa</h2>
        <p className="text-gray-700 mb-6">Elige un mapa para visualizar diferentes aspectos del análisis:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button
            className={`p-6 rounded-xl shadow-lg transition-all transform hover:scale-105 ${
              mapaActual === 'heatmap_accidentes'
                ? 'bg-gradient-to-br from-pink-500 to-red-600'
                : 'bg-gradient-to-br from-gray-300 to-gray-400'
            }`}
            onClick={() => setMapaActual('heatmap_accidentes')}
          >
            <div className="text-4xl mb-2">🗺️</div>
            <p className="text-white font-semibold">Mapa General</p>
          </button>

          <button
            className={`p-6 rounded-xl shadow-lg transition-all transform hover:scale-105 ${
              mapaActual === 'heatmap_shap'
                ? 'bg-gradient-to-br from-blue-500 to-cyan-500'
                : 'bg-gradient-to-br from-gray-300 to-gray-400'
            }`}
            onClick={() => setMapaActual('heatmap_shap')}
          >
            <div className="text-4xl mb-2">🔥</div>
            <p className="text-white font-semibold">Mapa SHAP</p>
          </button>

          <button
            className={`p-6 rounded-xl shadow-lg transition-all transform hover:scale-105 ${
              mapaActual === 'clusters_criticos'
                ? 'bg-gradient-to-br from-green-500 to-teal-500'
                : 'bg-gradient-to-br from-gray-300 to-gray-400'
            }`}
            onClick={() => setMapaActual('clusters_criticos')}
          >
            <div className="text-4xl mb-2">📍</div>
            <p className="text-white font-semibold">Top 5 Clusters</p>
          </button>

          <button
            className={`p-6 rounded-xl shadow-lg transition-all transform hover:scale-105 ${
              mapaActual === 'mapa_clusters'
                ? 'bg-gradient-to-br from-yellow-500 to-orange-500'
                : 'bg-gradient-to-br from-gray-300 to-gray-400'
            }`}
            onClick={() => setMapaActual('mapa_clusters')}
          >
            <div className="text-4xl mb-2">🌍</div>
            <p className="text-white font-semibold">Todos los Clusters</p>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{mapas[mapaActual].titulo}</h2>
        <p className="text-gray-700 mb-4">{mapas[mapaActual].descripcion}</p>
        
        <div className="mb-4">
          <a 
            href={mapas[mapaActual].archivo}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            🗺️ Abrir Mapa en Pantalla Completa
          </a>
        </div>
        
        <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-inner border-2 border-gray-200">
          <iframe 
            key={mapaActual}
            src={mapas[mapaActual].archivo}
            title={mapas[mapaActual].titulo}
            className="w-full h-full border-0"
            allow="fullscreen"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Guía de Uso de los Mapas</h2>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Interactividad</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li><strong>Zoom:</strong> Usa la rueda del ratón o los botones +/- para acercar o alejar</li>
          <li><strong>Desplazamiento:</strong> Arrastra el mapa para moverte por Bogotá</li>
          <li><strong>Marcadores:</strong> Haz clic en los marcadores para ver información detallada</li>
          <li><strong>Capas:</strong> Algunos mapas tienen controles de capas en la esquina superior derecha</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">Interpretación de Colores</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Mapas de calor:</strong>
            <ul className="ml-8 mt-2 space-y-1">
              <li>Azul: Baja densidad o bajo riesgo</li>
              <li>Verde/Amarillo: Densidad media</li>
              <li>Rojo: Alta densidad o alto riesgo</li>
            </ul>
          </li>
          <li><strong>Marcadores:</strong>
            <ul className="ml-8 mt-2 space-y-1">
              <li>Rojo oscuro: Clusters con mayor letalidad (riesgo peatonal)</li>
              <li>Naranja: Otros clusters críticos</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Descripción de Cada Mapa</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Mapa de Calor General</h3>
            <p className="text-gray-700 mb-2">
              Muestra la distribución espacial de todos los accidentes registrados.
              Las zonas más rojas indican mayor cantidad de accidentes. Útil para
              identificar corredores viales problemáticos y zonas de alta accidentalidad.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li><strong>Fuente:</strong> Dataset completo de accidentes</li>
              <li><strong>Visualización:</strong> Densidad por área geográfica</li>
              <li><strong>Uso:</strong> Visión general de la problemática en la ciudad</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Mapa de Calor SHAP</h3>
            <p className="text-gray-700 mb-2">
              Visualización geoespacial de los valores SHAP para accidentes "Con Muertos".
              Las zonas más rojas no solo tienen más accidentes, sino que tienen mayor
              probabilidad de ser fatales según el modelo predictivo.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li><strong>Fuente:</strong> Análisis SHAP del modelo Random Forest</li>
              <li><strong>Visualización:</strong> Riesgo de fatalidad por ubicación</li>
              <li><strong>Uso:</strong> Priorización de intervenciones para prevenir muertes</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Clusters Críticos (Top 5)</h3>
            <p className="text-gray-700 mb-2">
              Mapa con marcadores específicos de los 5 clusters más peligrosos identificados
              por el análisis DBSCAN. Cada marcador muestra información detallada del cluster.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li><strong>Fuente:</strong> Top 5 del análisis de clustering</li>
              <li><strong>Visualización:</strong> Marcadores puntuales</li>
              <li><strong>Uso:</strong> Identificación de ubicaciones exactas para intervención</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Mapa Completo de Clusters</h3>
            <p className="text-gray-700 mb-2">
              Combinación de mapa de calor de densidad de los 4,090 clusters con marcadores
              de los clusters más críticos. Ofrece una visión integral del análisis.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li><strong>Fuente:</strong> Clustering DBSCAN completo</li>
              <li><strong>Visualización:</strong> Calor + marcadores</li>
              <li><strong>Uso:</strong> Análisis integral y contextualizado</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Análisis Comparativo</h2>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Diferencias Clave Entre los Mapas</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                  Mapa
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                  Enfoque
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                  Mejor Para
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">General</td>
                <td className="px-6 py-4 text-sm text-gray-700">Volumen total de accidentes</td>
                <td className="px-6 py-4 text-sm text-gray-700">Identificar zonas de alta frecuencia</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">SHAP</td>
                <td className="px-6 py-4 text-sm text-gray-700">Riesgo de fatalidad</td>
                <td className="px-6 py-4 text-sm text-gray-700">Prevención de accidentes mortales</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Top 5 Clusters</td>
                <td className="px-6 py-4 text-sm text-gray-700">Puntos críticos específicos</td>
                <td className="px-6 py-4 text-sm text-gray-700">Intervenciones focalizadas</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Todos los Clusters</td>
                <td className="px-6 py-4 text-sm text-gray-700">Visión integral</td>
                <td className="px-6 py-4 text-sm text-gray-700">Planificación estratégica</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Aplicaciones Prácticas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Para Autoridades de Tránsito</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Planificación de operativos de control en zonas críticas</li>
              <li>Asignación de recursos (agentes, señalización, infraestructura)</li>
              <li>Evaluación de efectividad de intervenciones previas</li>
              <li>Diseño de campañas de concientización geolocalizadas</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Para Planeación Urbana</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Identificación de necesidades de infraestructura vial</li>
              <li>Priorización de proyectos de mejoramiento vial</li>
              <li>Diseño de nuevas vías considerando patrones de riesgo</li>
              <li>Planificación de transporte público alternativo</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Para Investigación</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Análisis espacial de factores de riesgo</li>
              <li>Estudios de correlación con variables socioeconómicas</li>
              <li>Modelado predictivo de nuevas zonas de riesgo</li>
              <li>Evaluación de políticas públicas implementadas</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Limitaciones y Consideraciones</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Calidad de datos:</strong> Los mapas dependen de la precisión
            de las coordenadas reportadas en los accidentes
          </li>
          <li>
            <strong>Subregistro:</strong> Puede haber accidentes no reportados,
            especialmente los de menor gravedad
          </li>
          <li>
            <strong>Cambios temporales:</strong> Los patrones pueden cambiar con
            nuevas intervenciones o cambios en la infraestructura
          </li>
          <li>
            <strong>Contexto necesario:</strong> Los mapas deben interpretarse
            considerando factores como volumen de tráfico, tipo de vías, etc.
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Próximas Mejoras</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Integración de datos en tiempo real</li>
          <li>Filtros interactivos por fecha, hora, tipo de accidente</li>
          <li>Comparación temporal (antes/después de intervenciones)</li>
          <li>Integración con datos de tráfico vehicular</li>
          <li>Análisis de rutas alternativas más seguras</li>
          <li>Dashboard predictivo de zonas de riesgo futuras</li>
        </ul>
      </div>
    </div>
  );
}

export default MapasInteractivos;
