'use client';
import Image from "next/image";
import ClanLevels from "./components/levelsclan";

export default function Home() {
  return (
        <div className="min-h-screen bg-gray-900 text-white p-8 sm:p-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-3xl sm:text-5xl font-bold text-red-500">🚨 BANEADOS INJUSTAMENTE 🚨</h1>
            <h3 className="text-xl sm:text-2xl">¡Comparte tu historia!</h3>
            <h2 className="text-lg sm:text-xl text-gray-400">
              No dejes que quede impune, cuéntale al mundo lo que pasó.
            </h2>
          </div>
    
          {/* Formulario para contar la historia */}
          <form className="mt-10 max-w-2xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
            <input 
              type="text" 
              placeholder="Tu nombre (opcional)" 
              className="w-full p-3 bg-gray-700 rounded text-white placeholder-gray-400"
            />
            <textarea 
              placeholder="Cuenta tu historia aquí..." 
              rows="5"
              className="w-full p-3 bg-gray-700 rounded text-white placeholder-gray-400"
            ></textarea>
            <button 
              type="submit" 
              className="w-full bg-red-500 hover:bg-red-600 p-3 rounded text-white font-bold">
              Enviar Historia
            </button>
          </form>
    
          {/* Sección de historias enviadas */}
          <div className="mt-12 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center">📜 Historias Recientes</h2>
            <div className="mt-6 space-y-4">
              <div className="bg-gray-800 p-4 rounded-lg shadow">
                <p className="text-gray-300">
                  "Fui baneado sin razón después de años jugando en el servidor..."
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow">
                <p className="text-gray-300">
                  "Invertí tiempo y dinero, pero un admin me sacó sin explicación..."
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

