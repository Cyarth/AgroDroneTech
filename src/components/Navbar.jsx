import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-farmdark text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div className="font-bold text-xl">AgroDroneTech</div>
      <ul className="flex gap-6">
        <li><Link to="/" className="hover:underline">Inicio</Link></li>
        <li><Link to="/servicios" className="hover:underline">Servicios</Link></li>
        <li><Link to="/contacto" className="hover:underline">Contacto</Link></li>
      </ul>
    </nav>
  );
}
