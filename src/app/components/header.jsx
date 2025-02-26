import Link from 'next/link'; // Importamos Link de Next.js

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between">
        <Link href="/" className="text-xl font-bold">Inicio</Link>
        <div className="space-x-4">
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
