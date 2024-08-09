
interface EventTopics{
  done: boolean;
  titulo: string;
  tempo: string;
  orador: string;
  descricaoOrador: string;
}

const topics: EventTopics[] = [
  {
    done: true,
    titulo: 'Introdução a inteligência artificial',
    tempo: '09:00 - 10:30 GMT + 1',
    orador: 'Dr. Maria Silva',
    descricaoOrador: 'CEO - TECHGENIUS'
  },
  {
    done: false,
    titulo: 'Introdução a inteligência artificial',
    tempo: '09:00 - 10:30 GMT + 1',
    orador: 'Dr. Maria Silva',
    descricaoOrador: 'CEO - TECHGENIUS'
  },
  {
    done: true,
    titulo: 'Introdução a inteligência artificial',
    tempo: '09:00 - 10:30 GMT + 1',
    orador: 'Dr. Maria Silva',
    descricaoOrador: 'CEO - TECHGENIUS'
  },

];

const EventTopics = () => {

 return (
        <section className="flex justify-center h-screen "> 
        <h1 className="text-center bg-white">Participe nos eventos</h1>
        <div>
          <h3>Inovação e Tendências Tecnológicaa</h3>
          <h3>Sexta-feira, 30 de Novembro - 2024</h3> 
        </div>
        
      </section>
  );
};

export default EventTopics;
