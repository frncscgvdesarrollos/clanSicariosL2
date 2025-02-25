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
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center space-y-6 p-4">
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
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center space-y-6 p-4">
      <h1 className="text-5xl font-bold text-center">Bienvenido a baneados injustamente</h1>
      <button 
        onClick={handleLogin} 
        className="mt-6 bg-blue-600 hover:bg-blue-700 p-4 rounded-lg text-white font-semibold text-xl w-full max-w-xs">
        Login con Google
      </button>
      <p className="text-center mt-4 text-sm text-gray-400">
        ¿Ya tienes una cuenta? Inicia sesión para empezar a compartir tus historias.
      </p>
    </div>
  );
}
