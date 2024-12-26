'use client'
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <header className="w-full py-4 flex flex-col sm:flex-row justify-around items-center bg-gray-800 shadow-lg">
        <h1 className="text-4xl font-bold text-yellow-500 drop-shadow-lg">CLAN SICARIOS</h1>
        <h3 className="text-xl sm:text-2xl italic text-yellow-400">L2 REBORN PROJECT</h3>
        <h2 className="text-sm sm:text-lg mt-2 sm:mt-0 text-gray-400">
          Nuestro propio lugar con <span className="text-yellow-500">juegos de azar</span> y{" "}
          <span className="text-pink-500">mujersuelas</span>. 😎
        </h2>
      </header>
      <main className="px-6 sm:px-12 py-8 text-center back">
        <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 bg-opacity-20 border">
          <h2 className="text-3xl font-semibold text-yellow-500 mb-4 drop-shadow-md opacity-90">Hubo una vez...</h2>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-400 opacity-80">
            Un hombre tan aburrido como para hacer una web a su clan... ese hombre se llamaba{" "}
            <span className="text-yellow-500 font-bold">JAKER</span>. Admirarlo y darle reco cuando se lo encuentren.
          </p>
        </div>
        <h2>FOTOS DEL CLAN</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <Image src="/farsita.jpg" alt="farsita" width={400} height={400} className="z-999" />
        </div>
      </main>
    </div>
  );
}
