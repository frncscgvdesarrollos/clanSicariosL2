'use client';

const ClanLevels = () => {
  const levels = [
    { level: 1, sp: '30,000', adena: '650,000', requirements: '-', members: 1 },
    { level: 2, sp: '150,000', adena: '2,500,000', requirements: '-', members: 1 },
    { level: 3, sp: '500,000', adena: '-', requirements: 'Proof of Blood (cazando Bloody Queens)', members: 1 },
    { level: 4, sp: '1,400,000', adena: '-', requirements: 'Proof of Alliance (quest Nivel Clan 3)', members: 1 },
    { level: 5, sp: '3,500,000', adena: '-', requirements: 'Proof of Aspiration (quest Nivel Clan 4)', members: 1 },
    { level: 6, sp: '-', adena: '-', requirements: '-', members: 30 },
    { level: 7, sp: '-', adena: '-', requirements: '-', members: 80 },
    { level: 8, sp: '-', adena: '-', requirements: '-', members: 120 },
    { level: 9, sp: '-', adena: '-', requirements: '150 Blood Oaths', members: 140 },
    { level: 10, sp: '-', adena: '-', requirements: '5 Blood Pledges', members: 140 },
    { level: 11, sp: '-', adena: '-', requirements: 'Debe ser dueño de territorio', members: 140 },
  ];

  const structure = [
    { level: 0, members: 10, academy: 0, royalGuard1: 0, royalGuard2: 0, order1: 0, order2: 0, order3: 0, order4: 0, maxMembers: 10 },
    { level: 1, members: 15, academy: 0, royalGuard1: 0, royalGuard2: 0, order1: 0, order2: 0, order3: 0, order4: 0, maxMembers: 15 },
    { level: 2, members: 20, academy: 0, royalGuard1: 0, royalGuard2: 0, order1: 0, order2: 0, order3: 0, order4: 0, maxMembers: 20 },
    { level: 3, members: 30, academy: 0, royalGuard1: 0, royalGuard2: 0, order1: 0, order2: 0, order3: 0, order4: 0, maxMembers: 30 },
    { level: 4, members: 40, academy: 0, royalGuard1: 0, royalGuard2: 0, order1: 0, order2: 0, order3: 0, order4: 0, maxMembers: 40 },
    { level: 5, members: 40, academy: 20, royalGuard1: 0, royalGuard2: 0, order1: 0, order2: 0, order3: 0, order4: 0, maxMembers: 60 },
    { level: 6, members: 40, academy: 20, royalGuard1: 20, royalGuard2: 20, order1: 0, order2: 0, order3: 0, order4: 0, maxMembers: 100 },
    { level: 7, members: 40, academy: 20, royalGuard1: 20, royalGuard2: 20, order1: 10, order2: 10, order3: 10, order4: 10, maxMembers: 140 },
    { level: 8, members: 40, academy: 20, royalGuard1: 20, royalGuard2: 20, order1: 10, order2: 10, order3: 10, order4: 10, maxMembers: 140 },
    { level: 9, members: 40, academy: 20, royalGuard1: 20, royalGuard2: 20, order1: 25, order2: 25, order3: 10, order4: 10, maxMembers: 170 },
    { level: 10, members: 40, academy: 20, royalGuard1: 20, royalGuard2: 20, order1: 25, order2: 25, order3: 25, order4: 25, maxMembers: 200 },
    { level: 11, members: 40, academy: 20, royalGuard1: 30, royalGuard2: 30, order1: 25, order2: 25, order3: 25, order4: 25, maxMembers: 220 },
  ];

  return (
    <div className="p-6 min-h-screen text-white">
      <h1 className="text-3xl font-bold text-center mb-8">Niveles del Clan en Lineage 2</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300 bg-gray-900">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Nivel del Clan</th>
              <th className="border border-gray-300 px-4 py-2">SPs Requeridos</th>
              <th className="border border-gray-300 px-4 py-2">Adena Requerida</th>
              <th className="border border-gray-300 px-4 py-2">Requerimientos Especiales</th>
              <th className="border border-gray-300 px-4 py-2">Miembros Mínimos</th>
            </tr>
          </thead>
          <tbody>
            {levels.map((level) => (
              <tr key={level.level}>
                <td className="border border-gray-300 px-4 py-2 text-center">{level.level}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{level.sp}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{level.adena}</td>
                <td className="border border-gray-300 px-4 py-2">{level.requirements}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{level.members}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h1 className="text-3xl font-bold text-center mt-12 mb-8">Estructura del Clan en Lineage 2</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300 bg-gray-900">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Nivel del Clan</th>
              <th className="border border-gray-300 px-4 py-2">Miembros</th>
              <th className="border border-gray-300 px-4 py-2">Academia</th>
              <th className="border border-gray-300 px-4 py-2">1er Royal Guard</th>
              <th className="border border-gray-300 px-4 py-2">2do Royal Guard</th>
              <th className="border border-gray-300 px-4 py-2">1er Order of Knights</th>
              <th className="border border-gray-300 px-4 py-2">2do Order of Knights</th>
              <th className="border border-gray-300 px-4 py-2">3er Order of Knights</th>
              <th className="border border-gray-300 px-4 py-2">4to Order of Knights</th>
              <th className="border border-gray-300 px-4 py-2">Miembros Máximos</th>
            </tr>
          </thead>
          <tbody>
            {structure.map((struc) => (
              <tr key={struc.level}>
                <td className="border border-gray-300 px-4 py-2 text-center">{struc.level}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{struc.members}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{struc.academy}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{struc.royalGuard1}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{struc.royalGuard2}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{struc.order1}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{struc.order2}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{struc.order3}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{struc.order4}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{struc.maxMembers}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClanLevels;
