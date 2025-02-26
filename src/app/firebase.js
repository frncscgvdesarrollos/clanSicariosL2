import { initializeApp } from "firebase/app";
import { 
  getFirestore, collection, addDoc, getDocs, serverTimestamp, doc, updateDoc, 
  increment, arrayUnion, getDoc, query, where, deleteDoc 
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDstVP7WRavVPaYopzzq0OLd7wLE5trYAs",
  authDomain: "noticias-2e544.firebaseapp.com",
  projectId: "noticias-2e544",
  storageBucket: "noticias-2e544.firebasestorage.app",
  messagingSenderId: "770532361851",
  appId: "1:770532361851:web:5b52192872d8f511a084de"
};

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
      usuarioId: userId,  
      timestamp: serverTimestamp(),  
    });  
    console.log("Historia agregada con ID:", docRef.id);  
  } catch (error) {  
    console.error("Error al agregar historia:", error.message);  
  }  
}

export async function eliminarHistoria(id) {
  try {
    await deleteDoc(doc(db, "historias", id));
    console.log(`Historia con ID ${id} eliminada`);
  } catch (error) {
    console.error("Error eliminando la historia: ", error);
  }
}

export async function editarHistoria(id, nuevaInformacion) {
  try {
    await updateDoc(doc(db, "historias", id), nuevaInformacion);
    console.log(`Historia con ID ${id} actualizada`);
  } catch (error) {
    console.error("Error actualizando la historia: ", error);
  }
}

export const getHistorias = async (userId) => {
  try {
    const q = query(collection(db, "historias"), where("usuarioId", "==", userId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error al obtener historias: ", error);
    throw error;
  }
};

export const incrementarMeGusta = async (historiaId, userId) => {
  try {
    const historiaRef = doc(db, "historias", historiaId);
    const historiaDoc = await getDoc(historiaRef);
    const historiaData = historiaDoc.data();
    
    if (!historiaData.usuariosMegusta?.includes(userId)) {
      await updateDoc(historiaRef, {
        meGusta: increment(1),
        usuariosMegusta: arrayUnion(userId)
      });
      console.log("Me gusta incrementado correctamente.");
    } else {
      console.log("El usuario ya ha dado 'me gusta' a esta historia.");
    }
  } catch (error) {
    console.error("Error al incrementar el 'me gusta':", error);
  }
};

export const incrementarMalvisto = async (historiaId, userId) => {
  try {
    const historiaRef = doc(db, "historias", historiaId);
    const historiaDoc = await getDoc(historiaRef);
    const historiaData = historiaDoc.data();
    
    if (!historiaData.usuariosMalVistos?.includes(userId)) {
      await updateDoc(historiaRef, {
        malvisto: increment(1),
        usuariosMalVistos: arrayUnion(userId)
      });
      console.log("Mal visto incrementado correctamente.");
    } else {
      console.log("El usuario ya ha dado 'mal visto' a esta historia.");
    }
  } catch (error) {
    console.error("Error al incrementar malvisto:", error);
  }
};

export const obtenerHistorias = async (uid) => {
  try {
    const q = query(collection(db, "historias"), where("userId", "==", uid));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error al obtener las historias:", error);
    throw new Error("No se pudieron obtener las historias");
  }
};

export function onAuthStateChangedListener(callback) {
  return onAuthStateChanged(auth, callback);
}

export { db, auth };
