import React from 'react';

const About = () => {
  return (
    <section className="p-6 bg-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Misión y Visión</h1>
        <p className="text-lg text-gray-700 mb-6">
          <strong>Misión:</strong> Nuestra misión es compartir los baneos desafortunados de los jugadores, proporcionando una plataforma donde puedan contar sus experiencias y cómo, a veces, sus esfuerzos se ven anulados sin razón justa. Creemos en la importancia de un entorno de juego justo, y queremos dar voz a aquellos que se sienten injustamente tratados.
        </p>
        <p className="text-lg text-gray-700">
          <strong>Visión:</strong> Nos comprometemos a ofrecer un espacio seguro y comprensivo donde los jugadores puedan compartir sus historias y encontrar apoyo. Estamos de acuerdo con el ban siempre que sea justo y transparente, asegurando que los jugadores que realmente infringen las reglas sean penalizados adecuadamente.
        </p>
      </div>
    </section>
  );
};

export default About;
