'use client';

import React, { useState } from 'react';
import { db } from './firebase'; // Asegúrate de tener la configuración de Firebase aquí.
import { collection, addDoc } from 'firebase/firestore';

const BaneoForm = () => {
  const [formData, setFormData] = useState({
    playerName: '',
    characterLevel: '',
    banDate: '',
    officialReason: '',
    realReason: '',
    evidence: '',
    caseHistory: '',
    caseStatus: '',
    email: '',
    additionalInfo: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const docRef = await addDoc(collection(db, 'historias_baneo'), formData);
      setMessage('Historia enviada exitosamente.');
      setFormData({
        playerName: '',
        characterLevel: '',
        banDate: '',
        officialReason: '',
        realReason: '',
        evidence: '',
        caseHistory: '',
        caseStatus: '',
        email: '',
        additionalInfo: '',
      });
    } catch (e) {
      setMessage('Error al enviar la historia. Intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center mb-4">Cuenta tu Historia de Baneo Injusto en Lineage 2: Reborn</h1>

      {message && <p className="text-center text-red-600">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="playerName" className="block font-medium text-lg">
            Nombre del Jugador (opcional)
          </label>
          <input
            type="text"
            id="playerName"
            name="playerName"
            value={formData.playerName}
            onChange={handleInputChange}
            className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Ejemplo: Juan123"
          />
        </div>

        <div>
          <label htmlFor="characterLevel" className="block font-medium text-lg">
            Nivel del Personaje
          </label>
          <input
            type="number"
            id="characterLevel"
            name="characterLevel"
            value={formData.characterLevel}
            onChange={handleInputChange}
            className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Ejemplo: 45"
            min="1"
          />
        </div>

        <div>
          <label htmlFor="banDate" className="block font-medium text-lg">
            Fecha del Baneo
          </label>
          <input
            type="date"
            id="banDate"
            name="banDate"
            value={formData.banDate}
            onChange={handleInputChange}
            className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label htmlFor="officialReason" className="block font-medium text-lg">
            Motivo Oficial del Baneo
          </label>
          <input
            type="text"
            id="officialReason"
            name="officialReason"
            value={formData.officialReason}
            onChange={handleInputChange}
            className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Ejemplo: Uso de hacks"
          />
        </div>

        <div>
          <label htmlFor="realReason" className="block font-medium text-lg">
            Motivo Real (según tu historia)
          </label>
          <textarea
            id="realReason"
            name="realReason"
            value={formData.realReason}
            onChange={handleInputChange}
            className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Explica qué realmente sucedió"
            rows="4"
          />
        </div>

        <div>
          <label htmlFor="evidence" className="block font-medium text-lg">
            Pruebas o Evidencia
          </label>
          <input
            type="text"
            id="evidence"
            name="evidence"
            value={formData.evidence}
            onChange={handleInputChange}
            className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enlace a imágenes o videos"
          />
        </div>

        <div>
          <label htmlFor="caseHistory" className="block font-medium text-lg">
            Historia Completa del Baneo
          </label>
          <textarea
            id="caseHistory"
            name="caseHistory"
            value={formData.caseHistory}
            onChange={handleInputChange}
            className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Cuenta todo lo que ocurrió en detalle"
            rows="6"
          />
        </div>

        <div>
          <label htmlFor="caseStatus" className="block font-medium text-lg">
            Estado Actual del Caso
          </label>
          <input
            type="text"
            id="caseStatus"
            name="caseStatus"
            value={formData.caseStatus}
            onChange={handleInputChange}
            className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Ejemplo: Apelación en proceso"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium text-lg">
            Correo Electrónico (opcional)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Ejemplo: correo@dominio.com"
          />
        </div>

        <div>
          <label htmlFor="additionalInfo" className="block font-medium text-lg">
            Información Adicional
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleInputChange}
            className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Deja cualquier detalle extra que quieras compartir"
            rows="4"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-300"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Historia'}
        </button>
      </form>
    </div>
  );
};

export default BaneoForm;
