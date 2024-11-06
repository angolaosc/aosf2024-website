import { i18n } from '@/translate/i18n';
import Image from 'next/image';
interface EventTopics {
  titulo: string;
  foto: string;
  tipo: string;
  orador: string;
  descricaoOrador: string;
}

const Topics: EventTopics[]= i18n.t('section_3.topics', {returnObjects: true});

const EventTopics = () => {
  return (
    <div className="font-poppins p-4 bg-background-page mt-10">
      <div className="text-center mb-8">
        <div className='flex flex-row items-center  gap-8 justify-center'>
          <hr className=' flex-1  my-4 border-t border-custom-color' />
          <h1 className="text-3xl font-bold">{i18n.t('section_3.title')}</h1>
          <hr className='flex-1 my-2 border-t border-custom-color'/>
        </div>
        
        <h2 className="text-xl text-gray-600 mt-4">{i18n.t('section_3.description')}</h2>
      </div>

      <div className='m-[100px]'>
        <div className="flex flex-wrap gap-8 justify-center">
        {
          Topics.map((topic, index) => (
            <div key={index} className="relative w-[421px] h-auto bg-custom-gradient rounded-lg p-5 text-white rounded-tl-[23px] rounded-tr-[23px] rounded-br-none rounded-bl-none border-t border-r border-l border-b-0 border-solid border-custom-color flex flex-col">
              
              <div className="text-[20px] font-semibold flex-grow">{topic.titulo}</div>
              <div className={`flex items-center justify-center p-4 w-[86px] h-[25px] rounded-[52px] mt-4 ${topic.tipo == 'Workshop' ? 'bg-workshop-color' : 'bg-palestra-color'}`}>
                {topic.tipo}
              </div>
              <hr className='my-4 border-t border-custom-color' />
              
              <div className='flex flex-row items-center space-x-4'>
                <Image src={topic.foto} alt={''} width={69} height={69} className='rounded'/>
                
                <div className='flex flex-col'>
                  <div className="text-[20px] text-white-400 font-bold">{topic.orador}</div>
                  <div className="text-[14px] text-[#557880]">{topic.descricaoOrador}</div>
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
