'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { FaSun, FaMoon } from 'react-icons/fa';

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
  const [expandedRooms, setExpandedRooms] = useState<number[]>([]); // Minimizadas por padrão
  const [isDarkTheme, setIsDarkTheme] = useState(false);

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
    setExpandedRooms((prev) =>
      prev.includes(roomId) ? prev.filter((id) => id !== roomId) : [...prev, roomId]
    );
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const downloadAgendaAsPDF = async () => {
    const element = document.getElementById('agenda-content');
    if (element) {
      // Expande temporariamente todas as salas
      const originalExpandedRooms = [...expandedRooms];
      setExpandedRooms(agenda.flatMap((day) => day.rooms.map((room) => room.id))); // Expande todas as salas

      await new Promise((resolve) => setTimeout(resolve, 500)); // Aguarda renderização

      const canvas = await html2canvas(element);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('agenda-evento.pdf');

      // Restaura o estado original
      setExpandedRooms(originalExpandedRooms);
    }
  };

  return (
    <div
      className={`font-poppins p-6 min-h-screen ${
        isDarkTheme ? 'bg-background-page text-white' : 'bg-gray-100 text-black'
      }`}
    >
      <header className="text-center mb-8">
        {isDarkTheme && (
          <Image
            src="/aosfest.png"
            alt="Logo do Evento"
            width={200}
            height={200}
            className="mx-auto"
          />
        )}
        <div className="mt-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-custom-color">
            Agenda do Evento
          </h1>
          <p className="mt-2 text-barra-color">
            Confira os horários e sessões do evento.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={downloadAgendaAsPDF}
              className="px-6 py-2 bg-[#00B0F9] text-white rounded-md shadow hover:bg-[#0078c7] transition"
            >
              Baixar Agenda em PDF
            </button>
            <button
              onClick={toggleTheme}
              className="p-3 bg-gray-600 text-white rounded-full shadow hover:bg-gray-500 transition"
              title={isDarkTheme ? 'Tema Claro' : 'Tema Escuro'}
            >
              {isDarkTheme ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>
        </div>
      </header>

      <div id="agenda-content">
        {agenda.map((day, dayIndex) => (
          <section key={dayIndex} className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-custom-color mb-6">
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
                  className={`w-[350px] ${
                    isDarkTheme ? 'bg-custom-dark' : 'bg-white'
                  } rounded-lg p-5 shadow-lg border-l-4 border-[#00B0F9]`}
                >
                  <h3 className="text-lg font-semibold text-workshop-color mb-4">
                    {room.name}
                  </h3>

                  {expandedRooms.includes(room.id) ? (
                    room.sessions.map((session) => (
                      <div
                        key={session.id}
                        className={`${
                          isDarkTheme ? 'bg-gray-700' : 'bg-[#F0FDF4]'
                        } rounded-lg p-4 mb-4 shadow-md`}
                      >
                        <h4 className="text-lg font-bold text-palestra-color">
                          {session.title}
                        </h4>
                        <p className="text-sm mt-2">
                          {session.description || 'Descrição não disponível.'}
                        </p>
                        <div className="text-sm mt-4">
                          <strong>Início:</strong>{' '}
                          {new Date(session.startsAt).toLocaleTimeString('pt-BR', {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                          <br />
                          <strong>Fim:</strong>{' '}
                          {new Date(session.endsAt).toLocaleTimeString('pt-BR', {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className={`text-sm mt-2 text-gray-600`}>
                      <h4 className="font-bold">
                        {room.sessions[0]?.title || 'Sem sessões disponíveis'}
                      </h4>
                      <p>
                        Início:{' '}
                        {new Date(room.sessions[0]?.startsAt).toLocaleTimeString('pt-BR', {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>
                  )}

                  <button
                    onClick={() => toggleRoom(room.id)}
                    className="mt-4 text-palestra-color font-semibold"
                  >
                    {expandedRooms.includes(room.id) ? 'Ver menos' : 'Ver mais'}
                  </button>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default EventAgenda;
