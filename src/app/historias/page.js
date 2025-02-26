import { useState, useEffect } from 'react';
import { incrementarMeGusta, incrementarMalvisto } from '../firebase'; // Importa las nuevas funciones

export default function Historias() {
  const { user } = UserAuth();
  const [historia, setHistoria] = useState({
    nombreUsuario: '',
    motivo: '',
    loQuePaso: ''
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
    if (historia.motivo && historia.loQuePaso && historia.nombreUsuario) {
      try {
        await addHistoria(historia, user.uid);
        setHistoria({ motivo: '', loQuePaso: '', nombreUsuario: '' }); // Limpiar el formulario
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
        <h3 className="text-xl sm:text-2xl">¡Comparte tu historia de forma anónima!</h3>
        <p className="text-sm text-gray-400">Recuerda que no se permite el uso de malas palabras ni mencionar cosas fuera de lugar, como el nombre del servidor o el juego.</p>
      </div>

      {/* Contenedor de las columnas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10">
        {/* Formulario para contar la historia */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
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
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 p-3 rounded text-white font-bold"
            >
              Enviar Historia
            </button>
          </form>
        </div>

        {/* Lista de historias */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-4 text-white">📜 Historias Publicadas</h2>
          <div className="space-y-6">
            {historias.length === 0 ? (
              <p className="text-center text-gray-400">No hay historias todavía. Sé el primero en compartir la tuya.</p>
            ) : (
              historias.map((hist) => (
                !hist.oculto && (  // Solo mostrar historias no ocultas
                  <div key={hist.id} className="bg-gray-700 p-6 rounded-lg shadow-md">
                    <p className="text-gray-400">🚨 <strong>Motivo del baneo:</strong> {hist.motivo}</p>
                    <p className="text-gray-300 mt-2">📖 <strong>Lo que pasó:</strong> {hist.loQuePaso}</p>
                    <p className="text-gray-300 mt-2">👤 <strong>Usuario:</strong> {hist.nombreUsuario}</p>
                    <div className="flex items-center mt-4">
                      <p className="text-gray-300 mr-2">👍 {hist.meGusta || 0} Me gusta</p>
                      <button
                        className="bg-blue-500 p-2 rounded text-white"
                        onClick={() => incrementarMeGusta(hist.id)}
                      >
                        ¡Me gusta!
                      </button>

                      <p className="text-gray-300 ml-4 mr-2">👎 {hist.malvisto || 0} Mal visto</p>
                      <button
                        className="bg-red-500 p-2 rounded text-white"
                        onClick={() => incrementarMalvisto(hist.id)}
                      >
                        ¡Mal visto!
                      </button>
                    </div>
                  </div>
                )
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
