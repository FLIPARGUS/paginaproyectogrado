import React from 'react';

function Clustering() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 mb-8 shadow-xl">
        <h1 className="text-4xl font-bold mb-2">Clustering Geográfico</h1>
        <p className="text-lg text-blue-100">Identificación de zonas críticas mediante DBSCAN</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Metodología de Clustering</h2>
        <p className="text-gray-700 mb-4">
          Se utilizó el algoritmo <strong>DBSCAN (Density-Based Spatial Clustering of Applications with Noise)</strong>
          para identificar zonas geográficas con alta concentración de accidentes.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Parámetros del Algoritmo</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>eps:</strong> 0.001 (equivalente a ~100-150 metros)</li>
          <li><strong>min_samples:</strong> 10 accidentes mínimos por cluster</li>
          <li><strong>Variables:</strong> Latitud y Longitud (coordenadas geográficas)</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">Ventajas de DBSCAN</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Identifica clusters de formas arbitrarias (no solo circulares)</li>
          <li>No requiere especificar el número de clusters de antemano</li>
          <li>Detecta puntos de ruido (accidentes aislados)</li>
          <li>Agrupa accidentes cercanos geográficamente</li>
        </ul>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Resultados del Clustering</h2>
        <p className="text-gray-700 mb-4">
          El análisis identificó aproximadamente <strong>4,090 clusters críticos</strong> en Bogotá D.C.,
          representando zonas con concentración significativa de accidentes.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Interpretación</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Cada cluster representa una "zona caliente" de accidentalidad</li>
          <li>Los clusters más grandes indican intersecciones o tramos viales problemáticos</li>
          <li>Los puntos aislados (ruido) son accidentes en zonas de baja concentración</li>
        </ul>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Top 10 Clusters Más Densos</h2>
        <p className="text-gray-700 mb-4">
          Estos son los clusters con mayor número de accidentes, representando
          las zonas más críticas de la ciudad.
        </p>
        
        <div className="mb-6">
          <p className="text-gray-600 italic">
            Los clusters más críticos son:
          </p>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-4">Características de los Top 5 Clusters</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="bg-gradient-to-br from-pink-500 to-red-600 text-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-2">Cluster 3633</h3>
            <p className="text-pink-100 mb-2 font-semibold">📍 Engativá</p>
            <p className="text-sm text-pink-200">Mayor concentración</p>
            <p className="text-sm text-pink-200">🏍️👤 Moto/Peatón</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-2">Cluster 1131</h3>
            <p className="text-blue-100 mb-2 font-semibold">📍 Kennedy</p>
            <p className="text-sm text-blue-200">Segunda mayor densidad</p>
            <p className="text-sm text-blue-200">🚶 Riesgo Peatonal</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-teal-500 text-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-2">Cluster 249</h3>
            <p className="text-green-100 mb-2 font-semibold">📍 Kennedy</p>
            <p className="text-sm text-green-200">Tercera mayor concentración</p>
            <p className="text-sm text-green-200">🔀 Riesgo Mixto</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-2">Cluster 215</h3>
            <p className="text-yellow-100 mb-2 font-semibold">📍 Fontibón</p>
            <p className="text-sm text-yellow-200">Cuarta mayor densidad</p>
            <p className="text-sm text-yellow-200">🔀 Riesgo Mixto</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-500 to-indigo-800 text-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-2">Cluster 53</h3>
            <p className="text-cyan-100 mb-2 font-semibold">📍 Kennedy</p>
            <p className="text-sm text-cyan-200">Quinta mayor concentración</p>
            <p className="text-sm text-cyan-200">🔀 Riesgo Mixto</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Caracterización de Riesgos por Cluster</h2>
        <p className="text-gray-700 mb-4">
          Cada cluster fue analizado para identificar el tipo de riesgo predominante
          basado en las variables de los accidentes que contiene.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">Tipos de Riesgo Identificados</h3>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>
            <strong>🏍️ Riesgo Motociclista (72.5% de clusters):</strong> La mayoría abrumadora de los clusters 
            tienen a las motocicletas como factor dominante. Estos clusters están asociados principalmente con 
            lesiones y representan el patrón de accidentalidad más frecuente en Bogotá.
          </li>
          <li>
            <strong>🚶 Riesgo Peatonal - Alta Letalidad (23.3% de clusters):</strong> Casi 1 de cada 4 clusters 
            críticos involucra peatones como factor predominante. A pesar de ser menos frecuentes que los clusters 
            de motos, estos tienen <strong>mayor probabilidad de ser fatales</strong> debido a la vulnerabilidad 
            extrema de los peatones.
          </li>
          <li>
            <strong>🚴 Riesgo Ciclistas (3.1% de clusters):</strong> Un pequeño porcentaje de clusters se caracteriza 
            por alta proporción de accidentes que involucran bicicletas. Aunque minoritarios, requieren intervenciones 
            específicas de infraestructura ciclista.
          </li>
          <li>
            <strong>🔀 Otros Riesgos / Mixto (1.1% de clusters):</strong> Una minoría muy reducida de clusters no tiene 
            un factor dominante claro, con múltiples tipos de vehículos y circunstancias convergentes.
          </li>
        </ol>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Distribución de Clusters por Tipo de Riesgo</h2>
        <div className="mb-6">
          <img 
            src="/images/distribucion_clusters.png" 
            alt="Distribución de Clusters"
            className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <p className="hidden text-gray-600 italic text-center mt-4">
            La imagen se generará al ejecutar las celdas de exportación en el notebook models.ipynb
          </p>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Análisis de la Distribución</h3>
        <div className="space-y-4 text-gray-700">
          <p>
            El gráfico de torta revela un patrón claro y contundente sobre la naturaleza de la 
            accidentalidad en Bogotá:
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <p className="font-semibold text-blue-900 mb-2">🏍️ Dominancia Motociclista (72.5%)</p>
            <p>
              Casi <strong>3 de cada 4 zonas críticas</strong> están dominadas por accidentes de motocicletas. 
              Esto confirma que la motocicleta es el vehículo más involucrado en la concentración espacial de 
              siniestros, reflejando su alta exposición al riesgo en el tráfico urbano bogotano.
            </p>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
            <p className="font-semibold text-orange-900 mb-2">🚶 Riesgo Peatonal Significativo (23.3%)</p>
            <p>
              Aunque representan solo 1 de cada 4 clusters, los <strong>clusters peatonales son los más letales</strong>. 
              Este 23.3% debe ser prioridad absoluta en políticas de prevención de fatalidades, ya que cada uno de estos 
              clusters tiene potencial de desenlaces fatales.
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
            <p className="font-semibold text-green-900 mb-2">🚴 Ciclistas y Otros (4.2% combinado)</p>
            <p>
              Los clusters de ciclistas (3.1%) y mixtos (1.1%) representan una fracción minoritaria. Sin embargo, 
              la presencia de clusters específicos de ciclistas indica que existe suficiente concentración espacial 
              para justificar intervenciones focalizadas de infraestructura ciclista.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-4 rounded-r-lg mt-4">
            <p className="font-semibold text-purple-900 mb-2">📊 Implicación Estratégica</p>
            <p>
              La distribución sugiere una <strong>estrategia dual de intervención</strong>:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li><strong>Reducción de lesiones (72.5%):</strong> Campañas masivas de seguridad motociclista, uso de casco, protecciones</li>
              <li><strong>Prevención de muertes (23.3%):</strong> Infraestructura peatonal crítica en clusters identificados</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Perfil de Riesgo: Top 5 Clusters</h2>
        <div className="mb-6">
          <img 
            src="/images/perfil_top5_clusters.png" 
            alt="Perfil Top 5 Clusters"
            className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <p className="hidden text-gray-600 italic text-center mt-4">
            La imagen se generará al ejecutar las celdas de exportación en el notebook models.ipynb
          </p>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Interpretación del Gráfico</h3>
        <p className="text-gray-700 mb-3">
          El gráfico de barras agrupadas revela perfiles de riesgo claramente diferenciados entre 
          los 5 clusters más peligrosos de Bogotá:
        </p>

        <div className="space-y-4 text-gray-700 mb-6">
          <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-r-lg">
            <p className="font-semibold text-purple-900 mb-2">🏍️ Cluster 3633 (Engativá) - Dominancia Extrema de Motos</p>
            <p>
              Con <strong>36% de involucración de motocicletas</strong>, este cluster supera ampliamente 
              a todos los demás. La presencia adicional de peatones (10%) y bicicletas (7%) crea un 
              escenario de <strong>alta vulnerabilidad mixta</strong>. Es el cluster con mayor intensidad 
              de motos en toda Bogotá.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
            <p className="font-semibold text-blue-900 mb-2">🚶 Cluster 1131 (Kennedy) - ÚNICO Dominado por Peatones</p>
            <p>
              Este cluster presenta un perfil <strong>radicalmente diferente</strong>: los peatones representan 
              el <strong>17.5%</strong> mientras que las motos solo el 6%. Es el <strong>único cluster de los 5 
              donde peatones superan a motos</strong>, confirmando su clasificación como zona de 
              <strong> letalidad peatonal crítica</strong>. Requiere intervenciones prioritarias de infraestructura 
              peatonal.
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded-r-lg">
            <p className="font-semibold text-yellow-900 mb-2">🔀 Clusters 215, 531, 106 - Perfiles Mixtos Balanceados</p>
            <p>
              Estos tres clusters muestran proporciones más balanceadas entre motos (16-25%), peatones (4-7.5%), 
              y bicicletas (5-9%). El cluster 215 destaca por mayor presencia de ciclistas (9%), mientras que 
              el 531 mantiene equilibrio entre todos los actores vulnerables. Requieren <strong>intervenciones 
              integrales</strong> que aborden múltiples factores simultáneamente.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-lg">
            <p className="font-semibold text-red-900 mb-2">⚡ Factor Velocidad - Presencia Limitada pero Letal</p>
            <p>
              Aunque la velocidad aparece en proporciones bajas (1-2% en todos los clusters), su presencia 
              es <strong>altamente significativa</strong>. Como confirmó el análisis SHAP, cuando la velocidad 
              está presente actúa como <strong>"catalizador de la muerte"</strong>, elevando drásticamente la 
              probabilidad de fatalidad independientemente del bajo porcentaje.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-600 p-4 rounded-lg">
          <p className="font-semibold text-indigo-900 mb-2">🎯 Conclusión Estratégica</p>
          <p>
            La heterogeneidad de perfiles confirma que <strong>no existe una solución única</strong> para 
            reducir accidentalidad. Mientras el cluster 3633 necesita intervenciones masivas para motociclistas, 
            el 1131 requiere infraestructura peatonal urgente, y los clusters mixtos demandan soluciones 
            integrales que protejan simultáneamente a múltiples actores vulnerables. Esta diversidad justifica 
            plenamente el enfoque de clustering para políticas focalizadas.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Análisis Detallado de Clusters Críticos</h2>
        
        <div className="space-y-6">
          <div className="border-l-4 border-pink-500 pl-4 bg-pink-50 p-4 rounded-r-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">🔴 Cluster 3633 - Mayor Densidad</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Localidad:</strong> Engativá</li>
              <li><strong>Direcciones principales:</strong> KR 3 E - CL 91, KR 60 - CL 63, KR 30 - CL 26</li>
              <li><strong>Tipo de riesgo:</strong> 🏍️👤 Moto/Peatón (Alta Letalidad)</li>
              <li><strong>Características:</strong> Intersecciones de alto tráfico con convergencia de motociclistas y peatones</li>
              <li><strong>Recomendación:</strong> Semáforos peatonales inteligentes, señalización específica para motos, carriles segregados, iluminación LED</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-4 rounded-r-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">🔵 Cluster 1131 - Alto Riesgo Peatonal</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Localidad:</strong> Kennedy</li>
              <li><strong>Direcciones principales:</strong> KR 80 - CL 2 S (zona Av. Primero de Mayo)</li>
              <li><strong>Tipo de riesgo:</strong> 🚶 Peatonal (Letalidad Crítica)</li>
              <li><strong>Características:</strong> Zona con flujo peatonal intenso y velocidades vehiculares peligrosas</li>
              <li><strong>Recomendación:</strong> Pasos peatonales elevados, puentes peatonales, reductores de velocidad, iluminación nocturna reforzada</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded-r-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">🟢 Cluster 249 - Kennedy (Av. Ciudad de Cali)</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Localidad:</strong> Kennedy</li>
              <li><strong>Direcciones principales:</strong> Av. Ciudad de Cali - CL 43 S, Av. Ciudad de Cali - Av. Ciudad de Villavicencio</li>
              <li><strong>Tipo de riesgo:</strong> 🔀 Mixto (Múltiples actores viales)</li>
              <li><strong>Características:</strong> Corredor vial de alta velocidad con mezcla de transporte público, particular y carga</li>
              <li><strong>Recomendación:</strong> Rediseño geométrico de intersecciones, control electrónico de velocidad, separación de flujos vehiculares</li>
            </ul>
          </div>

          <div className="border-l-4 border-yellow-500 pl-4 bg-yellow-50 p-4 rounded-r-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">🟡 Cluster 215 - Fontibón (Av. Ciudad de Cali)</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Localidad:</strong> Fontibón</li>
              <li><strong>Direcciones principales:</strong> Av. Ciudad de Cali - CL 13, CL 13 - KR 86</li>
              <li><strong>Tipo de riesgo:</strong> 🔀 Mixto (Zona industrial-comercial)</li>
              <li><strong>Características:</strong> Corredor con alta presencia de vehículos de carga y tráfico mixto</li>
              <li><strong>Recomendación:</strong> Regulación horaria de carga pesada, mejora de señalización, bahías de desaceleración</li>
            </ul>
          </div>

          <div className="border-l-4 border-indigo-500 pl-4 bg-indigo-50 p-4 rounded-r-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">🟣 Cluster 53 - Kennedy (Av. Boyacá - Av. Primero de Mayo)</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Localidad:</strong> Kennedy</li>
              <li><strong>Direcciones principales:</strong> Av. Boyacá - Av. Primero de Mayo (intersección crítica)</li>
              <li><strong>Tipo de riesgo:</strong> 🔀 Mixto (Intersección compleja)</li>
              <li><strong>Características:</strong> Cruce de dos avenidas principales con alto volumen vehicular y complejidad de giros</li>
              <li><strong>Recomendación:</strong> Semaforización inteligente coordinada, señalización horizontal reforzada, control de giros conflictivos, posible intercambiador vial a futuro</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-5 border-l-4 border-blue-600">
          <p className="text-gray-800">
            <strong>📌 Patrón Identificado:</strong> Kennedy concentra 3 de los 5 clusters más críticos 
            (1131, 249, 53), lo que confirma la necesidad de inversión prioritaria en infraestructura vial 
            en esta localidad. Av. Ciudad de Cali aparece en 2 clusters diferentes (249 y 215), 
            identificándose como corredor de alto riesgo que requiere intervención integral.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Mapa Geográfico de Clusters</h2>
        <p className="text-gray-700 mb-4">
          Visualización interactiva de los clusters críticos en Bogotá D.C.
          con mapa de calor de densidad y marcadores para los top clusters.
        </p>
        <div className="mb-4">
          <a 
            href="/maps/Mapa_Preciso_Clusters_Bogota.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            🗺️ Abrir Mapa en Pantalla Completa
          </a>
        </div>
        <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-inner border-2 border-gray-200">
          <iframe 
            src="/maps/Mapa_Preciso_Clusters_Bogota.html"
            title="Mapa de Clusters de Bogotá"
            className="w-full h-full border-0"
            allow="fullscreen"
          />
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Características del Mapa</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Capa de calor:</strong> Muestra la densidad de los 4,090 clusters</li>
          <li><strong>Marcadores rojos:</strong> Indican los clusters más críticos</li>
          <li><strong>Interactivo:</strong> Haz clic en los marcadores para ver detalles</li>
          <li><strong>Gradiente de color:</strong> Azul (bajo riesgo) → Verde → Rojo (alto riesgo)</li>
        </ul>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Implicaciones para Políticas Públicas</h2>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Priorización de Recursos</h3>
        <p className="text-gray-700 mb-3">
          El análisis de 4,090 clusters permite focalizar inversiones en zonas críticas comprobadas:
        </p>
        <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
          <li>
            <strong>🎯 Kennedy - Prioridad Absoluta:</strong> Concentra 3 de los 5 clusters más críticos 
            (1131, 249, 53). Requiere inversión integral en infraestructura vial.
          </li>
          <li>
            <strong>🛣️ Av. Ciudad de Cali - Corredor Crítico:</strong> Aparece en 2 clusters (249 y 215). 
            Necesita intervención coordinada en toda su extensión.
          </li>
          <li>
            <strong>🏍️ Cluster 3633 (Engativá):</strong> Mayor densidad (36% motos). Requiere infraestructura 
            específica para motociclistas con urgencia inmediata.
          </li>
          <li>
            <strong>🚶 Cluster 1131 (Kennedy):</strong> Único dominado por peatones (17.5%). Prioridad 
            para prevención de fatalidades con pasos elevados y puentes peatonales.
          </li>
        </ol>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">Intervenciones Diferenciadas por Perfil</h3>
        <p className="text-gray-700 mb-3">
          La heterogeneidad de perfiles exige soluciones específicas por tipo de cluster:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Clusters motociclistas (72.5%):</strong> Carriles segregados, señalización LED específica, 
            campañas masivas de uso de casco y equipo protector
          </li>
          <li>
            <strong>Clusters peatonales (23.3%):</strong> Pasos elevados, puentes peatonales, semáforos inteligentes, 
            reductores de velocidad, iluminación nocturna reforzada
          </li>
          <li>
            <strong>Clusters mixtos (Ej: 215, 531, 249):</strong> Rediseño geométrico de intersecciones, 
            separación de flujos vehiculares, semaforización coordinada, control electrónico de velocidad
          </li>
          <li>
            <strong>Clusters con ciclistas (3.1%):</strong> Ciclorrutas segregadas, señalización horizontal 
            diferenciada, zonas de espera adelantada en semáforos
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Conclusiones del Análisis de Clustering</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>
            DBSCAN identificó exitosamente 4,090 clusters de accidentes en Bogotá,
            revelando patrones espaciales claros.
          </li>
          <li>
            Los top 10 clusters concentran un número significativo de accidentes
            y deben ser prioridad para intervenciones.
          </li>
          <li>
            La caracterización por tipo de riesgo permite diseñar soluciones
            específicas en lugar de aplicar medidas genéricas.
          </li>
          <li>
            El análisis geoespacial combinado con SHAP proporciona evidencia
            robusta para la toma de decisiones en seguridad vial.
          </li>
          <li>
            La actualización periódica de este análisis permitiría evaluar
            la efectividad de las intervenciones implementadas.
          </li>
        </ol>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Próximos Pasos</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Validación en campo:</strong> Visitar los clusters críticos para
            confirmar condiciones identificadas en el análisis
          </li>
          <li>
            <strong>Monitoreo temporal:</strong> Analizar cómo evolucionan los clusters
            tras implementar intervenciones
          </li>
          <li>
            <strong>Predicción espacial:</strong> Utilizar los clusters para predecir
            nuevas zonas de riesgo emergentes
          </li>
          <li>
            <strong>Integración con otros datos:</strong> Combinar con datos de flujo
            vehicular, condiciones viales, y datos socioeconómicos
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Clustering;
