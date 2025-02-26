import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, serverTimestamp,doc, updateDoc, increment  } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
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
export const incrementarMalvisto = async (historiaId) => {
  try {
    const historiaRef = doc(db, 'historias', historiaId);

    await updateDoc(historiaRef, {
      malvisto: increment(1), // Incrementa el valor de 'malvisto' en 1
    });

    console.log('Malvisto incrementado correctamente.');
  } catch (error) {
    console.error('Error al incrementar malvisto:', error);
  }
};
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
