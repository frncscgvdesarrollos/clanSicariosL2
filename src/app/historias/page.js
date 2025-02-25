'use client';

import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { addHistoria, getHistorias } from "../firebase"; // Importamos funciones de Firebase
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../firebase";

export default function Historias() {
  const { user } = UserAuth();
  const [historia, setHistoria] = useState({
    nombre: '',
    lvl: '',
    motivo: '',
    loQuePaso: '',
    historia: ''
  });

  const [historias, setHistorias] = useState([]);
  const router = useRouter();

  // Obtener historias en tiempo real
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "historias"), (snapshot) => {
      const historiasData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setHistorias(historiasData);
    });

    return () => unsubscribe();
  }, []);

  // Maneja el cambio en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setHistoria({
      ...historia,
      [name]: value
    });
  };

  // Función para enviar la historia a Firebase
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (historia.nombre && historia.lvl && historia.motivo && historia.loQuePaso && historia.historia) {
      try {
        await addHistoria(historia, user.uid);
        setHistoria({ nombre: '', lvl: '', motivo: '', loQuePaso: '', historia: '' }); // Limpiar el formulario
      } catch (error) {
        console.error("Error al guardar la historia:", error);
      }
    } else {
      alert("Por favor completa todos los campos.");
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <h2 className="text-2xl">Necesitas iniciar sesión para contar tu historia.</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 sm:p-20">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-3xl sm:text-5xl font-bold text-red-500">🚨 BANEADOS INJUSTAMENTE 🚨</h1>
        <h3 className="text-xl sm:text-2xl">¡Comparte tu historia!</h3>
      </div>

      {/* Formulario para contar la historia */}
      <form onSubmit={handleSubmit} className="mt-10 max-w-2xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
        <input type="text" name="nombre" placeholder="Tu nombre" value={historia.nombre} onChange={handleChange} className="w-full p-3 bg-gray-700 rounded text-white placeholder-gray-400"/>
        <input type="text" name="lvl" placeholder="Nivel de tu personaje" value={historia.lvl} onChange={handleChange} className="w-full p-3 bg-gray-700 rounded text-white placeholder-gray-400"/>
        <input type="text" name="motivo" placeholder="Motivo del baneo" value={historia.motivo} onChange={handleChange} className="w-full p-3 bg-gray-700 rounded text-white placeholder-gray-400"/>
        <textarea name="loQuePaso" placeholder="Lo que pasó realmente" value={historia.loQuePaso} onChange={handleChange} rows="4" className="w-full p-3 bg-gray-700 rounded text-white placeholder-gray-400"/>
        <textarea name="historia" placeholder="Cuenta tu historia" value={historia.historia} onChange={handleChange} rows="6" className="w-full p-3 bg-gray-700 rounded text-white placeholder-gray-400"/>
        <button type="submit" className="w-full bg-red-500 hover:bg-red-600 p-3 rounded text-white font-bold">Enviar Historia</button>
      </form>

      {/* Lista de historias */}
      <div className="mt-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4 text-white">📜 Historias Publicadas</h2>
        <div className="space-y-6">
          {historias.length === 0 ? (
            <p className="text-center text-gray-400">No hay historias todavía. Sé el primero en compartir la tuya.</p>
          ) : (
            historias.map((hist) => (
              <div key={hist.id} className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-red-500">{hist.nombre} (LVL {hist.lvl})</h3>
                <p className="text-gray-400">🚨 <strong>Motivo del baneo:</strong> {hist.motivo}</p>
                <p className="text-gray-300 mt-2">📖 <strong>Lo que pasó:</strong> {hist.loQuePaso}</p>
                <p className="text-white mt-4">{hist.historia}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
