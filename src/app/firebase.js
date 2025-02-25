import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/**
 * Agrega una historia a Firestore.
 * @param {Object} historia - Datos de la historia (nombre, lvl, motivo, detalles).
 * @param {string} userId - ID del usuario que la envió.
 */
export async function addHistoria(historia, userId) {
  try {
    const docRef = await addDoc(collection(db, "historias"), {
      ...historia,
      userId,
      timestamp: new Date(),
    });
    console.log("Historia agregada con ID:", docRef.id);
  } catch (error) {
    console.error("Error al agregar historia:", error);
  }
}

/**
 * Obtiene todas las historias de Firestore.
 * @returns {Promise<Array>} - Lista de historias.
 */
export async function getHistorias() {
  try {
    const querySnapshot = await getDocs(collection(db, "historias"));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error al obtener historias:", error);
    return [];
  }
}

export { db };
