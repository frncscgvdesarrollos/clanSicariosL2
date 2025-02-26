'use client';

import { UserAuth } from "./context/AuthContext";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const { user, googleSignIn, logOut } = UserAuth();
  const router = useRouter();

  const handleLogin = () => {
    googleSignIn();
  };

  const handleLogout = () => {
    logOut();
    router.push('/'); // Redirige después de hacer logout
  };

  if (user) {
    return (
      <div className="min-h-screen fondo text-white flex flex-col items-center justify-center space-y-6 p-4">
        <h1 className="text-5xl font-bold text-center">Bienvenido, {user.displayName}</h1>
        <p className="text-lg text-center">Gracias por unirte a la causa. Ayúdanos a documentar los baneos injustos.</p>
        <button 
          onClick={handleLogout} 
          className="mt-4 bg-red-600 hover:bg-red-700 p-4 rounded-lg text-white font-semibold text-xl w-full max-w-xs">
          Logout
        </button>
        <button 
          onClick={() => router.push('/historias')} 
          className="mt-4 bg-green-600 hover:bg-green-700 p-4 rounded-lg text-white font-semibold text-xl w-full max-w-xs">
          Ir a Historias
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen  fondo text-white flex flex-col items-center justify-center space-y-6 p-4">
      <div className="bg-gray-600 bg-opacity-80 rounded-lg flex flex-col items-center justify-center space-y-6 p-4">
      <span> la pagina esta en desarrollo </span>
      <h1 className="text-5xl font-bold text-center">BADBAN L2.</h1>
      <span className="text-lg text-center color-gray-900">Recuerda que siempre pueden cometer errores los master del juego y que siempre debes tratar de hablar por las vias que te proporcionan, <br/> sin embargo muchas veces es injusto realmente.</span>
      <button 
        onClick={handleLogin} 
        className="mt-6 bg-blue-600 hover:bg-blue-700 p-4 rounded-lg text-white font-semibold text-xl w-full max-w-xs">
        Login con Google
      </button>
      </div>
    </div>
  );
}
