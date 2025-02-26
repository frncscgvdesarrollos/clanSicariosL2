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

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 bg-cover bg-center brightness-75" 
        style={{ backgroundImage: "url('/designer.jpg')" }} 
      ></div>

      {/* Contenedor con efecto de vidrio */}
      <div className="relative bg-white bg-opacity-10 backdrop-blur-lg shadow-lg rounded-2xl p-8 max-w-lg w-full text-center border border-white/20">
        <h1 className="text-4xl font-bold text-white">BADBAN L2</h1>
        <p className="text-white text-opacity-80 mt-4">
          Recuerda que los administradores pueden cometer errores, pero siempre intenta resolverlo por los medios oficiales.
        </p>

        {user ? (
          <>
            <h2 className="text-2xl font-semibold text-white mt-6">
              Bienvenido, {user.displayName}
            </h2>
            <p className="text-white text-opacity-80">
              Gracias por unirte a la causa. Ayúdanos a documentar los baneos injustos.
            </p>
            <div className="mt-6 space-y-4">
              <button 
                onClick={() => router.push('/historias')}
                className="w-full bg-green-500 hover:bg-green-600 transition-all p-3 rounded-lg text-white font-medium text-lg shadow-md">
                Ir a Historias
              </button>
              <button 
                onClick={handleLogout}
                className="w-full bg-red-500 hover:bg-red-600 transition-all p-3 rounded-lg text-white font-medium text-lg shadow-md">
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="text-white text-opacity-80 mt-6">
              Si crees que fuiste baneado de forma injusta, ayuda a documentar estos casos.
            </p>
            <button 
              onClick={handleLogin}
              className="mt-6 w-full bg-blue-500 hover:bg-blue-600 transition-all p-3 rounded-lg text-white font-medium text-lg shadow-md">
              Login con Google
            </button>
          </>
        )}
      </div>
    </div>
  );
}
