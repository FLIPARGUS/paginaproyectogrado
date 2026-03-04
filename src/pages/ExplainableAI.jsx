import React from 'react';

function ExplainableAI() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 mb-8 shadow-xl">
        <h1 className="text-4xl font-bold mb-2">Explainable AI con SHAP</h1>
        <p className="text-lg text-blue-100">Interpretación de las predicciones del modelo mediante valores SHAP</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">¿Qué es SHAP?</h2>
        <p className="text-gray-700 mb-4">
          <strong>SHAP (SHapley Additive exPlanations)</strong> es una técnica de Explainable AI
          que permite entender cómo cada variable contribuye a las predicciones del modelo.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Beneficios de SHAP</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Transparencia:</strong> Explica por qué el modelo hace ciertas predicciones</li>
          <li><strong>Identificación de factores:</strong> Muestra qué variables impulsan el riesgo</li>
          <li><strong>Base teórica sólida:</strong> Fundamentado en teoría de juegos cooperativos</li>
          <li><strong>Aplicable a cualquier modelo:</strong> Funciona con Random Forest, XGBoost, etc.</li>
        </ul>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Análisis SHAP: Accidentes CON MUERTOS</h2>
        <p className="text-gray-700 mb-4">
          Este gráfico muestra los factores que más aumentan la probabilidad de que
          un accidente sea fatal.
        </p>
        <div className="mb-6">
          <img 
            src="/images/shap_con_muertos.png" 
            alt="SHAP - Con Muertos"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-md"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <p className="hidden text-gray-600 italic text-center mt-4">
            La imagen se generará al ejecutar las celdas de exportación en el notebook models.ipynb
          </p>
        </div>

        <div className="space-y-4 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Interpretación del Gráfico SHAP</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Eje Y:</strong> Variables ordenadas por importancia (arriba = más importante)</li>
            <li><strong>Eje X:</strong> Valor SHAP (impacto en la probabilidad de accidente fatal)</li>
            <li><strong>Color:</strong> 
              <ul className="ml-8 mt-2 space-y-1">
                <li>Rojo = Valor alto de la variable</li>
                <li>Azul = Valor bajo de la variable</li>
              </ul>
            </li>
            <li><strong>Dispersión horizontal:</strong> Indica la magnitud del impacto</li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 border-l-4 border-red-500">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">¿Por qué el modelo predice un accidente como fatal?</h3>
          
          <div className="space-y-4 text-gray-700">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">🏍️ Vulnerabilidad Extrema del Motociclista</h4>
              <p>
                La variable <strong>Con_Moto</strong> es el factor de mayor impacto. Los puntos rojos (presencia de moto) 
                se desplazan agresivamente hacia la derecha, confirmando que la involucración de una motocicleta es el 
                principal catalizador que empuja al modelo a predecir un desenlace fatal.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-2">🚶 Riesgo Crítico para Peatones</h4>
              <p>
                Al igual que con las motos, la presencia de peatones (<strong>Con_Peaton</strong>) muestra una dispersión 
                roja clara hacia valores SHAP positivos. Esto identifica al peatón como el actor con mayor riesgo biológico 
                ante cualquier siniestro detectado.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-2">⚡ El Factor Velocidad</h4>
              <p>
                Aunque la variable <strong>Con_Velocidad</strong> tiene menos frecuencia en el dataset, su impacto SHAP 
                es muy alto (puntos rojos muy a la derecha). Esto indica que, cuando la velocidad está presente, la 
                probabilidad de muerte se dispara drásticamente, actuando como un <strong>factor de letalidad casi 
                garantizado</strong>.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-2">💥 Influencia de la Clase de Accidente</h4>
              <p>
                La variable <strong>Clase_Acc_n</strong> muestra que ciertos tipos de colisiones (probablemente atropellos 
                o choques contra objeto fijo) son determinantes para elevar el riesgo, separando claramente los siniestros 
                de daños simples de los eventos con víctimas.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-2">🕐 Patrones Temporales y de Carga</h4>
              <p>
                La variable <strong>Hora_Acc</strong> muestra una mezcla de impactos, pero confirma que ciertas franjas 
                horarias (puntos hacia la derecha) incrementan la severidad. Asimismo, la presencia de vehículos de carga 
                (<strong>Con_Carga</strong>) y el estado de la vía (<strong>Con_Huecos</strong>) actúan como agravantes 
                específicos identificados por el modelo.
              </p>
            </div>
          </div>

          <div className="mt-6 bg-white rounded-lg p-4 border-l-4 border-blue-500">
            <p className="text-gray-800 italic">
              <strong>💡 Conclusión</strong> "La IA no solo identifica el riesgo, sino que confirma la 
              fragilidad de los actores vulnerables. La mayor probabilidad de muerte en Bogotá ocurre cuando convergen 
              la presencia de motocicletas o peatones con exceso de velocidad, independientemente de la localidad o el 
              día de la semana."
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Comparación: HERIDOS vs MUERTOS</h2>
        <p className="text-gray-700 mb-4">
          Esta comparación muestra las diferencias en los factores que causan lesiones
          versus los que causan muertes.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Factores que causan LESIONES (Heridos)</h4>
            <img 
              src="/images/shap_heridos.png" 
              alt="SHAP - Heridos"
              className="w-full rounded-lg shadow-md"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <p className="hidden text-gray-600 italic text-center mt-4">
              La imagen se generará al ejecutar las celdas de exportación
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Factores que causan LETALIDAD (Muertos)</h4>
            <img 
              src="/images/shap_muertos.png" 
              alt="SHAP - Muertos"
              className="w-full rounded-lg shadow-md"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <p className="hidden text-gray-600 italic text-center mt-4">
              La imagen se generará al ejecutar las celdas de exportación
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contraste de Riesgo: Lesiones vs. Letalidad</h2>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 border-l-4 border-purple-500 mb-6">
          <div className="space-y-5 text-gray-700">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">🏍️ El Factor Común: Motocicletas</h4>
              <p>
                En ambos modelos, la variable <strong>Con_Moto</strong> es el predictor más fuerte. Sin embargo, 
                en el modelo de Letalidad, los puntos rojos están más dispersos hacia la derecha, lo que indica 
                que la presencia de una moto empuja con mucha más fuerza la probabilidad hacia un desenlace fatal 
                que hacia una simple lesión.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-2">🚶 Peatones: El actor con mayor riesgo vital</h4>
              <p>
                Mientras que en el modelo de lesiones el impacto de <strong>Con_Peaton</strong> es moderado, en el 
                modelo de Letalidad se convierte en la <strong>segunda variable más crítica</strong>. Esto confirma 
                que un siniestro con un peatón involucrado tiene una transición casi directa hacia la mortalidad 
                debido a la falta de protección física.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-2">⚡ Velocidad: El catalizador de la muerte</h4>
              <p>
                Es la <strong>diferencia más drástica</strong> entre ambos gráficos. Para las lesiones, la velocidad 
                tiene un impacto disperso. Para la Letalidad, la velocidad alta (puntos rojos) muestra un desplazamiento 
                extremo hacia la derecha, actuando como el factor que <strong>define si una víctima sobrevive con heridas 
                o fallece</strong>.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-2">🚛 Vehículos de Carga y Taxis</h4>
              <p>
                La presencia de vehículos de carga tiene un peso mayor en la Letalidad, probablemente por la 
                <strong> masa involucrada en el impacto</strong>. Por el contrario, los taxis aparecen con una 
                influencia más marcada en el modelo de Lesiones, asociados a la alta frecuencia de accidentes en 
                zonas de tráfico denso.
              </p>
            </div>
          </div>

          <div className="mt-6 bg-white rounded-lg p-4 border-l-4 border-green-500">
            <p className="text-gray-800">
              <strong>💡 Diferenciación del Riesgo:</strong> "No todos los accidentes se previenen igual. Para 
              reducir lesiones, debemos enfocarnos en la interacción de motos y taxis en horas pico. Para reducir 
              muertes, la intervención debe ser quirúrgica sobre el exceso de velocidad y la protección de peatones 
              y motociclistas en escenarios de alta energía cinética."
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Mapas de Calor SHAP</h2>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Mapa de Calor Espacial</h3>
        <p className="text-gray-700 mb-4">
          Visualización geográfica de las zonas donde los valores SHAP indican
          mayor riesgo de accidentes fatales.
        </p>
        <div className="mb-4">
          <a 
            href="/maps/heatmap_shap_con_muertos.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            🗺️ Abrir Mapa en Pantalla Completa
          </a>
        </div>
        <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-inner border-2 border-gray-200">
          <iframe 
            src="/maps/heatmap_shap_con_muertos.html"
            title="Mapa de Calor SHAP"
            className="w-full h-full border-0"
            allow="fullscreen"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Factor Tiempo</h3>
        <p className="text-gray-700 mb-4">
          Este mapa muestra los patrones temporales de riesgo de accidentes fatales
          según los valores SHAP.
        </p>
        <div className="mb-6">
          <img 
            src="/images/heatmap_temporal_shap.png" 
            alt="Mapa de Calor Temporal"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-md"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <p className="hidden text-gray-600 italic text-center mt-4">
            La imagen se generará al ejecutar las celdas de exportación
          </p>
        </div>
        
        <h4 className="text-lg font-semibold text-gray-800 mb-3">Patrones Observados</h4>
        <div className="space-y-4 text-gray-700">
          <div>
            <h5 className="font-bold text-gray-900 mb-2">🌙 Ventanas de Peligrosidad Extrema (Madrugada)</h5>
            <p>
              El riesgo letal más alto (zonas en rojo intenso) se concentra de manera crítica entre las 
              <strong> 00:00 y las 05:00 hrs</strong>. Durante este periodo, el modelo identifica que el factor 
              horario incrementa drásticamente la probabilidad de muerte, independientemente de otros factores.
            </p>
          </div>

          <div>
            <h5 className="font-bold text-gray-900 mb-2">🍻 El Efecto del Fin de Semana</h5>
            <p>
              Se observa un bloque de riesgo sostenido que inicia los <strong>viernes por la noche</strong> y se 
              extiende durante las madrugadas del sábado (día 5) y domingo (día 6). Esto sugiere una correlación 
              con factores conductuales como fatiga o conducción bajo efectos del alcohol al finalizar la semana.
            </p>
          </div>

          <div>
            <h5 className="font-bold text-gray-900 mb-2">☀️ Seguridad Relativa en Horas Valle</h5>
            <p>
              Las zonas en <strong>azul oscuro</strong> (valores SHAP negativos) representan periodos donde el 
              factor temporal actúa como un protector, disminuyendo la probabilidad de fatalidad. Esto ocurre 
              principalmente durante el día, donde la congestión reduce las velocidades de impacto.
            </p>
          </div>

          <div>
            <h5 className="font-bold text-gray-900 mb-2">⚠️ Pico de Riesgo Nocturno (Media Semana)</h5>
            <p>
              Llama la atención un foco de riesgo elevado los <strong>miércoles a las 02:00 hrs</strong>, lo que 
              indica anomalías en el flujo o comportamiento vial a mitad de semana que el modelo detecta como 
              altamente peligrosas.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Impacto por Localidad</h3>
        <p className="text-gray-700 mb-4">
          Análisis del impacto promedio SHAP por localidad de Bogotá.
        </p>
        <div className="mb-6">
          <img 
            src="/images/heatmap_localidad.png" 
            alt="Mapa de Calor por Localidad"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-md"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <p className="hidden text-gray-600 italic text-center mt-4">
            La imagen se generará al ejecutar las celdas de exportación
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-yellow-50 to-red-50 rounded-lg p-6 border-l-4 border-yellow-500 mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">📊 Análisis</h4>
          
          <div className="space-y-4 text-gray-700">
            <div>
              <h5 className="font-bold text-gray-900 mb-2">¿Por qué todos los valores son negativos?</h5>
              <p className="mb-3">
                Los valores SHAP representan <strong>desviaciones del valor base (baseline)</strong>, no probabilidades 
                absolutas. En este modelo, el baseline corresponde a la probabilidad promedio de un accidente fatal en 
                Bogotá, que es de apenas <strong>1.84%</strong> de todos los siniestros registrados.
              </p>
              <p className="mb-3">
                Cuando una clase objetivo es tan <strong>infrecuente</strong>, el modelo tiende a predecir "No Fatal" 
                como escenario base. Por lo tanto, la mayoría de las variables (incluidas las localidades) actúan como 
                <strong> factores protectores</strong> que reducen aún más esa probabilidad ya baja, generando valores 
                SHAP negativos.
              </p>
              <p className="italic bg-white rounded p-3 border-l-4 border-blue-500">
                <strong>💡 Interpretación clave:</strong> Un valor SHAP más cercano a cero (-0.01) indica que esa 
                localidad <strong>NO reduce mucho el riesgo base</strong>, por lo tanto es <strong>MÁS PELIGROSA</strong>. 
                Un valor más negativo (-0.22) indica que la localidad <strong>sí reduce significativamente el riesgo</strong>, 
                por lo tanto es <strong>MÁS SEGURA</strong>.
              </p>
            </div>

            <div>
              <h5 className="font-bold text-gray-900 mb-2">🗺️ Patrón Geográfico Identificado</h5>
              <p className="mb-2">El análisis SHAP revela un gradiente de riesgo claramente estructurado:</p>
              
              <div className="space-y-3 ml-4">
                <div className="bg-red-100 rounded p-3 border-l-4 border-red-600">
                  <strong>🔴 Mayor Riesgo Relativo (SHAP cercano a 0):</strong>
                  <ul className="list-disc list-inside mt-2">
                    <li><strong>Ciudad Bolívar (-0.01):</strong> La localidad más peligrosa, prácticamente sin efecto protector</li>
                    <li><strong>Usme (-0.05):</strong> Riesgo muy alto en la periferia sur</li>
                    <li><strong>San Cristóbal (-0.08):</strong> Zona montañosa con infraestructura deficiente</li>
                  </ul>
                </div>

                <div className="bg-yellow-100 rounded p-3 border-l-4 border-yellow-600">
                  <strong>🟡 Riesgo Moderado (SHAP -0.09 a -0.15):</strong>
                  <ul className="list-disc list-inside mt-2">
                    <li><strong>Kennedy, Puente Aranda, Bosa, Engativá:</strong> Zonas densamente pobladas con tráfico mixto</li>
                    <li>Presentan riesgo moderado debido a alta densidad vehicular pero mejor infraestructura que periferia sur</li>
                  </ul>
                </div>

                <div className="bg-green-100 rounded p-3 border-l-4 border-green-600">
                  <strong>🟢 Menor Riesgo (SHAP -0.16 a -0.22):</strong>
                  <ul className="list-disc list-inside mt-2">
                    <li><strong>Fontibón (-0.22):</strong> La localidad más segura, factor protector máximo</li>
                    <li><strong>Candelaria (-0.21):</strong> Centro histórico con circulación controlada</li>
                    <li><strong>Barrios Unidos, Los Mártires, Teusaquillo:</strong> Zonas centrales con mejor infraestructura vial</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-bold text-gray-900 mb-2">📈 Magnitud del Efecto: 21 puntos de diferencia</h5>
              <p>
                La brecha entre <strong>Ciudad Bolívar (-0.01)</strong> y <strong>Fontibón (-0.22)</strong> es de 
                <strong> 0.21 puntos SHAP</strong>. Esto significa que, manteniendo todos los demás factores constantes, 
                un accidente en Ciudad Bolívar tiene una probabilidad de ser fatal <strong>significativamente mayor</strong> 
                que el mismo accidente ocurriendo en Fontibón.
              </p>
            </div>

            <div>
              <h5 className="font-bold text-gray-900 mb-2">🏗️ Hipótesis Explicativas</h5>
              <p className="mb-2">
                La distribución geográfica del riesgo letal no es aleatoria y sugiere factores estructurales:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Infraestructura vial:</strong> Periferia sur con vías en mal estado, sin iluminación adecuada</li>
                <li><strong>Tiempo de respuesta emergencias:</strong> Localidades como Ciudad Bolívar tienen acceso limitado a hospitales de trauma</li>
                <li><strong>Velocidades de circulación:</strong> Vías periféricas permiten mayores velocidades que zonas centrales congestionadas</li>
                <li><strong>Topografía:</strong> San Cristóbal y Usme tienen terreno montañoso con curvas peligrosas</li>
                <li><strong>Mezcla de tráfico:</strong> Convergencia de vehículos particulares, transporte público y carga en zonas sin separación adecuada</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-white rounded-lg p-4 border-l-4 border-purple-500">
            <p className="text-gray-800">
              <strong>🎯 Implicación para Política Pública:</strong> "La desigualdad en seguridad vial es una 
              realidad medible. Las inversiones en infraestructura deben priorizarse en Ciudad Bolívar, Usme y 
              San Cristóbal, donde cada siniestro tiene mayor probabilidad de convertirse en tragedia. La evidencia 
              SHAP transforma la intuición geográfica en un mandato de acción focalizada."
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Recomendaciones Basadas en SHAP</h2>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Para Prevención de Accidentes Fatales</h3>
        <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
          <li>
            <strong>🚶 Protección prioritaria de peatones:</strong> Implementar pasos peatonales elevados,
            semáforos con tiempos adecuados, y campañas de concientización. Los peatones son la 
            <strong> segunda variable más crítica</strong> según SHAP, con transición casi directa hacia mortalidad.
          </li>
          <li>
            <strong>⚡ Control absoluto de velocidad:</strong> La velocidad actúa como 
            <strong> "catalizador de la muerte"</strong>. Implementar reductores de velocidad, 
            cámaras y controles estrictos en vías periféricas donde se alcanzan mayores velocidades.
          </li>
          <li>
            <strong>🌙 Operativos nocturnos intensificados:</strong> Reforzar controles de velocidad y alcoholemia
            durante <strong>madrugadas (00:00-05:00 hrs)</strong>, especialmente viernes, sábado y domingo.
            Incluir operativo especial los <strong>miércoles a las 02:00 hrs</strong> donde se detecta anomalía de riesgo.
          </li>
          <li>
            <strong>🗺️ Inversión focalizada en periferia sur:</strong> Priorizar recursos en 
            <strong> Ciudad Bolívar, Usme y San Cristóbal</strong> (valores SHAP -0.01 a -0.08), 
            donde cada accidente tiene mayor probabilidad de ser fatal. Incluye mejora de iluminación, 
            señalización, reparación de baches y acceso rápido a servicios de emergencia.
          </li>
          <li>
            <strong>🏍️ Protección especial de motociclistas:</strong> La presencia de moto es el 
            <strong> factor #1 de letalidad</strong>. Campañas agresivas de uso de casco certificado, 
            ropa protectora y capacitación defensiva. Considerar carriles segregados en vías de alta velocidad.
          </li>
          <li>
            <strong>🚛 Regulación de vehículos de carga:</strong> Establecer restricciones horarias para 
            vehículos pesados en zonas con alta concentración de peatones y motociclistas, especialmente 
            durante madrugadas donde la masa del vehículo amplifica la letalidad del impacto.
          </li>
          <li>
            <strong>🏗️ Mantenimiento vial prioritario:</strong> El análisis SHAP identifica 
            <strong> Con_Huecos</strong> como agravante. Reparación urgente de vías en mal estado, 
            priorizando rutas con alta mortalidad histórica en periferia sur.
          </li>
        </ol>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">Para Prevención de Lesiones</h3>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>
            <strong>🏍️ Seguridad de motociclistas en tráfico denso:</strong> Aunque las motos causan 
            más muertes, también dominan las lesiones. Campañas de uso de equipo de protección, 
            carriles exclusivos donde sea posible, y zonas de espera adelantada en semáforos.
          </li>
          <li>
            <strong>🚕 Regulación específica de taxis:</strong> Los taxis aparecen con 
            <strong> influencia marcada en lesiones</strong> por alta frecuencia en zonas de tráfico denso. 
            Programas de capacitación en conducción defensiva y auditorías de comportamiento vial.
          </li>
          <li>
            <strong>🚴 Infraestructura ciclista segregada:</strong> Ciclorrutas completamente separadas 
            del tráfico motorizado y señalización clara. Las lesiones en ciclistas se pueden prevenir 
            con infraestructura adecuada.
          </li>
          <li>
            <strong>⏰ Gestión inteligente de tráfico en horas pico:</strong> Optimización de semáforos, 
            rutas alternativas y control de acceso en zonas saturadas. La congestión aumenta interacciones 
            pero reduce velocidades, generando más lesiones que muertes.
          </li>
          <li>
            <strong>🔄 Rediseño de intersecciones críticas:</strong> Identificar y rediseñar puntos 
            con alta frecuencia de lesiones. Implementar rotondas, señalización clara y separación 
            de flujos vehiculares donde convergen motos, taxis y transporte público.
          </li>
        </ol>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Conclusiones del Análisis SHAP</h2>
        <p className="text-gray-700 mb-4">
          El análisis SHAP proporciona insights accionables que van más allá de
          simplemente predecir la gravedad de accidentes:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            Identifica factores de riesgo específicos y cuantifica su impacto
          </li>
          <li>
            Permite diferenciar entre factores que causan lesiones vs. fatalidades
          </li>
          <li>
            Proporciona evidencia para priorizar intervenciones de seguridad vial
          </li>
          <li>
            Ayuda a personalizar estrategias según contexto temporal y geográfico
          </li>
          <li>
            Facilita la comunicación de riesgos a tomadores de decisiones y público
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ExplainableAI;
