export default function QueHacemos() {
  return (
    <section className="bg-farmlight py-12 px-6 md:px-20 text-farmdark">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">Qué hacemos</h2>
          <p className="mb-6">
            AgroDroneTech está enfocado en la transformación del campo mediante el uso de drones agrícolas,
            optimizando recursos y mejorando los resultados productivos de nuestros clientes.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>📍 Monitoreo de cultivos</li>
            <li>🌿 Aplicación de insumos</li>
            <li>🗺️ Mapeo de campos</li>
          </ul>
          <button className="mt-6 px-6 py-2 bg-farmgreen text-white rounded hover:bg-farmdark transition">
            Contáctanos
          </button>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1581090700227-1e8c6f2f62bc?auto=format&fit=crop&w=800&q=80"
            alt="Dron agrícola en acción"
            className="rounded-xl shadow-md object-cover w-full max-h-[400px]"
          />
        </div>
      </div>
    </section>
  );
}
