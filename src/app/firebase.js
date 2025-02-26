import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, serverTimestamp,doc, updateDoc, increment, arrayUnion ,getDoc,query, where,deleteDoc } from "firebase/firestore";
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

export async function addHistoria(historia, userId) {  
  if (!userId) {  
    console.error("Error: userId es indefinido. No se puede agregar la historia.");  
    return;  
  }  

  try {  
    const docRef = await addDoc(collection(db, "historias"), {  
      ...historia,  
      usuarioId: userId,  // 🔥 Asegurar que usuarioId esté presente  
      timestamp: serverTimestamp(),  
    });  
    console.log("Historia agregada con ID:", docRef.id);  
  } catch (error) {  
    console.error("Error al agregar historia:", error.message);  
  }  
}
const eliminarHistoria = async (id) => {
  const db = getFirestore();
  const historiaRef = doc(db, "historias", id); // Asegúrate de que el nombre de la colección sea 'historias'
  
  try {
    await deleteDoc(historiaRef);
    console.log(`Historia con ID ${id} eliminada`);
  } catch (error) {
    console.error("Error eliminando la historia: ", error);
  }
};
const editarHistoria = async (id, nuevaInformacion) => {
  const db = getFirestore();
  const historiaRef = doc(db, "historias", id); // Asegúrate de que el nombre de la colección sea 'historias'
  
  try {
    await updateDoc(historiaRef, nuevaInformacion);
    console.log(`Historia con ID ${id} actualizada`);
  } catch (error) {
    console.error("Error actualizando la historia: ", error);
  }
};
// Función para obtener las historias del usuario autenticado
export const getHistorias = async (userId) => {
  try {
    const q = query(collection(db, "historias"), where("usuarioId", "==", userId));
    const querySnapshot = await getDocs(q);
    const historias = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return historias;
  } catch (error) {
    console.error("Error al obtener historias: ", error);
    throw error; // Para manejar el error en el componente
  }
};

// Función para incrementar el "me gusta"
export const incrementarMeGusta = async (historiaId, userId) => {
  try {
    const historiaRef = doc(db, 'historias', historiaId);

    // Obtener el documento de la historia
    const historiaDoc = await getDoc(historiaRef);
    const historiaData = historiaDoc.data();

    // Verificar si el usuario ya ha dado "me gusta"
    if (!historiaData.usuariosMegusta.includes(userId)) {
      // Si no ha dado "me gusta", incrementamos el contador y agregamos el "uid" a la lista de "me gusta"
      await updateDoc(historiaRef, {
        meGusta: increment(1), // Incrementa el contador de "me gusta"
        usuariosMegusta: arrayUnion(userId) // Agrega el "uid" a la lista de "me gusta"
      });
      console.log('Me gusta incrementado correctamente.');
    } else {
      console.log('El usuario ya ha dado "me gusta" a esta historia.');
    }
  } catch (error) {
    console.error("Error al incrementar el 'me gusta':", error);
  }
};

// Función para incrementar el "mal visto"
export const incrementarMalvisto = async (historiaId, userId) => {
  try {
    const historiaRef = doc(db, 'historias', historiaId);

    // Obtener el documento de la historia
    const historiaDoc = await getDoc(historiaRef);
    const historiaData = historiaDoc.data();

    // Verificar si el usuario ya ha dado "mal visto"
    if (!historiaData.usuariosMalVistos.includes(userId)) {
      // Si no ha dado "mal visto", incrementamos el contador y agregamos el "uid" a la lista de "mal visto"
      await updateDoc(historiaRef, {
        malvisto: increment(1), // Incrementa el contador de "mal visto"
        usuariosMalVistos: arrayUnion(userId) // Agrega el "uid" a la lista de "mal visto"
      });
      console.log('Mal visto incrementado correctamente.');
    } else {
      console.log('El usuario ya ha dado "mal visto" a esta historia.');
    }
  } catch (error) {
    console.error('Error al incrementar malvisto:', error);
  }
};

export const obtenerHistorias = async (uid) => {
  try {
    const historiasRef = collection(db, 'historias'); // Aquí accedes a la colección de historias en Firestore
    const q = query(historiasRef, where('userId', '==', uid)); // Filtras por el `uid` del usuario

    const querySnapshot = await getDocs(q); // Realizas la consulta para obtener los documentos

    const historiasData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return historiasData;
  } catch (error) {
    console.error('Error al obtener las historias:', error);
    throw new Error('No se pudieron obtener las historias');
  }
};

// Función para escuchar el estado de autenticación del usuario
export function onAuthStateChangedListener(callback) {
  return onAuthStateChanged(auth, callback);
}

export { db, auth };
