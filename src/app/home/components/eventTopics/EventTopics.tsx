import { i18n } from '@/translate/i18n';
import Image from 'next/image';

interface EventTopics {
  titulo: string;
  foto: string;
  tipo: string;
  orador: string;
  descricaoOrador: string;
}

const Topics: EventTopics[] = i18n.t('section_3.topics', { returnObjects: true });

const EventTopics = () => {
  
  return (
    <div className="font-poppins p-4 bg-background-page ">
      <div className="text-center mb-8"id="topics">
        <div className="flex flex-row items-center gap-4 sm:gap-8 justify-center">
          <hr className="flex-1 my-2 border-t border-custom-color" />
          <h1 className="text-2xl sm:text-3xl font-bold" >{i18n.t('section_3.title')}</h1>
          <hr className="flex-1 my-2 border-t border-custom-color" />
        </div>
        
        <div className="text-center">
          <h2 className="text-base sm:text-xl text-gray-600 mt-4">{i18n.t('section_3.description')}</h2>
          <div className="flex justify-center items-center gap-6 bg-keynoteSpeakers-gradient w-[200px] h-[40px] rounded-[30px] mx-auto mt-4">
            <a href={'https://aosfest2024.sessionize.com/schedule'} className="text-white">Ver Agenda</a>
          </div>
        </div>

        
      </div>

      <div className="m-4 sm:m-[60px]">
        <div className="flex flex-wrap gap-6 sm:gap-8 justify-center">
          {
            Topics.map((topic, index) => ( 
              <div key={index} className="relative w-full sm:w-[421px] h-auto bg-custom-gradient rounded-lg p-5 text-white rounded-tl-[23px] rounded-tr-[23px] rounded-br-none rounded-bl-none border-t border-r border-l border-b-0 border-solid border-custom-color flex flex-col">
                
                <div className="text-lg sm:text-[20px] font-semibold flex-grow">{topic.titulo}</div>
                <div className={`flex items-center justify-center p-2 sm:p-4 w-[90px] sm:w-[106px] h-[20px] sm:h-[25px] rounded-[52px] mt-3 sm:mt-4 ${topic.tipo === 'BOOTCAMP' ? 'bg-workshop-color' : 'bg-palestra-color'}`}>
                  {topic.tipo}
                </div>
                <hr className="my-3 sm:my-4 border-t border-custom-color" />
                
                <div className="flex flex-row items-center space-x-3 sm:space-x-4">
                  <Image src={topic.foto} alt={topic.orador} width={55} height={55} className="rounded-full object-cover w-[55px] h-[55px]" />
                  
                  <div className="flex flex-col">
                    <div className="text-base sm:text-[20px] text-white font-bold">{topic.orador}</div>
                    <div className="text-sm sm:text-[14px] text-[#557880]">{topic.descricaoOrador}</div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default EventTopics;
