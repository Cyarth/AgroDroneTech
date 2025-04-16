export default function Home() {
  return (
    <div className="bg-bgsoft text-textdark font-sans">
      {/* Hero Section */}
      <section className="relative bg-bgsoft py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center z-10 relative">
          <h1 className="text-6xl font-extrabold text-farmdark leading-tight">
            Drones agrícolas
          </h1>
          <p className="mt-6 text-xl">Soluciones tecnológicas para el campo</p>
          <button className="mt-8 bg-farmgreen hover:bg-farmdark text-white px-8 py-3 rounded-lg shadow-lg transition">
            Contáctanos
          </button>
        </div>
        <img
          src="/img/hero-dron.png"
          alt="Ilustración dron"
          className="absolute bottom-0 right-0 w-[300px] md:w-[400px] opacity-90"
        />
      </section>

      {/* Qué hacemos */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/img/drone-campo.jpg"
            alt="Dron sobre cultivo"
            className="w-full rounded-xl shadow-xl object-cover"
          />
          <div>
            <h2 className="text-4xl font-bold text-farmdark mb-4">Qué hacemos</h2>
            <p className="mb-6">
              AgroDroneTech transforma el campo con soluciones aéreas que mejoran la eficiencia,
              reducen costos y aumentan la precisión de las tareas agrícolas.
            </p>
            <ul className="space-y-3 text-lg">
              <li>✅ Monitoreo de cultivos</li>
              <li>✅ Aplicación precisa de insumos</li>
              <li>✅ Mapeo 2D y 3D del terreno</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
