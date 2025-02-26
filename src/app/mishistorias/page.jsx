"use client";

import React, { useEffect, useState } from "react";
import { getHistorias } from "./firebase"; // Asegúrate de importar la función getHistorias
import { onAuthStateChangedListener } from "./firebase"; // Para escuchar el estado de autenticación
import { useRouter } from "next/router";

export default function MisHistorias() {
  const [historias, setHistorias] = useState([]);
  const [userId, setUserId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Escuchar el estado de autenticación
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        setUserId(user.uid); // Guardamos el ID del usuario autenticado
      } else {
        router.push("/login"); // Redirigir al login si no está autenticado
      }
    });

    // Limpiar el listener cuando el componente se desmonta
    return () => unsubscribe();
  }, [router]);

  useEffect(() => {
    // Si hay un usuario autenticado, obtenemos sus historias
    if (userId) {
      getHistorias(userId).then((historias) => {
        setHistorias(historias);
      });
    }
  }, [userId]);

  return (
    <div>
      <h1>Mis Historias</h1>
      {historias.length > 0 ? (
        <ul>
          {historias.map((historia) => (
            <li key={historia.id}>
              <h2>{historia.titulo}</h2>
              <p>{historia.contenido}</p>
              {/* Puedes agregar más campos según lo que tenga tu historia */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No tienes historias todavíaa.</p>
      )}
    </div>
  );
}
