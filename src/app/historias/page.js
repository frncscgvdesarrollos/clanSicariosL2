'use client';
import { useState, useEffect } from 'react';
import { incrementarMeGusta, incrementarMalvisto } from '../firebase'; // Importa las funciones
import { UserAuth } from '../context/AuthContext';
import { addHistoria, db } from '../firebase';
import { onSnapshot, collection } from 'firebase/firestore';

export default function Historias() {
  const { user } = UserAuth();
  const [historia, setHistoria] = useState({
    nombreUsuario: '',
    motivo: '',
    loQuePaso: '',
    malvisto: 0,
    meGusta: 0,
    usuarioId: user?.uid || '',
    usuariosMalVistos: [],
    usuariosMegusta: [],
    fechaBaneo: ''  // Nueva propiedad para la fecha del baneo
  });

  const [historias, setHistorias] = useState([]);
  const [isClient, setIsClient] = useState(false);

  // Sólo habilitar el código después de la carga en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Suscripción a la colección de historias
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'historias'), (snapshot) => {
      const historiasData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setHistorias(historiasData);
    });

    return () => unsubscribe();
  }, []);

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setHistoria({ ...historia, [name]: value });
  };

  // Enviar la historia al servidor
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (historia.motivo && historia.loQuePaso && historia.nombreUsuario && historia.fechaBaneo) {
      try {
        await addHistoria(historia, user.uid);
        setHistoria({ ...historia, motivo: '', loQuePaso: '', nombreUsuario: '', fechaBaneo: '' });
      } catch (error) {
        console.error('Error al guardar la historia:', error);
      }
    } else {
      alert('Por favor completa todos los campos.');
    }
  };

  // Si no hay usuario autenticado, mostrar mensaje de acceso
  if (!user) {
    return (
      <div className="min-h-screen fondo text-white flex items-center justify-center">
        <h2 className="text-2xl">Necesitas iniciar sesión para contar tu historia.</h2>
      </div>
    );
  }

  // Solo cargar contenido si es el cliente
  if (!isClient) return null;

  return (
    <div className="min-h-screen fondo2 text-white p-8 sm:p-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10">
        {/* Formulario para enviar una nueva historia */}
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="nombreUsuario"
              value={historia.nombreUsuario}
              onChange={handleChange}
              placeholder="Tu nombre de usuario"
              className="w-full p-3 bg-gray-700 rounded text-white placeholder-gray-400"
            />
            <textarea
              name="motivo"
              placeholder="Motivo del baneo"
              value={historia.motivo}
              onChange={handleChange}
              rows="4"
              maxLength="500"
              className="w-full p-3 bg-gray-700 rounded text-white placeholder-gray-400"
            />
            <textarea
              name="loQuePaso"
              placeholder="Lo que pasó realmente"
              value={historia.loQuePaso}
              onChange={handleChange}
              rows="6"
              maxLength="500"
              className="w-full p-3 bg-gray-700 rounded text-white placeholder-gray-400"
            />
            <input
              type="text"
              name="fechaBaneo"
              value={historia.fechaBaneo}
              onChange={handleChange}
              placeholder="Fecha del baneo (YYYY-MM-DD HH:MM)"
              className="w-full p-3 bg-gray-700 rounded text-white placeholder-gray-400"
            />
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 p-3 rounded text-white font-bold"
            >
              Enviar Historia
            </button>
            <p className="text-sm text-gray-400">
              Revisa nuestras{' '}
              <a href="/REGLAS" className="text-blue-400 hover:underline">
                reglas
              </a>{' '}
              antes de compartir tu historia.
            </p>
          </form>
        </div>

        {/* Mostrar las historias existentes */}
        <div className="p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-4 text-red-200">📜 Historias de Baneos Injustos</h2>
          <div className="space-y-6">
            {historias.length === 0 ? (
              <p className="text-center text-gray-400">No hay historias todavía. Sé el primero en compartir la tuya.</p>
            ) : (
              historias.map((hist) =>
                !hist.oculto ? (
                  <div key={hist.id} className="bg-gray-700 p-6 rounded-lg shadow-md">
                    <p className="text-gray-400">🚨 <strong>Motivo del baneo:</strong> {hist.motivo}</p>
                    <p className="text-gray-300 mt-2">📖 <strong>Lo que pasó:</strong> {hist.loQuePaso}</p>
                    <p className="text-gray-300 mt-2">👤 <strong>Usuario:</strong> {hist.nombreUsuario}</p>
                    <p className="text-gray-300 mt-2">📅 <strong>Fecha del baneo:</strong> {hist.fechaBaneo}</p>

                    <div className="flex justify-between mt-4">
                      <button
                        className="bg-blue-500 p-2 rounded text-white hover:bg-blue-600 flex-1 mx-1"
                        onClick={() => incrementarMeGusta(hist.id, user.uid)}
                        aria-label={`Me gusta a la historia de ${hist.nombreUsuario}`}
                      >
                        👍 Me gusta ({hist.meGusta || 0})
                      </button>

                      <button
                        className="bg-red-500 p-2 rounded text-white hover:bg-red-600 flex-1 mx-1"
                        onClick={() => incrementarMalvisto(hist.id, user.uid)}
                        aria-label={`Mal visto a la historia de ${hist.nombreUsuario}`}
                      >
                        👎 Mal visto ({hist.malvisto || 0})
                      </button>
                    </div>
                  </div>
                ) : null
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
