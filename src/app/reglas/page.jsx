export default function ReglasDeConvivencia() {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8 sm:p-20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-3xl sm:text-5xl font-bold text-red-500">Reglas de Convivencia</h1>
          <p className="text-xl sm:text-2xl">Para asegurar un ambiente respetuoso y constructivo en nuestra comunidad.</p>
        </div>
  
        <div className="space-y-6 mt-10">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white">1. Respeto Mutuo</h2>
            <p className="text-gray-400">Todos los usuarios deben tratar a los demás con respeto. No se permitirá ningún tipo de comentario que incite odio, discriminación o violencia hacia otros usuarios o grupos.</p>
          </div>
  
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white">2. Lenguaje Apropiado</h2>
            <p className="text-gray-400">No se permiten palabras ofensivas, vulgares o insultantes. El lenguaje en los comentarios debe ser respetuoso y adecuado para todo público.</p>
          </div>
  
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white">3. Prohibido el Spam</h2>
            <p className="text-gray-400">No se permite la publicación de contenido irrelevante, repetitivo o promocional. Los comentarios deben ser pertinentes y relacionados con el tema de la página.</p>
          </div>
  
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white">4. Privacidad</h2>
            <p className="text-gray-400">No publiques información personal de otras personas sin su consentimiento. Esto incluye nombres completos, direcciones, números de teléfono o cualquier otro dato sensible.</p>
          </div>
  
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white">5. No Contenido Ilegal</h2>
            <p className="text-gray-400">Queda prohibido publicar contenido que infrinja las leyes locales, nacionales o internacionales. Esto incluye, pero no se limita a, material con derechos de autor, contenido ilegal o difamatorio.</p>
          </div>
  
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white">6. Críticas Constructivas</h2>
            <p className="text-gray-400">Las opiniones son bienvenidas, pero deben expresarse de manera constructiva. Si deseas compartir críticas, hazlo con respeto y sin descalificar a otros.</p>
          </div>
  
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white">7. No Se Permiten Amenazas o Violencia</h2>
            <p className="text-gray-400">Los comentarios que inciten a la violencia, amenazas o intimidación serán eliminados inmediatamente. Mantén un ambiente seguro para todos los usuarios.</p>
          </div>
  
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white">8. Moderación de Contenido</h2>
            <p className="text-gray-400">Los administradores de la página se reservan el derecho de eliminar comentarios que no cumplan con estas reglas. Además, los usuarios que violen las normas podrán ser sancionados, incluyendo la posibilidad de ser bloqueados de la plataforma.</p>
          </div>
        </div>
  
        {/* Descargo de responsabilidad */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-10">
          <h2 className="text-2xl font-bold text-white">Descargo de Responsabilidad</h2>
          <p className="text-gray-400">
            La página web no se hace responsable de los comentarios u opiniones expresadas por los usuarios. Los comentarios publicados son responsabilidad exclusiva de quienes los escriben. 
            Si encuentras contenido que viole nuestras reglas, te invitamos a reportarlo para que podamos tomar las medidas correspondientes.
          </p>
        </div>
      </div>
    );
  }
  