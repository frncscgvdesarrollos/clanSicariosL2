import Link from 'next/link'; // Importamos Link de Next.js

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center">
        {/* Enlace al inicio */}
        <img src='/parca.png' alt='Logo' className='h-10' />
        <h1 className="text-3xl sm:text-2xl font-bold text-red-500">🚨 ¡Historias de Baneos Injustos en servidores de Lineage 2! 🚨</h1>
        {/* Enlaces de navegación con espaciado */}
        <div className="space-x-6 flex items-center">
          <Link href="/" className="text-2xl font-bold">Inicio</Link>
          <Link href="/historias" className="hover:text-yellow-400">Historias</Link>
          <Link href="/mishistorias" className="hover:text-yellow-400">Mis Historias</Link> {/* Nueva ruta agregada */}
          <Link href="/reglas" className="hover:text-yellow-400">Reglas</Link>
          <Link href="/about" className="hover:text-yellow-400">About</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
