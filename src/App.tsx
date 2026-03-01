import { Network, GitBranch, Building2, Wrench, Lightbulb, CheckCircle2 } from 'lucide-react';
import img1 from '../Images/image.png';
import img2 from '../Images/image2.png.jpeg';
import img3 from '../Images/image3.png.jpeg';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3">
            <Network className="w-10 h-10 text-emerald-600" />
            <h1 className="text-4xl font-bold text-slate-900">Topologia de estrella extendida</h1>
          </div>
          <p className="mt-3 text-lg text-slate-600">Una guía completa sobre arquitectura de redes jerárquica</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        <section className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="w-8 h-8 text-emerald-600" />
            <h2 className="text-3xl font-bold text-slate-900">¿Qué es la Topología de Estrella Extendida?</h2>
          </div>
          <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
            <p>
              Una <strong>Topología de Estrella Extendida</strong> (también conocida como Estrella Jerárquica o Topología de Árbol) es una topología de estrella donde su estructura se va multiplicando teniendo así el nodo central y los nodos secundarios para conectar a los distintos dispositivos que se extienden entre pisos o edificios, el Switch principal o nodo central es el que se conecta con los nodos secundarios o switches secundarios, estos ultimos son los que se conectan los diferentes tipos de dispositivos. Se conecta por cable a cada nodo secundario, y cada nodo secundario se conecta a su vez a varios dispositivos finales. Esta topología es común en redes empresariales grandes, campus universitarios y edificios de oficinas, donde se requiere una estructura de red organizada y escalable.
            </p>
            <p>
              Esta topología combina las ventajas de la topología de estrella con escalabilidad, lo que la hace ideal para grandes organizaciones y edificios de múltiples pisos. Mantiene un control centralizado mientras permite la expansión de la red sin comprometer el rendimiento.
            </p>
          </div>

          <div className="mt-6 flex gap-4">
            <img src={img1} alt="Imagen 1" className="w-1/3 rounded-md" />
            <img src={img2} alt="Imagen 2" className="w-1/3 rounded-md" />
            <img src={img3} alt="Imagen 3" className="w-1/3 rounded-md" />
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <GitBranch className="w-8 h-8 text-emerald-600" />
            <h2 className="text-3xl font-bold text-slate-900">¿Cómo Funciona?</h2>
          </div>
          <div className="space-y-6">
            <p className="text-slate-700 text-lg">
              La topología de estrella extendida funciona en una estructura jerárquica, similar a un árbol, con múltiples niveles:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 border-2 border-emerald-200">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4">1</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Capa Central</h3>
                <p className="text-slate-700">El concentrador central o conmutador actúa como la columna vertebral, gestionando el tráfico entre concentradores secundarios y proporcionando servicios de red completa.</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4">2</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Capa de Distribución</h3>
                <p className="text-slate-700">Los concentradores/conmutadores secundarios se conectan al concentrador central, distribuyen el acceso a la red a diferentes departamentos o áreas.</p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 border-2 border-amber-200">
                <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4">3</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Capa de Acceso</h3>
                <p className="text-slate-700">Los dispositivos finales (computadoras, impresoras, teléfonos) se conectan a los concentradores secundarios, recibiendo acceso a la red a través de la jerarquía.</p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200 mt-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Proceso de Flujo de Datos</h3>
              <ol className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="font-semibold text-emerald-600 min-w-[24px]">→</span>
                  <span>Un dispositivo envía datos a su concentrador secundario conectado (capa de acceso)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-emerald-600 min-w-[24px]">→</span>
                  <span>El concentrador secundario envía los datos al concentrador central (capa central)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-emerald-600 min-w-[24px]">→</span>
                  <span>El concentrador central enruta los datos al concentrador secundario apropiado</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-emerald-600 min-w-[24px]">→</span>
                  <span>El concentrador secundario de destino entrega los datos al dispositivo objetivo</span>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="w-8 h-8 text-emerald-600" />
            <h2 className="text-3xl font-bold text-slate-900">¿Dónde se Aplica?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Oficinas Corporativas
              </h3>
              <p className="text-slate-700">Edificios de múltiples pisos donde cada piso tiene su propio conmutador conectado a un centro de datos central, gestionando cientos de estaciones de trabajo.</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Instituciones Educativas
              </h3>
              <p className="text-slate-700">Universidades y escuelas con múltiples edificios, cada uno con conmutadores departamentales conectados a un concentrador de red principal.</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Instalaciones de Manufactura
              </h3>
              <p className="text-slate-700">Grandes fábricas con diferentes áreas de producción, cada una con conmutadores locales para maquinaria y sistemas de monitoreo.</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Centros de Datos
              </h3>
              <p className="text-slate-700">Proveedores de servicios en la nube organizando bastidores de servidores con conmutadores de bastidor conectados a conmutadores de distribución, luego a conmutadores centrales.</p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-6">Ejemplo Práctico: Red de una Corporación Tecnológica</h2>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white/20">
            <h3 className="text-2xl font-semibold mb-4">Escenario</h3>
            <p className="text-emerald-50 text-lg leading-relaxed">
              Una empresa tecnológica opera en un edificio de oficinas de 5 pisos con 200 empleados. Cada piso se especializa en diferentes funciones: Ventas, Marketing, Ingeniería, Recursos Humanos y Gestión Ejecutiva.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-2xl font-semibold mb-4">Estructura de Red</h3>
            <div className="space-y-4 text-emerald-50">
              <div className="flex gap-4">
                <div className="min-w-[140px] font-semibold">Capa Central:</div>
                <div>Un conmutador central en la sala de servidores del sótano (conmutador gestionado de 24 puertos)</div>
              </div>
              <div className="flex gap-4">
                <div className="min-w-[140px] font-semibold">Distribución:</div>
                <div>Cinco conmutadores secundarios, uno por piso (conmutadores de 16 puertos)</div>
              </div>
              <div className="flex gap-4">
                <div className="min-w-[140px] font-semibold">Acceso:</div>
                <div>40 computadoras, impresoras y teléfonos VoIP por piso conectados a conmutadores de piso</div>
              </div>
              <div className="flex gap-4">
                <div className="min-w-[140px] font-semibold">Cableado:</div>
                <div>Cables Ethernet Cat6 en todo el edificio, fibra óptica entre conmutadores centrales y de piso</div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <Wrench className="w-8 h-8 text-emerald-600" />
            <h2 className="text-3xl font-bold text-slate-900">Cómo Crear una Topología de Estrella Extendida</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-emerald-50 to-transparent rounded-xl p-6 border-l-4 border-emerald-600">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Paso 1: Planificar tu Red</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex gap-2"><span className="text-emerald-600">•</span> Determina el número de dispositivos y sus ubicaciones</li>
                <li className="flex gap-2"><span className="text-emerald-600">•</span> Calcula el ancho de banda requerido y las necesidades de crecimiento futuro</li>
                <li className="flex gap-2"><span className="text-emerald-600">•</span> Identifica agrupaciones lógicas (departamentos, pisos, edificios)</li>
                <li className="flex gap-2"><span className="text-emerald-600">•</span> Elige especificaciones de equipos de red apropiadas</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-transparent rounded-xl p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Paso 2: Seleccionar Equipos</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex gap-2"><span className="text-blue-600">•</span> <strong>Conmutador Central:</strong> Conmutador gestionado de alto rendimiento (preferiblemente Capa 3)</li>
                <li className="flex gap-2"><span className="text-blue-600">•</span> <strong>Conmutadores de Distribución:</strong> Conmutadores gestionados con cantidad de puertos adecuada</li>
                <li className="flex gap-2"><span className="text-blue-600">•</span> <strong>Cables:</strong> Cat6 o Cat6a para conexiones de dispositivos, fibra óptica para la columna vertebral</li>
                <li className="flex gap-2"><span className="text-blue-600">•</span> <strong>Paneles de Parches:</strong> Para gestión organizada de cables</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-transparent rounded-xl p-6 border-l-4 border-amber-600">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Paso 3: Instalación Física</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex gap-2"><span className="text-amber-600">•</span> Instala el conmutador central en una sala segura, con clima controlado</li>
                <li className="flex gap-2"><span className="text-amber-600">•</span> Monta conmutadores secundarios en áreas designadas (armarios de piso, departamentos)</li>
                <li className="flex gap-2"><span className="text-amber-600">•</span> Ejecuta cableado de columna vertebral desde el conmutador central a los de distribución</li>
                <li className="flex gap-2"><span className="text-amber-600">•</span> Conecta dispositivos finales a conmutadores secundarios</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-transparent rounded-xl p-6 border-l-4 border-emerald-600">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Paso 4: Configuración</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex gap-2"><span className="text-emerald-600">•</span> Configura VLANs para segmentación y seguridad de la red</li>
                <li className="flex gap-2"><span className="text-emerald-600">•</span> Establece esquema de direccionamiento IP (subredes para cada capa)</li>
                <li className="flex gap-2"><span className="text-emerald-600">•</span> Habilita Protocolo de Árbol de Expansión (STP) para prevenir bucles</li>
                <li className="flex gap-2"><span className="text-emerald-600">•</span> Configura seguridad de puertos y listas de control de acceso</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-slate-50 to-transparent rounded-xl p-6 border-l-4 border-slate-600">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Paso 5: Pruebas y Documentación</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex gap-2"><span className="text-slate-600">•</span> Prueba conectividad entre todos los dispositivos y segmentos</li>
                <li className="flex gap-2"><span className="text-slate-600">•</span> Verifica ancho de banda y rendimiento bajo carga</li>
                <li className="flex gap-2"><span className="text-slate-600">•</span> Documenta topología de red, esquemas de IP y configuraciones</li>
                <li className="flex gap-2"><span className="text-slate-600">•</span> Crea procedimientos de solución de problemas e programas de mantenimiento</li>
              </ul>
            </div>
          </div>
        </section>
 <section className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
       <div className="flex items-center gap-3 mb-6">
            <Wrench className="w-8 h-8 text-emerald-600" />
            <h2 className="text-3xl font-bold text-slate-900">Como configurar un switch en la topologia de estrella extendida</h2>
          </div>
         
        <div className="bg-gradient-to-r from-amber-50 to-transparent rounded-xl p-6 border-l-4 border-amber-600">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Configuracion</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex gap-2"><span className="text-amber-600">•</span> Primero, se realiza la conexión de cada dispositivo con el switch principal mediante cable de cobre  utilizando los puertos disponibles.</li>
                <li className="flex gap-2"><span className="text-amber-600">•</span> Después, se le asigna una dirección IP a cada dispositivo conectado y se le asigna la submáscara de red 255.255.255.0 a todos los dispositivos.</li>
                <li className="flex gap-2"><span className="text-amber-600">•</span> Por último, se comprueba la comunicación entre dispositivos usando el comando ping.</li>
              </ul>
            </div>
  </section>
        <section className="bg-slate-900 rounded-2xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Ventajas Principales</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Escalabilidad</h3>
              <p className="text-slate-300 text-sm">Agrega fácilmente nuevas ramas sin alterar la red existente</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Aislamiento de Fallos</h3>
              <p className="text-slate-300 text-sm">Los problemas en una rama no afectan otros segmentos</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Gestión Centralizada</h3>
              <p className="text-slate-300 text-sm">Monitorea y controla toda la red desde el conmutador central</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-slate-200 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-slate-600">
          <p>Topología de Estrella Extendida: Construyendo infraestructuras de red escalables y eficientes para organizaciones modernas</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
