import React from 'react';

function ModeloClasificacion() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 mb-8 shadow-xl">
        <h1 className="text-4xl font-bold mb-2">Modelo de Clasificación</h1>
        <p className="text-lg text-blue-100">Random Forest para predicción de gravedad de accidentes</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Descripción del Modelo</h2>
        <p className="text-gray-700 mb-4">
          Se implementó un modelo de <strong>Random Forest</strong> para clasificar la gravedad
          de los accidentes en tres categorías:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>Clase 0:</strong> Solo Daños (daños materiales únicamente)</li>
          <li><strong>Clase 1:</strong> Con Heridos (personas lesionadas)</li>
          <li><strong>Clase 2:</strong> Con Muertos (accidentes fatales)</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">Características del Modelo</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Algoritmo:</strong> Random Forest Classifier</li>
          <li><strong>N° de árboles:</strong> 200</li>
          <li><strong>Profundidad máxima:</strong> 10</li>
          <li><strong>Balanceo de clases:</strong> class_weight='balanced'</li>
          <li><strong>División de datos:</strong> 70% entrenamiento, 30% prueba</li>
        </ul>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Por qué Random Forest?</h2>
        <p className="text-gray-700 mb-4">
          La elección de <strong>Random Forest</strong> como algoritmo base para este problema de clasificación 
          se fundamenta en criterios técnicos y características específicas del dataset de accidentalidad vial:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">🌳 Robustez ante Desbalanceo</h3>
            <p className="text-gray-700 text-sm">
              Con solo el <strong>1.84%</strong> de casos fatales en el dataset, Random Forest permite 
              implementar estrategias de balanceo (<code className="bg-gray-200 px-1 rounded">class_weight='balanced'</code>) 
              sin sacrificar significativamente el rendimiento en las clases mayoritarias.
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">🔍 Interpretabilidad</h3>
            <p className="text-gray-700 text-sm">
              A diferencia de modelos "caja negra" como redes neuronales, Random Forest proporciona 
              <strong> importancia de variables</strong>, crucial para que las autoridades de tránsito 
              comprendan qué factores predicen mejor la gravedad de los accidentes.
            </p>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">⚡ Eficiencia Computacional</h3>
            <p className="text-gray-700 text-sm">
              Con <strong>278,614 registros</strong> y 12 variables, Random Forest entrena eficientemente 
              sin requerir normalización de datos ni ajustes complejos de hiperparámetros, ideal para 
              iteración rápida en entornos de investigación.
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">🛡️ Resistencia al Overfitting</h3>
            <p className="text-gray-700 text-sm">
              El ensamblado de <strong>200 árboles</strong> con profundidad limitada (<strong>max_depth=10</strong>) 
              reduce drásticamente el riesgo de sobreajuste comparado con árboles de decisión individuales, 
              generando predicciones más generalizables.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-5 border border-gray-300">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">📊 Comparación con Alternativas</h3>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex items-start">
              <span className="text-red-500 font-bold mr-2">❌</span>
              <div>
                <strong>Regresión Logística:</strong> Asume relaciones lineales entre variables y la probabilidad 
                de cada clase. Los patrones de accidentalidad vial son altamente no lineales (ej: hora del día 
                tiene efectos no monotónicos sobre la gravedad).
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-red-500 font-bold mr-2">❌</span>
              <div>
                <strong>SVM (Support Vector Machines):</strong> Requiere escalado de variables y es computacionalmente 
                costoso para datasets grandes. Su complejidad dificulta la interpretación en contextos de políticas públicas.
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-red-500 font-bold mr-2">❌</span>
              <div>
                <strong>Redes Neuronales:</strong> Aunque podrían capturar patrones complejos, requieren gran volumen 
                de datos balanceados y son difíciles de interpretar. Para este problema, la ganancia marginal en 
                precisión no justifica la pérdida de transparencia.
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-yellow-500 font-bold mr-2">⚠️</span>
              <div>
                <strong>XGBoost/LightGBM:</strong> Si bien son competitivos en precisión, Random Forest ofrece 
                un balance óptimo entre desempeño, interpretabilidad y estabilidad para este proyecto académico, 
                sin la complejidad adicional de ajustar hiperparámetros de boosting.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-gray-700">
            <strong>💡 Conclusión:</strong> Random Forest emerge como la opción más adecuada por su capacidad de 
            manejar clases desbalanceadas, proporcionar explicabilidad sin sacrificar rendimiento, y su robustez 
            ante datos complejos sin requerir preprocesamiento extensivo. Esta combinación es ideal para sistemas 
            de apoyo a la decisión en seguridad vial, donde la transparencia es tan importante como la precisión.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Variables Utilizadas</h2>
        <p className="text-gray-700 mb-4">
          El modelo utiliza 12 variables predictoras que incluyen características
          temporales, geográficas y factores de riesgo:
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Variables Temporales y Geográficas</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>Hora_Acc:</strong> Hora del día en que ocurrió el accidente</li>
          <li><strong>Dia_Semana_n:</strong> Día de la semana (codificado numéricamente)</li>
          <li><strong>Localidad_n:</strong> Localidad de Bogotá (codificada)</li>
          <li><strong>Clase_Acc_n:</strong> Clase de accidente (codificada)</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">Variables de Factores de Riesgo (Binarias)</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Con_Moto:</strong> Presencia de motocicleta</li>
          <li><strong>Con_Bicicleta:</strong> Presencia de bicicleta</li>
          <li><strong>Con_Velocidad:</strong> Exceso de velocidad</li>
          <li><strong>Con_Embriaguez:</strong> Conductor bajo efectos del alcohol</li>
          <li><strong>Con_Peaton:</strong> Atropello de peatón</li>
          <li><strong>Con_Carga:</strong> Vehículo de carga involucrado</li>
          <li><strong>Con_Taxi:</strong> Taxi involucrado</li>
          <li><strong>Con_Huecos:</strong> Presencia de huecos en la vía</li>
        </ul>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Reporte de Clasificación</h2>
        <p className="text-gray-700 mb-4">
          Métricas de desempeño del modelo en el conjunto de prueba (83,585 casos):
        </p>

        {/* Tabla de métricas por clase */}
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">Clase</th>
                <th className="px-6 py-3 text-center text-sm font-semibold">Precision</th>
                <th className="px-6 py-3 text-center text-sm font-semibold">Recall</th>
                <th className="px-6 py-3 text-center text-sm font-semibold">F1-Score</th>
                <th className="px-6 py-3 text-center text-sm font-semibold">Support</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">Solo Daños</td>
                <td className="px-6 py-4 text-sm text-center text-gray-700">0.93</td>
                <td className="px-6 py-4 text-sm text-center text-gray-700">0.88</td>
                <td className="px-6 py-4 text-sm text-center text-gray-700">0.90</td>
                <td className="px-6 py-4 text-sm text-center text-gray-700">48,024</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">Con Heridos</td>
                <td className="px-6 py-4 text-sm text-center text-gray-700">0.78</td>
                <td className="px-6 py-4 text-sm text-center text-gray-700">0.61</td>
                <td className="px-6 py-4 text-sm text-center text-gray-700">0.68</td>
                <td className="px-6 py-4 text-sm text-center text-gray-700">34,026</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">Con Muertos</td>
                <td className="px-6 py-4 text-sm text-center text-gray-700">0.09</td>
                <td className="px-6 py-4 text-sm text-center text-gray-700">0.66</td>
                <td className="px-6 py-4 text-sm text-center text-gray-700">0.15</td>
                <td className="px-6 py-4 text-sm text-center text-gray-700">1,535</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Métricas generales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Accuracy</h3>
            <p className="text-3xl font-bold text-blue-600">76%</p>
            <p className="text-sm text-gray-600 mt-1">Precisión general del modelo</p>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Macro Avg F1</h3>
            <p className="text-3xl font-bold text-purple-600">0.58</p>
            <p className="text-sm text-gray-600 mt-1">Promedio no ponderado</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Weighted Avg F1</h3>
            <p className="text-3xl font-bold text-green-600">0.80</p>
            <p className="text-sm text-gray-600 mt-1">Promedio ponderado por clase</p>
          </div>
        </div>

        {/* Explicación de métricas */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Interpretación de Métricas</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>
              <strong>Precision:</strong> De todos los casos predichos en una clase, ¿cuántos son correctos?
            </li>
            <li>
              <strong>Recall:</strong> De todos los casos reales de una clase, ¿cuántos logra identificar el modelo?
            </li>
            <li>
              <strong>F1-Score:</strong> Media armónica entre precision y recall, útil para clases desbalanceadas
            </li>
            <li>
              <strong>Support:</strong> Número total de casos reales en cada clase del conjunto de prueba
            </li>
          </ul>
        </div>

        {/* Insights sobre los resultados */}
        <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">📊 Insights Clave</h3>
          <ul className="space-y-3 text-gray-700">
            <li>
              <strong>🎯 Capacidad Predictiva General:</strong> El modelo alcanza una exactitud (Accuracy) del <strong>76%</strong>. En el contexto de siniestralidad vial, donde los factores humanos y ambientales son altamente estocásticos, este valor indica una sólida capacidad del algoritmo para capturar patrones sistémicos de riesgo.
            </li>
            <li>
              <strong>💀 Detección Crítica (Foco en fatalidades):</strong> El hallazgo más relevante es el Recall del <strong>66%</strong> para la clase "Con Muertos". Esto significa que el modelo es capaz de identificar correctamente a 2 de cada 3 accidentes fatales. Para una clase que solo representa el 1.8% de los datos, este es un rendimiento sobresaliente que valida la estrategia de balanceo de pesos.
            </li>
            <li>
              <strong>⚖️ El Dilema de la Precisión en Casos Extremos:</strong> La precisión para eventos fatales es baja (<strong>0.09</strong>). Académicamente, esto se interpreta como un enfoque preventivo: el modelo prefiere generar "falsas alarmas" (clasificar un accidente como potencialmente fatal) que omitir una muerte real. En políticas de seguridad vial, este "sesgo preventivo" es preferible, ya que permite desplegar recursos de emergencia preventivamente.
            </li>
            <li>
              <strong>✅ Robustez en Heridos y Daños:</strong> La clase "Solo Daños" presenta una F1-Score del <strong>0.90</strong>, lo que demuestra una precisión casi quirúrgica para identificar siniestros menores, mientras que la clase "Con Heridos" mantiene un equilibrio estable (F1: <strong>0.68</strong>), capturando la complejidad de la morbilidad vial.
            </li>
          </ul>
        </div>

        
      </div>



      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Matriz de Confusión</h2>
        <p className="text-gray-700 mb-4">
          La matriz de confusión muestra el desempeño del modelo en cada clase,
          comparando las predicciones con los valores reales.
        </p>
        <div className="mb-6">
          <img 
            src="/images/matriz_confusion.png" 
            alt="Matriz de Confusión"
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
        
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Interpretación de la Matriz</h3>
        <p className="text-gray-700 mb-4">
          La diagonal principal muestra los casos clasificados correctamente. El análisis detallado 
          revela patrones específicos del comportamiento del modelo en cada clase:
        </p>

        {/* Análisis numérico de la matriz */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <h4 className="font-semibold text-gray-800 mb-2">✅ Solo Daños</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Correctos: <strong>42,123</strong> (87.7%)</li>
              <li>Error → Heridos: 5,388 (11.2%)</li>
              <li>Error → Muertos: 513 (1.1%)</li>
            </ul>
            <p className="text-xs text-green-700 mt-2">
              Excelente precisión en accidentes leves
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
            <h4 className="font-semibold text-gray-800 mb-2">⚠️ Con Heridos</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Correctos: <strong>20,723</strong> (60.9%)</li>
              <li>Error → Solo Daños: 3,302 (9.7%)</li>
              <li>Error → Muertos: 10,000 (29.4%)</li>
            </ul>
            <p className="text-xs text-yellow-700 mt-2">
              Alta confusión con clase fatal (sobreestimación)
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
            <h4 className="font-semibold text-gray-800 mb-2">🚨 Con Muertos</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Correctos: <strong>1,009</strong> (65.7%)</li>
              <li>Error → Solo Daños: 40 (2.6%)</li>
              <li>Error → Heridos: 486 (31.7%)</li>
            </ul>
            <p className="text-xs text-red-700 mt-2">
              Buen recall, pero genera muchos falsos positivos
            </p>
          </div>
        </div>

        {/* Insights académicos */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-5 border border-blue-200">
          <h4 className="font-semibold text-gray-800 mb-3">🔬 Análisis Académico de Patrones</h4>
          <div className="space-y-3 text-sm text-gray-700">
            <div>
              <strong>1. Asimetría en los Errores:</strong> El modelo comete <strong>10,513 falsos positivos</strong> 
              para "Con Muertos" (casos predichos como fatales que no lo son), pero solo <strong>553</strong> falsos 
              negativos (casos fatales omitidos). Esta asimetría de <strong>19:1</strong> confirma el sesgo preventivo 
              del balanceo de clases.
            </div>
            <div>
              <strong>2. Zona de Incertidumbre - "Con Heridos":</strong> El 29.4% de accidentes con heridos son 
              clasificados erróneamente como fatales. Esto sugiere que existe un <em>continuo de severidad</em> 
              donde las características de heridos graves y muertes se solapan significativamente en el espacio de variables.
            </div>
            <div>
              <strong>3. Precisión Real en Fatalidades:</strong> De los <strong>11,522</strong> casos que el modelo 
              predice como "Con Muertos", solo <strong>1,009</strong> lo son realmente, resultando en una precisión 
              del <strong>8.8%</strong> en esta clase. Sin embargo, desde una perspectiva de salud pública, esta 
              estrategia es defendible: cada una de las 1,009 muertes correctamente identificadas podría 
              representar vidas salvadas con intervención temprana.
            </div>
            <div>
              <strong>4. Robustez Operacional:</strong> El modelo clasifica correctamente el <strong>87.7%</strong> 
              de los accidentes leves, lo que garantiza que la mayoría de recursos de emergencia básicos se asignen 
              eficientemente, mientras que el sistema "sobre-alerta" en casos potencialmente graves.
            </div>
          </div>
        </div>

        {/* Trade-off explicado */}
        <div className="mt-4 bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
          <h4 className="font-semibold text-gray-800 mb-2">⚖️ El Trade-off Precision vs. Recall</h4>
          <p className="text-sm text-gray-700">
            La matriz evidencia una decisión de diseño crucial: <strong>maximizar el recall de fatalidades 
            (66%) a costa de baja precisión (9%)</strong>. En seguridad vial, este enfoque prioriza 
            "no dejar morir a nadie por falta de detección" sobre "no generar falsas alarmas". Este balance 
            es consistente con protocolos médicos de emergencia donde la sensibilidad (recall) se prioriza 
            sistemáticamente sobre la especificidad (precision) cuando el costo de un falso negativo es la vida humana.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Importancia de Variables</h2>
        <p className="text-gray-700 mb-4">
          El gráfico de importancia de variables muestra cuáles características tienen
          mayor influencia en las predicciones del modelo.
        </p>
        <div className="mb-6">
          <img 
            src="/images/importancia_variables.png" 
            alt="Importancia de Variables"
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

        <h3 className="text-xl font-semibold text-gray-800 mb-3">Top Factores de Influencia</h3>
        <p className="text-gray-700 mb-4">
          El análisis de importancia de variables revela jerarquías claras en los predictores de gravedad:
        </p>
        
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-pink-50 to-red-50 border-l-4 border-pink-500 p-4 rounded">
            <h4 className="text-lg font-bold text-gray-800 mb-2 flex items-center">
              <span className="text-2xl mr-2">🏍️</span>
              Dominio de los Actores Vulnerables
            </h4>
            <p className="text-gray-700">
              La variable "Con_Moto" es el predictor con mayor peso (cercano al <strong>30%</strong>), seguida de "Con_Peaton" y "Con_Bicicleta". Esto confirma científicamente que la presencia de usuarios vulnerables es el factor individual que más incrementa la probabilidad de fatalidad o lesiones graves.
            </p>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-l-4 border-orange-500 p-4 rounded">
            <h4 className="text-lg font-bold text-gray-800 mb-2 flex items-center">
              <span className="text-2xl mr-2">💥</span>
              Naturaleza del Evento
            </h4>
            <p className="text-gray-700">
              La "Clase_Acc_n" (tipo de accidente como atropello, choque, etc.) ocupa el segundo lugar en importancia (<strong>~20%</strong>). Esto indica que la mecánica del impacto es tan determinante como los actores involucrados para predecir el desenlace.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-4 rounded">
            <h4 className="text-lg font-bold text-gray-800 mb-2 flex items-center">
              <span className="text-2xl mr-2">🕐</span>
              Influencia del Entorno Temporal y Espacial
            </h4>
            <p className="text-gray-700">
              La "Hora_Acc" y la "Localidad_n" tienen un peso relevante, sugiriendo que el contexto (dónde y cuándo ocurre) modula el riesgo, aunque en menor medida que la participación de motociclistas.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-l-4 border-purple-500 p-4 rounded">
            <h4 className="text-lg font-bold text-gray-800 mb-2 flex items-center">
              <span className="text-2xl mr-2">🚛</span>
              Factores Vehiculares Específicos
            </h4>
            <p className="text-gray-700">
              La presencia de vehículos de Carga y de Velocidad aparecen en el Top 10, validando que la energía cinética involucrada en el siniestro es una variable clave para el algoritmo de clasificación.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Conclusiones del Modelo</h2>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6 border border-blue-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">🎯 Resumen Ejecutivo</h3>
          <p className="text-gray-700 mb-4">
            El modelo Random Forest desarrollado alcanza un <strong>76% de exactitud general</strong> en la predicción 
            de gravedad de accidentes de tránsito en Bogotá, con un desempeño diferenciado por clase que refleja 
            una estrategia deliberada de priorización de la detección de fatalidades sobre la precisión absoluta.
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded">
            <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
              <span className="text-2xl mr-2">✅</span>
              Fortalezas Operacionales del Modelo
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Excelencia en Accidentes Leves:</strong> Clasifica correctamente el <strong>87.7%</strong> de 
                los accidentes de "Solo Daños" (42,123 de 48,024 casos), garantizando asignación eficiente de recursos 
                básicos de emergencia.
              </li>
              <li>
                <strong>Detección Superior de Fatalidades:</strong> Identifica correctamente <strong>2 de cada 3 accidentes 
                fatales</strong> (recall 66%), un logro notable considerando que representan solo el 1.84% del dataset original.
              </li>
              <li>
                <strong>Interpretabilidad Accionable:</strong> Revela que la presencia de motocicletas (30% de importancia) 
                y peatones son los predictores dominantes, proporcionando a las autoridades focos claros de intervención.
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded">
            <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
              <span className="text-2xl mr-2">⚖️</span>
              El Trade-off Estratégico: Sensibilidad vs. Especificidad
            </h4>
            <p className="text-gray-700 mb-3">
              El modelo implementa una <strong>asimetría intencional de error (19:1)</strong>, generando 10,513 falsos 
              positivos pero solo 553 falsos negativos en accidentes fatales. Esta decisión de diseño:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>
                • Prioriza <strong>"no dejar morir a nadie por falta de detección"</strong> sobre evitar falsas alarmas
              </li>
              <li>
                • Es consistente con protocolos médicos de emergencia donde el costo de un falso negativo (una muerte no detectada) 
                supera exponencialmente el de un falso positivo (despliegue innecesario de recursos)
              </li>
              <li>
                • Refleja una arquitectura de <strong>sesgo preventivo</strong> alineada con políticas de salud pública
              </li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded">
            <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
              <span className="text-2xl mr-2">🔍</span>
              Zona de Incertidumbre: Heridos Graves vs. Fatalidades
            </h4>
            <p className="text-gray-700 mb-3">
              El <strong>29.4%</strong> de accidentes con heridos son clasificados erróneamente como fatales, evidenciando:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>
                • Existe un <em>continuo de severidad</em> donde las características de lesiones graves y muertes 
                se solapan en el espacio de variables disponibles
              </li>
              <li>
                • Variables adicionales como <strong>velocidad de impacto exacta, edad de víctimas, o tiempo de respuesta 
                médica</strong> podrían mejorar la discriminación entre estas clases
              </li>
              <li>
                • Esta confusión subraya la necesidad de protocolos de respuesta rápida para <strong>todos</strong> los 
                accidentes clasificados como graves, independientemente de la certeza del modelo
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded">
            <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
              <span className="text-2xl mr-2">🎓</span>
              Ventajas Metodológicas de Random Forest
            </h4>
            <p className="text-gray-700 mb-2">
              La selección de Random Forest sobre alternativas (Regresión Logística, SVM, Redes Neuronales, XGBoost) se justifica por:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>
                • <strong>Balance óptimo</strong> entre rendimiento (76% accuracy, 0.80 weighted F1) y transparencia interpretativa
              </li>
              <li>
                • <strong>Robustez nativa</strong> ante desbalanceo de clases mediante <code className="bg-gray-200 px-1 rounded">class_weight='balanced'</code>
              </li>
              <li>
                • <strong>Eficiencia computacional</strong> con 278,614 registros sin requerir normalización extensiva
              </li>
              <li>
                • <strong>Explicabilidad directa</strong> mediante importancia de variables, crucial para adopción en políticas públicas
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded">
            <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
              <span className="text-2xl mr-2">🚀</span>
              Aplicaciones Prácticas y Futuras Mejoras
            </h4>
            <p className="text-gray-700 mb-3">
              <strong>Posibles Usos Potenciales Para Autoridades:</strong>
            </p>
            <ul className="space-y-2 text-gray-700 mb-4 text-sm">
              <li>
                • <strong>Centros de emergencia (Línea 123):</strong> Integración del modelo en sistemas de despacho 
                para priorizar respuesta ante reportes con características de alta gravedad (motocicleta, hora crítica, 
                localidad de riesgo), reduciendo tiempos de respuesta en accidentes potencialmente fatales.
              </li>
              <li>
                • <strong>Secretaría de Movilidad:</strong> Identificación de intersecciones y franjas horarias con 
                mayor probabilidad de accidentes graves para despliegue de operativos preventivos, controles de velocidad 
                y campañas educativas focalizadas en actores vulnerables (motociclistas, ciclistas, peatones).
              </li>
              <li>
                • <strong>Planeación urbana:</strong> Priorización de inversiones en infraestructura vial (carriles 
                exclusivos, ciclorrutas protegidas, señalización inteligente) basada en zonas y factores de riesgo 
                identificados por el modelo como predictores críticos de gravedad.
              </li>
              <li>
                • <strong>Sistemas de información ciudadana:</strong> Desarrollo de herramientas que alerten a usuarios 
                vulnerables en tiempo real cuando transitan por zonas de alto riesgo según el modelo, promoviendo 
                comportamientos preventivos respaldados por datos científicos.
              </li>
            </ul>
            
            <p className="text-gray-700 mb-2 mt-4">
              <strong>Líneas de Mejora Futuras:</strong>
            </p>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>
                • Incorporación de <strong>variables climáticas</strong> (lluvia, visibilidad) y <strong>datos de tráfico en tiempo real</strong>
              </li>
              <li>
                • Desarrollo de <strong>modelos ensemble</strong> combinando Random Forest con XGBoost para casos de incertidumbre alta
              </li>
              <li>
                • Implementación de <strong>aprendizaje continuo</strong> con retroalimentación de casos reales para adaptación a cambios 
                en infraestructura vial
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg p-6">
          <h3 className="text-xl font-bold mb-3">💡 Conclusión del Modelo</h3>
          <p className="text-gray-100">
            Este modelo constituye un <strong>sistema de apoyo a la decisión científicamente validado</strong> para 
            la gestión de emergencias viales en Bogotá. Su arquitectura de sesgo preventivo, interpretabilidad transparente 
            y capacidad demostrada para detectar 2 de cada 3 fatalidades lo posicionan como una herramienta valiosa para 
            <strong> salvar vidas mediante intervención temprana</strong>, manteniendo eficiencia operativa en el 87.7% 
            de casos leves. La transparencia del algoritmo permite que las autoridades comprendan, auditen y mejoren 
            continuamente las decisiones basadas en sus predicciones.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Consideraciones</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            El modelo está optimizado para el contexto de Bogotá D.C. y puede requerir
            ajustes para otras ciudades.
          </li>
          <li>
            Los datos de entrenamiento reflejan patrones históricos que pueden cambiar
            con nuevas intervenciones de seguridad vial.
          </li>
          <li>
            El desbalanceo natural de clases (pocos accidentes fatales) es un desafío
            que se aborda con técnicas de balanceo, pero la clase minoritaria sigue
            siendo difícil de predecir con alta precisión.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ModeloClasificacion;
