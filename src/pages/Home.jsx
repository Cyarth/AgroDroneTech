export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f8db] text-[#23692d] font-sans">
      {/* Header principal */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold">Drones agrícolas</h1>
        <p className="mt-4 text-lg">Soluciones tecnológicas para el campo</p>
        <button className="mt-6 bg-[#45a049] hover:bg-[#3b873f] text-white px-6 py-2 rounded shadow">
          Contáctanos
        </button>
      </section>

      {/* Qué hacemos */}
      <section className="grid md:grid-cols-2 gap-10 items-center px-10 pb-20">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Qué hacemos</h2>
          <p className="mb-6">
            AgroDroneTech está enfocado en la transformación del campo mediante el uso de drones agrícolas, optimizando recursos y mejorando los resultados productivos de nuestros clientes.
          </p>
          <ul className="list-none space-y-2 text-sm">
            <li>📍 Monitoreo de cultivos</li>
            <li>🌿 Aplicación de insumos</li>
            <li>🗺️ Mapeo de campos</li>
          </ul>
          <button className="mt-6 bg-[#45a049] hover:bg-[#3b873f] text-white px-6 py-2 rounded shadow">
            Contáctanos
          </button>
        </div>
        <div className="flex justify-center">
          <img
            src="/vite.svg"
            alt="Dron agrícola en acción"
            className="rounded shadow-lg max-w-full"
          />
        </div>
      </section>

      {/* Beneficios */}
      <section className="bg-[#f8f8db] px-10 pb-20">
        <h2 className="text-3xl font-semibold mb-8">Beneficios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Mejor rendimiento', 'Reducción de costos', 'Mayor precisión'].map((beneficio, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-lg p-6 text-center"
            >
              <p className="text-lg font-medium">{beneficio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Casos de éxito */}
      <section className="bg-[#f8f8db] px-10 pb-20">
        <h2 className="text-3xl font-semibold mb-8">Casos de éxito</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Proyecto 1', 'Proyecto 2', 'Proyecto 3'].map((proyecto, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-lg p-6 text-center"
            >
              <p className="text-lg font-medium">{proyecto}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
