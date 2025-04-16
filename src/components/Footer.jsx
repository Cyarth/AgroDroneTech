export default function Footer() {
  return (
    <footer className="bg-farmdark text-white px-6 py-12 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Información general */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold mb-2">AgroDroneTech</h3>
          <p className="text-sm text-graylight max-w-md">
            Tecnología aérea para una agricultura más eficiente y sostenible.
          </p>
        </div>

        {/* Información personal / contacto */}
        <div className="text-center md:text-right text-sm text-graylight leading-relaxed">
          <p className="font-semibold">Mairon Iturra</p>
          <p>Desarrollador Fullstack</p>
          <p>iturramairon@gmail.com</p>
          <p>+56 9 3758 4216</p>
        </div>
      </div>

      {/* Marca de agua */}
      <div className="mt-10 text-center text-xs text-white opacity-20">
        © 2025 AgroDroneTech. Todos los derechos reservados.
      </div>
    </footer>
  );
}
