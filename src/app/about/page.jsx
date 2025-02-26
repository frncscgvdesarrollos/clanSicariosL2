import React from 'react';

const About = () => {
  return (
    <section className="p-8 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-2xl font-extrabold text-red-500 mb-6">⚖️ Un Espacio para la Transparencia en Lineage 2 ⚖️</h1>
        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          Sabemos lo frustrante que puede ser perder horas de esfuerzo por un baneo que consideras injusto.  
          Esta plataforma fue creada para **compartir historias, generar debate y promover un juego más justo**  
          donde las reglas sean aplicadas con criterio y transparencia.
        </p>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">🎯 Nuestra Misión</h2>
          <p className="text-gray-300">
            Ofrecer un espacio donde los jugadores puedan **expresar sus experiencias**,  
            documentar baneos cuestionables y generar conciencia sobre la importancia  
            de una administración justa en los servidores de Lineage 2.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-6">
          <h2 className="text-2xl font-bold text-green-400 mb-4">🌍 Nuestra Visión</h2>
          <p className="text-gray-300">
            Creemos en un **equilibrio**: las reglas existen por una razón, pero su aplicación debe ser clara y objetiva.  
            No buscamos justificar trampas, sino dar **voz a quienes sienten que su caso no fue evaluado correctamente**.  
            Queremos una comunidad más informada y un sistema más justo para todos.
          </p>
        </div>

        <p className="text-xl font-semibold text-red-400 mt-8">
          📜 **Porque cada historia merece ser escuchada.**  
        </p>
      </div>
    </section>
  );
};

export default About;
