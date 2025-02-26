import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, serverTimestamp,doc, updateDoc, increment  } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDstVP7WRavVPaYopzzq0OLd7wLE5trYAs",
  authDomain: "noticias-2e544.firebaseapp.com",
  projectId: "noticias-2e544",
  storageBucket: "noticias-2e544.firebasestorage.app",
  messagingSenderId: "770532361851",
  appId: "1:770532361851:web:5b52192872d8f511a084de"
};

// Verifica si Firebase ya está inicializado
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Función para agregar una historia a Firestore
export async function addHistoria(historia, userId) {
  if (!userId) {
    console.error("Error: userId es indefinido. No se puede agregar la historia.");
    return;
  }

  try {
    const docRef = await addDoc(collection(db, "historias"), {
      ...historia,
      userId,
      timestamp: serverTimestamp(), // Usa timestamp de Firestore
      comentarios: [], // Suponiendo que cada historia tendrá comentarios vacíos al principio
    });
    console.log("Historia agregada con ID:", docRef.id);
  } catch (error) {
    console.error("Error al agregar historia:", error.message);
  }
}

// Función para incrementar el contador de clics en un comentario
export async function incrementarVistosMalos(historiaId, comentarioId) {
  try {
    const historiaRef = doc(db, "historias", historiaId);
    const historiaDoc = await getDoc(historiaRef);

    if (historiaDoc.exists()) {
      const comentarios = historiaDoc.data().comentarios;
      const comentario = comentarios.find(c => c.id === comentarioId);

      if (comentario) {
        // Incrementa el contador de 'vistosMalos'
        comentario.vistosMalos = (comentario.vistosMalos || 0) + 1;

        // Si los clics son mayores a 4, no mostrar el comentario
        if (comentario.vistosMalos > 4) {
          comentario.oculto = true; // Agrega la propiedad 'oculto' para no mostrarlo
        }

        // Actualiza el comentario en Firestore
        await updateDoc(historiaRef, {
          comentarios: comentarios.map(c => c.id === comentarioId ? comentario : c)
        });
      }
    } else {
      console.log("No se encontró la historia.");
    }
  } catch (error) {
    console.error("Error al incrementar vistosMalos:", error.message);
  }
}
export const incrementarMeGusta = async (historiaId) => {
  try {
    const historiaRef = doc(db, "historias", historiaId);
    await updateDoc(historiaRef, {
      meGusta: increment(1) // Incrementa el contador de "me gusta" en 1
    });
  } catch (error) {
    console.error("Error al incrementar el 'me gusta':", error);
  }
};

// Función para obtener todas las historias de Firestore
export async function getHistorias() {
  try {
    const querySnapshot = await getDocs(collection(db, "historias"));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error al obtener historias:", error.message);
    return [];
  }
}

// Función para escuchar el estado de autenticación del usuario
export function onAuthStateChangedListener(callback) {
  return onAuthStateChanged(auth, callback);
}

export { db, auth };
