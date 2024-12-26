import Image from "next/image";
import Noticias from "./components/Noticias";
import Votaciones from "./components/Votaciones";
import Info from "./components/InformacionCOMUN";
import Miembros from "./components/Miembros";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>CLAN SICARIOS</h1>
      <h3>L2 REBORN PROJECT</h3>
      <h2>Nuestro propio lugar con juegos de azar y mujersuelas.</h2>
      <div>
        <Noticias/>
        <Votaciones/>
        <Info/>
        <Miembros/>
      </div>
    </div>
  );
}
