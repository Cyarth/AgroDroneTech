export default function Footer() {
  return (
    <footer className="bg-[#23692d] text-white text-sm px-6 py-8 relative mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-4">
        <div className="text-left leading-relaxed opacity-90">
          <p className="font-bold">Mairon Iturra</p>
          <p>Desarrollador Fullstack</p>
          <p>iturramairon@gmail.com</p>
          <p>+56 9 3758 4216</p>
        </div>
        <div className="text-right text-xs opacity-60 md:mt-0">
          <p>© 2025 AgroDroneTech</p>
          <p>Todos los derechos reservados</p>
        </div>
      </div>

      {/* Marca de agua en esquina inferior izquierda */}
      <div className="absolute bottom-2 left-2 text-[10px] text-white opacity-20 leading-tight">
        Mairon Iturra<br />
        Desarrollador Fullstack<br />
        iturramairon@gmail.com<br />
        +56 9 3758 4216
      </div>
    </footer>
  );
}
