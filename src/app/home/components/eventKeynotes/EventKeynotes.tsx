import { i18n } from '@/translate/i18n';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

interface Keynote {
  Img: string;
  Nome: string;
  Descricao: string;
}

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator = ({ currentStep, totalSteps }: StepIndicatorProps) => {
  return (
    <div className="flex justify-center gap-2 mt-4">
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          className={`w-4 h-4 rounded-full ${index == currentStep ? 'bg-blue-500' : 'bg-gray-300'}`}
        />
      ))}
    </div>
  );
};

const keynotes: Keynote[] = i18n.t('keynotes', { returnObjects: true });

export function EventKeynotes() {
  return (
    <div className="font-poppins p-4 mt-[0px] ">
      <div className="text-center mb-8" id="keynotes">
        <h1 className="text-3xl font-bold bg-keynoteSpeakers-gradient">Keynote Speakers</h1>
        <h2 className="text-base sm:text-xl text-gray-600 mt-4">
          {i18n.t('keynotesDescription')}
        </h2>
      </div>

      {/* Versão Mobile: Carousel */}
      <div className="sm:hidden">
        <Swiper
          spaceBetween={16}
          slidesPerView={1.2}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }}
          className="py-6"
        >
          {keynotes.map((keynote, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-gradient-to-r from-[#1F2937] to-[#4B5563] rounded-lg p-6 text-white shadow-lg flex flex-col items-center mt-[40px]">
                <div className="absolute -top-10 w-[108px] h-[108px] bg-keynoteSpeakers-gradient rounded-full flex items-center justify-center">
                  <Image
                    src={keynote.Img}
                    alt={keynote.Nome}
                    width={96}
                    height={96}
                    className="w-[96px] h-[96px] rounded-full object-cover"
                  />
                </div>
                <div className="mt-[60px] text-center">
                  <h2 className="text-lg font-bold">{keynote.Nome}</h2>
                  <p className="text-sm text-gray-300 mt-2">{keynote.Descricao}</p>
                </div>
              </div>
              {/* StepIndicator aparece apenas no mobile */}
              <StepIndicator currentStep={index} totalSteps={keynotes.length} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Versão Desktop: Grade */}
      <div className="hidden sm:flex flex-wrap justify-center gap-8 mt-20">
        {keynotes.map((keynote, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-r from-[#1F2937] to-[#4B5563] rounded-lg p-6 text-white shadow-lg w-[300px] flex flex-col items-center"
          >
            <div className="absolute -top-10 w-[108px] h-[108px] bg-keynoteSpeakers-gradient rounded-full flex items-center justify-center">
              <Image
                src={keynote.Img}
                alt={keynote.Nome}
                width={96}
                height={96}
                className="w-[96px] h-[96px] rounded-full object-cover"
              />
            </div>
            <div className="mt-[60px] text-center">
              <h2 className="text-lg font-bold">{keynote.Nome}</h2>
              <p className="text-sm text-gray-300 mt-2">{keynote.Descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
  