export default function CasosDeExito() {
  return (
    <section className="bg-farmlight py-12 px-6 md:px-20 text-farmdark">
      <h2 className="text-3xl font-semibold mb-6">Casos de éxito</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-bold mb-2">Minina productividad</h3>
          <p>
            Implementación de drones para monitoreo en cultivos de alto rendimiento con mejoras en la eficiencia.
          </p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-bold mb-2">Aplicación precisa de insumos</h3>
          <p>
            Reducción de uso de fertilizantes en un 30% gracias a aplicaciones focalizadas con dron.
          </p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-bold mb-2">Mapeo de grandes hectáreas</h3>
          <p>
            Mapeo en tiempo récord de campos para planificación agrícola y control de plagas.
          </p>
        </div>
      </div>
    </section>
  );
}
