import React from 'react';

interface EventTopics {
  done: boolean;
  titulo: string;
  tempo: string;
  orador: string;
  descricaoOrador: string;
}

const topics: EventTopics[] = [
  {
    done: true,
    titulo: 'Introdução à Inteligência Artificial',
    tempo: '09:00 - 10:30 GMT + 1',
    orador: 'Dr. Maria Silva',
    descricaoOrador: 'CEO - TECHGENIUS'
  },
  {
    done: false,
    titulo: 'Introdução à Inteligência Artificial',
    tempo: '09:00 - 10:30 GMT + 1',
    orador: 'Dr. Maria Silva',
    descricaoOrador: 'CEO - TECHGENIUS'
  },
  {
    done: true,
    titulo: 'Introdução à Inteligência Artificial',
    tempo: '09:00 - 10:30 GMT + 1',
    orador: 'Dr. Maria Silva',
    descricaoOrador: 'CEO - TECHGENIUS'
  },
];

const EventTopics = () => {
  return (
    <div className="font-poppins p-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Inovação e Tendências Tecnológicas</h1>
        <h2 className="text-xl text-gray-600">Quinta-feira, 24 Dezembro - 2024</h2>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="relative w-[406px] h-[485px] bg-custom-gradient rounded-lg p-5 text-white"
          >
            <div
              className={`absolute top-5 left-5 w-32 h-10 rounded-full flex items-center justify-center text-lg font-medium text-white ${
                topic.done ? 'bg-[#00F85F] bg-opacity-35' : 'bg-[#FF1500] bg-opacity-35'
              }`}
            >
              {topic.done ? 'Realizado' : 'Cancelado'}
            </div>
            <div className="mt-20 text-2xl font-semibold">{topic.titulo}</div>
            <div className="mt-5 text-base">{topic.tempo}</div>
            <div className="mt-8 text-xl text-blue-400">{topic.orador}</div>
            <div className="text-sm text-[#557880]">{topic.descricaoOrador}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventTopics;
