export default function Servicios() {
  const servicios = [
    {
      titulo: "Monitoreo de cultivos",
      descripcion: "Captura imágenes aéreas de alta resolución para detectar enfermedades, estrés hídrico y necesidades de fertilización.",
      icono: "🌾"
    },
    {
      titulo: "Aplicación precisa de insumos",
      descripcion: "Los drones permiten aplicar fertilizantes y pesticidas solo donde se necesita, ahorrando recursos y reduciendo el impacto ambiental.",
      icono: "🧪"
    },
    {
      titulo: "Mapeo y análisis geoespacial",
      descripcion: "Generación de mapas 2D y 3D del terreno para planificación agrícola, drenaje y detección de anomalías.",
      icono: "🗺️"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f8db] text-[#23692d] px-6 py-16 font-sans">
      <h1 className="text-4xl font-bold text-center mb-12">Nuestros Servicios</h1>
      <div className="max-w-6xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-3">
        {servicios.map((serv, i) => (
          <div key={i} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
            <div className="text-5xl mb-4">{serv.icono}</div>
            <h3 className="text-xl font-semibold mb-2">{serv.titulo}</h3>
            <p className="text-sm">{serv.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
