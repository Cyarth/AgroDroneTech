export default function Home() {
  return (
    <div className="min-h-screen bg-farmlight text-farmdark p-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold">Drones agrícolas</h1>
        <p className="text-xl mt-4">Soluciones tecnológicas para el campo</p>
        <button className="mt-6 px-6 py-2 bg-farmgreen text-white rounded hover:bg-farmdark transition">
          Contáctanos
        </button>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Qué hacemos</h2>
        <p>
          Utilizamos drones para el monitoreo de cultivos, fumigación precisa, recolección de datos y más.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Beneficios</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <li className="bg-white p-4 rounded shadow">✅ Eficiencia mejorada</li>
          <li className="bg-white p-4 rounded shadow">📍 Monitoreo preciso</li>
          <li className="bg-white p-4 rounded shadow">💰 Reducción de costos</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Casos de éxito</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">Proyecto 1</div>
          <div className="bg-white p-4 rounded shadow">Proyecto 2</div>
          <div className="bg-white p-4 rounded shadow">Proyecto 3</div>
        </div>
      </section>
    </div>
  );
}
