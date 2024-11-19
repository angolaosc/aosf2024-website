  import { i18n } from '@/translate/i18n';
  import Image from 'next/image';

  interface Keynote {
    Img: string;
    Nome: string;
    Descricao: string;
  }

  const keynotes: Keynote[] = i18n.t('keynotes', { returnObjects: true });

  export function EventKeynotes() {
    return (
      <div className="font-poppins p-4 bg-background-page mt-10">
        <div className="text-center mb-8" id="keynotes">
          <div className="flex flex-row items-center gap-4 sm:gap-8 justify-center">
            
            <h1 className="text-2xl sm:text-3xl font-bold">Keynote Speakers</h1>
            
          </div>
          <div className="flex justify-center gap-8">
            {keynotes.map((keynote, index) => (
              <div key={index} className="flex flex-col items-center mt-[35px] bg-white rounded-[10px] bg-wheat">
                <Image 
                  src="/molduraKeynote.png" 
                  alt={keynote.Nome} 
                  width={300} 
                  height={200} 
                  className="rounded-xs[15px]"
                />
                <Image 
                  src={keynote.Img}
                  alt={keynote.Nome} 
                  width={108} 
                  height={108} 
                  className="w-[108px] h-[108px] rounded-full object-cover -mt-[50px]"
                />
                
                <h2 className="text-lg font-semibold mt-4">{keynote.Nome}</h2>
                <p className="text-sm text-gray-600 mt-2">{keynote.Descricao}</p>
                <br  className='mt-[30px]'/>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
