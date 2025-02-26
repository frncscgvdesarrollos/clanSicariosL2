import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex flex-col sm:flex-row justify-between items-center sm:items-start text-center sm:text-left gap-4">
        {/* Enlace al inicio con la imagen */}
        <Link href="/">
          <img src='/parca.png' alt='Logo' className='h-12 sm:h-20' />
        </Link>
        {/* Enlaces de navegación */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
          <Link href="/historias" className="hover:text-yellow-400">Historias</Link>
          <Link href="/mishistorias" className="hover:text-yellow-400">Mis Historias</Link>
          <Link href="/reglas" className="hover:text-yellow-400">Reglas</Link>
          <Link href="/about" className="hover:text-yellow-400">About</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
