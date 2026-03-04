import React from 'react';

function EDA() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 mb-8 shadow-xl">
        <h1 className="text-4xl font-bold mb-2">Análisis Exploratorio de Datos (EDA)</h1>
        <p className="text-lg text-blue-100">Exploración completa del dataset de accidentes de tránsito en Bogotá D.C.</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Resumen del Dataset</h2>
        <p className="text-gray-700 mb-4">
          El dataset contiene información histórica de accidentes de tránsito en Bogotá,
          incluyendo variables temporales, geográficas, y características del accidente.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Variables Principales</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Temporales:</strong> Hora del accidente, día de la semana, fecha</li>
          <li><strong>Geográficas:</strong> Localidad, dirección, coordenadas (latitud/longitud)</li>
          <li><strong>Características:</strong> Clase de accidente, gravedad, vehículos involucrados</li>
          <li><strong>Factores de Riesgo:</strong> Presencia de moto, bicicleta, peatón, velocidad, embriaguez, etc.</li>
        </ul>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Distribución de Gravedad de Accidentes</h2>
        <p className="text-gray-700 mb-4">
          Los accidentes se clasifican en tres categorías según su gravedad:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>Solo Daños:</strong> Accidentes que solo causaron daños materiales</li>
          <li><strong>Con Heridos:</strong> Accidentes con personas lesionadas</li>
          <li><strong>Con Muertos:</strong> Accidentes fatales</li>
        </ul>
        
        <div className="my-6">
          <img 
            src="/images/distribucion_gravedad.png" 
            alt="Distribución de Gravedad"
            className="w-full max-w-4xl mx-auto rounded-lg shadow-md"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <p className="hidden text-gray-600 italic text-center mt-4">
            La imagen se generará al ejecutar las celdas de exportación en el notebook eda.ipynb
          </p>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">Análisis de la Distribución</h3>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
          <p className="text-gray-700 mb-3">
            <strong>Insigts:</strong>
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>
              El 57.46% de los eventos (160,078 casos) resultan únicamente en afectaciones materiales, estableciendo la base de la siniestralidad 
              operativa en la ciudad.
            </li>
            <li>
              Con un 40.71% de los accidentes (113,419 casos) 
              reportando heridos, se evidencia un riesgo crítico de integridad física para los usuarios de la vía.
            </li>
            <li>
              Los siniestros fatales representan el 1.84% del total. 
              Esta baja frecuencia (5,117 casos) configura un problema de clases desbalanceadas que requiere 
              análisis predictivo especializado para identificar patrones de alta severidad.
            </li>
            <li>
              El análisis consolida un universo de 278,614 accidentes, 
              proporcionando una base estadística robusta para el entrenamiento de modelos de Inteligencia Artificial.
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Mapa de Calor de Accidentes</h2>
        <p className="text-gray-700 mb-4">
          Visualización geoespacial de la densidad de accidentes en Bogotá D.C.
          Este mapa muestra las zonas con mayor concentración de incidentes.
        </p>
        <div className="mb-4">
          <a 
            href="/maps/heatmap_accidentes_bogota.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            🗺️ Abrir Mapa en Pantalla Completa
          </a>
        </div>
        <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-inner border-2 border-gray-200">
          <iframe 
            src="/maps/heatmap_accidentes_bogota.html"
            title="Mapa de Calor de Accidentes"
            className="w-full h-full border-0"
            allow="fullscreen"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Patrones Temporales</h2>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Accidentes por Hora del Día</h3>
        <p className="text-gray-700 mb-4">
          El análisis temporal revela patrones claros en la distribución horaria de los accidentes,
          con picos pronunciados durante las horas de mayor tráfico vehicular.
        </p>

        <div className="my-6">
          <img 
            src="/images/accidentes_por_hora.png" 
            alt="Accidentes por Hora"
            className="w-full max-w-5xl mx-auto rounded-lg shadow-md"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <p className="hidden text-gray-600 italic text-center mt-4">
            La imagen se generará al ejecutar las celdas de exportación en el notebook eda.ipynb
          </p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
          <p className="text-gray-700 mb-3">
            <strong>Insights Clave:</strong>
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>
              La franja de la tarde (35.3%) registra el mayor volumen de siniestros, alcanzando su máximo a las 14:00 hrs. Sin embargo, estos eventos son predominantemente de "Solo Daños" (64.9%), asociados a congestión y baja velocidad.
            </li>
            <li>
              Aunque la mañana ocupa el segundo lugar en volumen, la hora de las 07:00 presenta una de las tasas más altas de heridos (46.9%), lo que sugiere que la prisa por el ingreso laboral incrementa la violencia de los impactos.
            </li>
            <li>
              Existe una correlación crítica entre la falta de luz natural y la mortalidad. La Noche es la franja con más fatalidades absolutas (1,518 muertes), pero la Madrugada presenta la tasa de letalidad relativa más alta: el 4.3% de los accidentes nocturnos son fatales, comparado con solo el 1.3% de la tarde.
            </li>
            <li>
              Las 05:00 y 06:00 hrs son puntos de inflexión peligrosos; concentran altos volúmenes de heridos y muertos debido a la combinación de fatiga, exceso de velocidad por vías despejadas y la presencia de actores vulnerables iniciando su jornada.
            </li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">Concentración Temporal: Día x Hora</h3>
        <p className="text-gray-700 mb-4">
          El mapa de calor temporal muestra la intersección entre días de la semana y horas del día,
          revelando patrones específicos de comportamiento de la accidentalidad.
        </p>

        <div className="my-6">
          <img 
            src="/images/heatmap_temporal.png" 
            alt="Heatmap Temporal"
            className="w-full max-w-5xl mx-auto rounded-lg shadow-md"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <p className="hidden text-gray-600 italic text-center mt-4">
            La imagen se generará al ejecutar las celdas de exportación en el notebook eda.ipynb
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="text-gray-700 mb-2">
            <strong>Insights Clave:</strong>
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>
              El Viernes (16.1%) se consolida como el día de mayor riesgo, asociado al incremento de flujos vehiculares por el cierre de la jornada laboral y el inicio de actividades sociales.
            </li>
            <li>
              Los días laborales concentran el 74.5% de la siniestralidad, con un patrón bimodal de riesgo máximo a las 07:00 (entrada laboral) y entre las 13:00 y 14:00 (pico de mediodía).
            </li>
            <li>
              El sábado desplaza el riesgo hacia la tarde (13:00 - 15:00), sugiriendo que la accidentalidad en días no laborales está vinculada a dinámicas de consumo y recreación en lugar de desplazamientos pendulares.
            </li>
            <li>
              La concentración máxima detectada (Martes, 07:00) subraya la presión que ejerce la hora pico sobre la infraestructura, donde la congestión extrema no previene, sino que facilita colisiones por proximidad y estrés vial.
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Análisis Geográfico</h2>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Distribución por Localidad</h3>
        <p className="text-gray-700 mb-4">
          La distribución espacial de los accidentes revela patrones geográficos claramente definidos,
          con concentraciones significativas en localidades de alta densidad poblacional y flujo vehicular.
        </p>

        <div className="my-6">
          <img 
            src="/images/accidentes_por_localidad.png" 
            alt="Accidentes por Localidad"
            className="w-full max-w-5xl mx-auto rounded-lg shadow-md"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <p className="hidden text-gray-600 italic text-center mt-4">
            La imagen se generará al ejecutar las celdas de exportación en el notebook eda.ipynb
          </p>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
          <p className="text-gray-700 mb-3">
            <strong>Insights Clave:</strong>
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>
              5 localidades (Kennedy, Engativá, Usaquén, Suba y Fontibón) concentran casi la mitad del total de accidentes de la ciudad (<strong>47.9%</strong>).
            </li>
            <li>
              Con 33,104 eventos, Kennedy no solo lidera en volumen absoluto (<strong>11.9%</strong>), sino que presenta un perfil de severidad alarmante: casi la mitad de sus siniestros resultan en lesiones físicas (<strong>47.9%</strong>), superando el promedio distrital de morbilidad.
            </li>
            <li>
              Mientras que en Usaquén predomina la accidentalidad de "Solo Daños" (<strong>72.9%</strong>), en Kennedy el riesgo vital es significativamente mayor. Esta disparidad sugiere que en el suroccidente de la ciudad convergen factores como mayor densidad de actores vulnerables y diseños viales que permiten colisiones de mayor energía.
            </li>
            <li>
              El hecho de que el Top 10 de localidades agrupe el <strong>75.8%</strong> de la accidentalidad evidencia que las zonas periféricas y de tránsito pesado (conectoras con vías arteriales y salidas de la ciudad) son las áreas de mayor vulnerabilidad estructural.
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Factores de Riesgo Identificados</h2>
        
        <p className="text-gray-700 mb-4">
          El análisis de variables binarias revela la presencia de factores de riesgo específicos
          en los accidentes de tránsito de Bogotá. Estos factores ayudan a comprender las causas
          y características asociadas con la accidentalidad.
        </p>

        <div className="my-6">
          <img 
            src="/images/factores_riesgo.png" 
            alt="Factores de Riesgo"
            className="w-full max-w-5xl mx-auto rounded-lg shadow-md"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <p className="hidden text-gray-600 italic text-center mt-4">
            La imagen se generará al ejecutar las celdas de exportación en el notebook eda.ipynb
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gradient-to-br from-pink-500 to-red-600 text-white rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-3">🏍️ Motocicletas</h3>
            <p className="text-pink-100 text-lg mb-2">Dominio del actor vulnerable</p>
            <ul className="list-disc list-inside space-y-2 text-pink-50">
              <li>Presente en el <strong>30.4%</strong> de la siniestralidad total, siendo el factor de riesgo más crítico</li>
              <li>En accidentes de "Solo Daños": <strong>11%</strong> de participación</li>
              <li>En accidentes fatales y con heridos: <strong>56.7%</strong> y <strong>56.6%</strong> respectivamente</li>
              <li>Correlación directa entre presencia de moto y severidad del evento</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-green-500 to-teal-500 text-white rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-3">🚴 Bicicletas</h3>
            <p className="text-green-100 text-lg mb-2">Vulnerabilidad y letalidad</p>
            <ul className="list-disc list-inside space-y-2 text-green-50">
              <li>Representan el <strong>7.8%</strong> de los casos totales</li>
              <li>Su participación en fatalidades alcanza el <strong>15.1%</strong>, casi el doble de su frecuencia general</li>
              <li>Subraya la desprotección del ciclista ante el entorno vial</li>
              <li>Necesidad urgente de infraestructura segregada y protegida</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-3">⚡ Factores de Alta Energía</h3>
            <p className="text-orange-100 text-lg mb-2">Catalizadores de letalidad</p>
            <ul className="list-disc list-inside space-y-2 text-orange-50">
              <li><strong>Velocidad:</strong> Presente en el 8.1% de accidentes con muertes</li>
              <li><strong>Embriaguez:</strong> 2.1% de frecuencia general</li>
              <li>Aunque con frecuencias bajas, multiplican exponencialmente la probabilidad de desenlace fatal</li>
              <li>Actúan como catalizadores que convierten colisiones convencionales en eventos letales</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-3">🔗 Multifactorialidad</h3>
            <p className="text-purple-100 text-lg mb-2">Convergencia de riesgos</p>
            <ul className="list-disc list-inside space-y-2 text-purple-50">
              <li>El <strong>38.1%</strong> de los accidentes presentan al menos un factor de riesgo identificado</li>
              <li>El <strong>3.8%</strong> de los casos involucran 2 o más factores simultáneos</li>
              <li>La presencia múltiple describe escenarios de siniestralidad compleja</li>
              <li>Convergencia entre error humano y vulnerabilidad del vehículo</li>
            </ul>
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-4">
          <p className="text-gray-700 mb-2">
            <strong>🕳️ Huecos en la Vía:</strong>
          </p>
          <p className="text-gray-700">
            Aunque menos frecuente, los huecos y el mal estado de la infraestructura vial
            representan un factor de riesgo adicional que puede causar pérdida de control
            vehicular, especialmente para motocicletas y bicicletas. La inversión en
            mantenimiento vial es fundamental para la prevención de accidentes.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Insights Principales</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Los accidentes muestran patrones temporales claros relacionados con horas pico</li>
          <li>Ciertas localidades concentran la mayoría de los accidentes</li>
          <li>Los factores como velocidad, embriaguez y tipo de vehículo influyen en la gravedad</li>
          <li>Los accidentes con peatones tienen mayor probabilidad de ser fatales</li>
          <li>Existe una clara distribución geográfica de zonas de alto riesgo</li>
        </ol>
      </div>
    </div>
  );
}

export default EDA;
