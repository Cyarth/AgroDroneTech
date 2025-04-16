export default function Home() {
  return (
    <div className="bg-bgsoft text-textdark font-sans">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-24 px-6"
        style={{
          backgroundImage: "url('/img/Hero_wall.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-7xl mx-auto text-center z-10 relative">
          <h1 className="text-6xl font-extrabold leading-tight drop-shadow-md">
            Drones agrícolas
          </h1>
          <p className="mt-6 text-xl drop-shadow-sm">
            Soluciones tecnológicas para el campo
          </p>
          <button className="mt-8 bg-farmgreen hover:bg-farmdark text-white px-8 py-3 rounded-lg shadow-lg transition">
            Contáctanos
          </button>
        </div>
      </section>

      {/* Qué hacemos */}
      {/* Qué hacemos */}
<section className="bg-[#fdfbe7] py-20 px-6 mx-4 md:mx-12 rounded-xl shadow-md">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    <img
      src="/img/drone-campo.jpg"
      alt="Dron sobre cultivo"
      className="w-full rounded-xl shadow-xl object-cover"
    />
    <div>
      <h2 className="text-4xl font-bold text-farmdark mb-4">Qué hacemos</h2>
      <p className="mb-6 text-textdark">
        AgroDroneTech transforma el campo con soluciones aéreas que mejoran la eficiencia,
        reducen costos y aumentan la precisión de las tareas agrícolas.
      </p>
      <ul className="space-y-3 text-lg text-textdark">
        <li>✅ Monitoreo de cultivos</li>
        <li>✅ Aplicación precisa de insumos</li>
        <li>✅ Mapeo 2D y 3D del terreno</li>
      </ul>
    </div>
  </div>
</section>


      {/* Beneficios */}
      <section className="bg-farmdark text-white py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Beneficios
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                numero: 1,
                titulo: "Eficiencia mejorada",
                descripcion:
                  "Reducción de tiempos y uso de recursos mediante operaciones automatizadas.",
              },
              {
                numero: 2,
                titulo: "Monitoreo preciso",
                descripcion:
                  "Datos detallados en tiempo real para un análisis efectivo del cultivo.",
              },
              {
                numero: 3,
                titulo: "Reducción de costos",
                descripcion:
                  "Menor uso de insumos y recursos al aplicar soluciones dirigidas.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-cream text-textdark rounded-xl p-6 md:p-8 text-center shadow-lg flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-full bg-greenaccent text-white font-bold text-xl flex items-center justify-center mb-4 shadow-md">
                  {item.numero}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.titulo}</h3>
                <p className="text-sm text-graysoft">{item.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de éxito */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-farmdark mb-12 text-center">
            Casos de éxito
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: "/img/proyecto1.jpg",
                titulo: "Proyecto Viña Los Andes",
                descripcion:
                  "Monitoreo de viñedos con drones multiespectrales.",
              },
              {
                img: "/img/proyecto2.jpg",
                titulo: "SojaTech 2024",
                descripcion:
                  "Aplicación precisa de fertilizantes en cultivos de soja.",
              },
              {
                img: "/img/proyecto3.jpg",
                titulo: "Mapa Cereal Sur",
                descripcion:
                  "Cartografía 2D y 3D en grandes terrenos agrícolas.",
              },
            ].map((caso, i) => (
              <div
                key={i}
                className="bg-cream rounded-xl shadow-lg overflow-hidden flex flex-col"
              >
                <img
                  src={caso.img}
                  alt={caso.titulo}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="text-xl font-semibold text-farmdark mb-2">
                    {caso.titulo}
                  </h3>
                  <p className="text-sm text-graysoft">{caso.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
