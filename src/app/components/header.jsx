import React from 'react';
import { Link } from 'react-router-dom'; // Asumimos que estás usando React Router para las rutas

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between">
        <Link to="/" className="text-xl font-bold">Inicio</Link>
        <div className="space-x-4">
          <Link to="/historias" className="hover:text-yellow-400">Historias</Link>
          <Link to="/reglas" className="hover:text-yellow-400">Reglas</Link>
          <Link to="/about" className="hover:text-yellow-400">About</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
