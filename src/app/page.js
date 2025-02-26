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
    <div className="flex flex-col sm:flex-row justify-center items-center min-h-screen">

      {/* Div con fondo de la parca */}
      <div 
  className="w-full h-64 sm:min-h-screen bg-no-repeat bg-center sm:bg-cover"
  style={{ backgroundImage: "url('/parca.png')", backgroundSize: 'contain' }}>
</div>


      {/* Contenedor del login */}
      <div className="w-full max-w-md px-6 py-8 bg-gray-900 bg-opacity-90 text-center rounded-lg shadow-lg">
        <h1 className="text-2xl sm:text-4xl font-bold text-white">BADBAN L2</h1>
        <p className="text-white text-opacity-80 mt-4 sm:mt-6">
          Recuerda que los administradores pueden cometer errores y que siempre debes intentar resolver el problema por los medios oficiales.
        </p>

        {user ? (
          <>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mt-6">
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
            <p className="text-white text-opacity-80 mt-4 sm:mt-6">
              Si crees que fuiste baneado de forma injusta, ayuda a documentar estos casos.<br/>
              Y que esta página sirva para quienes estén buscando server sepan donde no tirar su tiempo.
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