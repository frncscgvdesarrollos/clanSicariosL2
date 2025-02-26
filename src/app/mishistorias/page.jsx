"use client";
import { useState, useEffect } from "react";
import { obtenerHistorias, eliminarHistoria, editarHistoria } from "../firebase"; // Asegúrate de que la ruta es correcta
import { UserAuth } from "../context/AuthContext"; // Asegúrate de que la ruta es correcta

export default function MisHistorias() {
  const [historias, setHistorias] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = UserAuth(); // Usamos UserAuth para obtener el usuario autenticado

  useEffect(() => {
    if (user) {
      console.log("User UID:", user.uid); // Verifica que este valor sea el correcto
      const fetchHistorias = async () => {
        try {
          const historiasData = await obtenerHistorias(user.uid); // Llamada a obtenerHistorias
          console.log("Historias obtenidas:", historiasData);
          setHistorias(historiasData); // Actualiza el estado con las historias obtenidas
        } catch (err) {
          console.error("Error al cargar las historias:", err);
          setError("No se pudieron cargar las historias.");
        } finally {
          setLoading(false); // Termina de cargar, incluso si hay error
        }
      };
      
      fetchHistorias(); // Llama a la función para obtener las historias
    } else {
      setError("No estás autenticado.");
      setLoading(false); // Termina de cargar si no hay usuario autenticado
    }
  }, [user]); // Dependencia de `user`, se ejecuta cada vez que el usuario cambia

  const handleEliminar = async (id) => {
    try {
      await eliminarHistoria(id); // Se elimina la historia de Firestore
      setHistorias((prevHistorias) => prevHistorias.filter((historia) => historia.id !== id)); // Elimina la historia del estado de forma segura
    } catch (error) {
      console.error("Error al eliminar la historia:", error);
      setError("No se pudo eliminar la historia.");
    }
  };

  const handleEditar = async (id, nuevaInformacion) => {
    try {
      await editarHistoria(id, nuevaInformacion); // Se actualiza la historia en Firestore
      setHistorias((prevHistorias) =>
        prevHistorias.map((historia) =>
          historia.id === id ? { ...historia, ...nuevaInformacion } : historia
        )
      ); // Actualiza la historia en el estado de forma segura
    } catch (error) {
      console.error("Error al editar la historia:", error);
      setError("No se pudo editar la historia.");
    }
  };

  if (loading) return <p>Cargando historias...</p>; // Muestra mensaje mientras carga
  if (error) return <p>{error}</p>; // Muestra mensaje de error si hay algún problema

  return (
    <div className="min-h-screen fondo2 text-white p-8 sm:p-20">
      <h1 className="text-2xl font-bold text-center mb-4 text-red-200">Mis Historias</h1>
      
      {historias.length > 0 ? (
        <ul className="space-y-6">
          {historias.map((historia) => (
            <li key={historia.id} className="bg-gray-700 p-6 rounded-lg shadow-md">
              <h2 className="text-gray-400">🚨 <strong>Motivo del baneo:</strong> {historia.motivo}</h2>
              <p className="text-gray-300 mt-2">📅 <strong>Fecha del baneo:</strong> {historia.fechaBaneo}</p>
              {/* Aquí puedes agregar más información de la historia */}
              <button 
                onClick={() => handleEliminar(historia.id)} 
                className="bg-red-600 text-white p-2 rounded mt-4"
              >
                Eliminar
              </button>
              <button 
                onClick={() => handleEditar(historia.id, { motivo: 'Nuevo Motivo' })} 
                className="bg-blue-600 text-white p-2 rounded mt-4 ml-4"
              >
                Editar
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tienes historias.</p>
      )}
    </div>
  );
}
