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
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl">Bienvenido, {user.displayName}</h1>
        <button 
          onClick={handleLogout} 
          className="mt-4 bg-red-500 p-3 rounded text-white">
          Logout
        </button>
        <button 
          onClick={() => router.push('/historias')} 
          className="mt-4 bg-green-500 p-3 rounded text-white">
          Ir a Historias
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl">Bienvenido a Baneados Injustamente</h1>
      <button 
        onClick={handleLogin} 
        className="mt-4 bg-blue-500 p-3 rounded text-white">
        Login con Google
      </button>
    </div>
  );
}
