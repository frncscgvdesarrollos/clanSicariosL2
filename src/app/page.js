'use client';
import Image from "next/image";
import ClanLevels from "./components/levelsclan";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-100 text-gray-300">
      <header className="w-full py-4 flex flex-col sm:flex-row justify-between items-center bg-gray-800 shadow-lg px-6">
        <div>
          <h1 className="text-4xl font-bold text-yellow-500 drop-shadow-lg">CLAN SICARIOS</h1>
          <h3 className="text-xl sm:text-2xl italic text-yellow-400">L2 REBORN PROJECT</h3>
        </div>
        <nav>
          <ul className="flex space-x-4 text-gray-400 text-sm sm:text-lg">
            <li>
              <a href="#home" className="hover:text-yellow-500">Inicio</a>
            </li>
            <li>
              <a href="#clan-levels" className="hover:text-yellow-500">Clan Levels</a>
            </li>
            <li>
              <a href="#info" className="hover:text-yellow-500">Información</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="px-6 sm:px-12 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Sección Inicio */}
        <section id="home" className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 bg-opacity-20 mb-12 p-6 rounded-lg shadow-md h-[500px] flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-yellow-500 mb-4 drop-shadow-md opacity-90">Hubo una vez...</h2>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-400 opacity-80">
              Un hombre tan aburrido como para hacer una web a su clan... ese hombre se llama{" "}
              <span className="text-yellow-500 font-bold">JAKER</span>. Admirarlo y darle <span className="text-blue-500">reco</span> cuando se lo encuentren.
            </p>
          </div>
          <div className="flex justify-center">
            <img src="/lider.bmp" alt="lider de clan"  className="rounded-lg"  />
          </div>
        </section>

        {/* Sección Clan Levels */}
        <section id="clan-levels" className="bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800 bg-opacity-20 p-6 rounded-lg shadow-md h-[500px]">
          <h2 className="text-3xl font-semibold text-yellow-500 mb-4 drop-shadow-md opacity-90">Niveles del Clan</h2>
          <p className="text-lg text-gray-400 mb-6">
            Actualmente estamos en <span className="text-yellow-500 font-bold">Nivel 0</span>. Para avanzar al siguiente nivel, necesitamos:
          </p>
          <ul className="list-disc list-inside text-left text-gray-300">
            <li>Registrar 10 miembros.</li>
            <li>Completar una misión del clan.</li>
            <li>Pago por cada miembro: <span className="text-yellow-500">100,000 adena</span>.</li>
          </ul>
          <p className="mt-4 text-gray-400 italic">
            Reúne a tus amigos y prepara el oro para subir al nivel 1. ¡El camino del clan comienza aquí!
          </p>
        </section>

        {/* Sección Información */}
        <section id="info" className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 bg-opacity-20 p-6 rounded-lg shadow-md h-[500px]">
          <h2 className="text-3xl font-semibold text-yellow-500 mb-4 drop-shadow-md opacity-90">Información del Clan</h2>
          <p className="text-lg text-gray-400">
            Nuestro clan busca ser uno de los más poderosos en el servidor. Contamos con jugadores activos, estrategias únicas y, sobre todo, el mejor ambiente para crecer juntos.
          </p>
          <p className="mt-4 text-gray-400">
            Si eres nuevo, únete a nosotros y forma parte de nuestra comunidad. El mundo de <span className="text-yellow-500">L2 Reborn</span> es mejor cuando lo compartimos.
          </p>
        </section>
      </main>
    </div>
  );
}
