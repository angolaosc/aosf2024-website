'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Session {
  id: string;
  title: string;
  description: string | null;
  startsAt: string;
  endsAt: string;
  room: string;
  speakers: { id: string; name: string }[];
}

interface Room {
  id: number;
  name: string;
  sessions: Session[];
}

interface AgendaData {
  date: string;
  rooms: Room[];
}

const EventAgenda = () => {
  const [agenda, setAgenda] = useState<AgendaData[]>([]);
  const [expandedRoom, setExpandedRoom] = useState<number | null>(null);

  useEffect(() => {
    const fetchAgenda = async () => {
      try {
        const response = await fetch('https://sessionize.com/api/v2/h7th2ve1/view/GridSmart');
        const data = await response.json();
        setAgenda(data);
      } catch (error) {
        console.error('Erro ao buscar os dados da agenda:', error);
      }
    };

    fetchAgenda();
  }, []);

  const toggleRoom = (roomId: number) => {
    setExpandedRoom(expandedRoom === roomId ? null : roomId);
  };

  return (
    <div className="font-poppins p-4 bg-[#F5F5F5] min-h-screen">
      <div className="text-center mb-8" id="agenda">
        <div className="flex flex-row items-center gap-4 sm:gap-8 justify-center">
          <hr className="flex-1 my-2 border-t border-[#007B55]" />
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-600">Agenda do Evento</h1>
          <hr className="flex-1 my-2 border-t border-[#007B55]" />
        </div>
        <p className="text-gray-700 mt-2">Confira os horários e sessões do evento.</p>
      </div>

      {agenda.map((day, dayIndex) => (
        <div key={dayIndex} className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-[#007B55] mb-6">
            {new Date(day.date).toLocaleDateString('pt-BR', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </h2>

          <div className="flex flex-wrap gap-6 justify-center">
            {day.rooms.map((room) => (
              <div
                key={room.id}
                className="w-[350px] bg-white rounded-lg p-4 shadow-lg text-black"
              >
                {/* Nome da sala */}
                <h3 className="text-lg font-semibold mb-4 text-[#007B55]">{room.name}</h3>

                {/* Mostrar sempre a primeira atividade */}
                <div className="bg-gray-50 text-black rounded-lg p-4 mb-4 shadow-md">
                  <h4 className="text-lg font-bold">
                    {room.sessions[0]?.title || 'Sem atividades disponíveis.'}
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">
                    {room.sessions[0]?.description || 'Descrição não disponível.'}
                  </p>
                  <div className="text-sm text-gray-500 mt-4">
                    <span>
                      <strong>Início:</strong>{' '}
                      {room.sessions[0]?.startsAt
                        ? new Date(room.sessions[0].startsAt).toLocaleTimeString('pt-BR', {
                            hour: '2-digit',
                            minute: '2-digit',
                          })
                        : 'Não informado'}
                    </span>
                    <br />
                    <span>
                      <strong>Fim:</strong>{' '}
                      {room.sessions[0]?.endsAt
                        ? new Date(room.sessions[0].endsAt).toLocaleTimeString('pt-BR', {
                            hour: '2-digit',
                            minute: '2-digit',
                          })
                        : 'Não informado'}
                    </span>
                  </div>
                </div>

                {/* Expandir para mais atividades */}
                {expandedRoom === room.id ? (
                  <div>
                    {room.sessions.slice(1).map((session) => (
                      <div
                        key={session.id}
                        className="bg-gray-50 text-black rounded-lg p-4 mb-4 flex flex-col shadow-md"
                      >
                        <h4 className="text-lg font-bold">{session.title}</h4>
                        <p className="text-sm text-gray-600 mt-2">
                          {session.description || 'Descrição não disponível.'}
                        </p>
                        <div className="text-sm text-gray-500 mt-4">
                          <span>
                            <strong>Início:</strong>{' '}
                            {new Date(session.startsAt).toLocaleTimeString('pt-BR', {
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </span>
                          <br />
                          <span>
                            <strong>Fim:</strong>{' '}
                            {new Date(session.endsAt).toLocaleTimeString('pt-BR', {
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </span>
                        </div>
                      </div>
                    ))}
                    <button
                      onClick={() => toggleRoom(room.id)}
                      className="mt-4 text-[#007B55] font-semibold"
                    >
                      Ver menos
                    </button>
                  </div>
                ) : (
                  room.sessions.length > 1 && (
                    <button
                      onClick={() => toggleRoom(room.id)}
                      className="mt-4 text-[#007B55] font-semibold"
                    >
                      Ver mais
                    </button>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventAgenda;
