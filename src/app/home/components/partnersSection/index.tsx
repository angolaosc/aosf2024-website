'use client';
import Image from 'next/image';
import { i18n } from '@/translate/i18n';

const PartnersSection = () => {
  return (
    <div className="mt-16 mb-16 flex flex-col items-center  px-4">

      <div className="flex items-center w-full max-w-6xl">
        <hr className="flex-1 border-gray-700" />
        <h3 className="mx-4 text-lg font-bold text-orange-600">{i18n.t('section_5.title')}</h3>
        <hr className="flex-1 border-gray-700" />
      </div>


      <div className="mt-8 w-full max-w-6xl">
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-200 text-center mb-4">Platinum</h3>
          <div className="flex justify-center">
            <div className="flex items-center justify-center bg-[#F7F7F7] rounded-lg p-4 shadow-md w-36 h-16">
              <Image
                src="/KINSARI_RGB 1.svg"
                alt="Kinsari"
                width={140}
                height={60}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-200 text-center mb-4">Silver</h3>
          <div className="flex justify-center flex-wrap gap-4">
            <div className="flex items-center justify-center bg-[#C0C0C0] rounded-lg p-4 shadow-md w-36 h-16">
              <Image
                src="/angolaCables.png"
                alt="Angola Cables"
                width={140}
                height={60}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center bg-[#C0C0C0] rounded-lg p-4 shadow-md w-36 h-16">
              <Image
                src="/CHAOSS AFRICA LOGO.svg"
                alt="CHAOSS Africa"
                width={140}
                height={60}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center bg-[#C0C0C0] rounded-lg p-4 shadow-md w-36 h-16">
              <Image
                src="/typo3.png"
                alt="TYPO3"
                width={140}
                height={60}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
