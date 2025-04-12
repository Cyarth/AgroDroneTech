export default function Contacto() {
  return (
    <div className="min-h-screen bg-farmlight text-farmdark p-8">
      <h1 className="text-4xl font-bold mb-4">Contacto</h1>
      <p>Déjanos tu mensaje y te responderemos lo antes posible.</p>
      <form className="mt-6 grid gap-4 max-w-md">
        <input type="text" placeholder="Nombre" className="p-2 border rounded" />
        <input type="email" placeholder="Correo electrónico" className="p-2 border rounded" />
        <textarea placeholder="Mensaje" rows="4" className="p-2 border rounded"></textarea>
        <button type="submit" className="bg-farmgreen text-white py-2 rounded hover:bg-farmdark">Enviar</button>
      </form>
    </div>
  );
}
