import QueHacemos from './components/QueHacemos';
import Beneficios from './components/Beneficios';
import CasosDeExito from './components/CasosDeExito'; // este lo crearé ahora
import Contacto from './components/Contacto';


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

      <QueHacemos />
      <Beneficios />
      <CasosDeExito />
      <Contacto />

    </div>
  );
}
