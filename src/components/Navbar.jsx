import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#23692d] text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-wide">
          <span className="text-white">Agro</span>
          <span className="text-[#f5f5f5] font-bold">DroneTech</span>
        </Link>

        {/* Botón mobile */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menú Desktop */}
        <div className="hidden md:flex space-x-6 text-sm md:text-base">
          <Link to="/" className="hover:text-[#a8e6a3] transition">Inicio</Link>
          <Link to="/servicios" className="hover:text-[#a8e6a3] transition">Servicios</Link>
          <Link to="/contacto" className="hover:text-[#a8e6a3] transition">Contacto</Link>
        </div>
      </div>

      {/* Menú Mobile */}
      {menuOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-2 text-sm px-2">
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-[#a8e6a3]">Inicio</Link>
          <Link to="/servicios" onClick={() => setMenuOpen(false)} className="hover:text-[#a8e6a3]">Servicios</Link>
          <Link to="/contacto" onClick={() => setMenuOpen(false)} className="hover:text-[#a8e6a3]">Contacto</Link>
        </div>
      )}
    </nav>
  );
}
