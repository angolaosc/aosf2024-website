'use client';
import Image from 'next/image';
import { i18n } from '@/translate/i18n';

const PartnersSection = () => {
  return (
    <div className="mt-16 mb-16 flex flex-col items-center  px-4">
      <h3 className="mx-4 text-lg font-bold text-orange-600">{i18n.t('section_5.title')}</h3>
      

      <div className="mt-2 w-full max-w-6xl">
        <div className="flex items-center w-full max-w-6xl">
          <hr className="flex-1 border-gray-700" />
          <h3 className="mx-4 text-lg font-bold text-gray-700">Platinum Sponsor</h3>
          <hr className="flex-1 border-gray-700" />
        </div>
        <div className="mb-8">
          <div className="flex justify-center">
            <div className="flex items-center justify-center  rounded-lg p-4 shadow-md w-36 h-16">
              <Image
                src="/sponsors/KINSARI_RGB 1.svg"
                alt="Kinsari"
                width={190}
                height={60}
                className="object-contain"
              />
            </div>
            
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center w-full max-w-6xl">
            <hr className="flex-1 border-gray-700" />
            <h3 className="mx-4 text-lg font-bold text-gray-700">Silver Sponsors</h3>
            <hr className="flex-1 border-gray-700" />
          </div>
          <div className="flex justify-center flex-wrap gap-4">
            <div className="flex items-center justify-center  rounded-lg p-4 shadow-md w-36 h-16">
              <Image
                src="/sponsors/angolaCables.png"
                alt="Angola Cables"
                width={140}
                height={60}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center  rounded-lg p-4 shadow-md w-36 h-16">
              <Image
                src="/sponsors/CHAOSS AFRICA LOGO.svg"
                alt="CHAOSS Africa"
                width={140}
                height={60}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center  rounded-lg p-4 shadow-md w-36 h-16">
              <Image
                src="/sponsors/typo3.png"
                alt="TYPO3"
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center  rounded-lg p-4 shadow-md w-36 h-16">
              <Image
                src="/sponsors/etic.png"
                alt="Etic"
                width={100}
                height={40}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center w-full max-w-6xl">
            <hr className="flex-1 border-gray-700" />
            <h3 className="mx-4 text-lg font-bold text-gray-700">Communities</h3>
            <hr className="flex-1 border-gray-700" />
          </div>
          <div className="flex justify-center flex-wrap gap-4 mt-4">
            <div className="flex items-center justify-center  rounded-lg p-4 shadow-md w-36 h-16">
              <Image
                src="/communities/cdagirls.png"
                alt="CDA Girls"
                width={260}
                height={150}
                className="object-contain"
              />
            </div>

            <div className="flex items-center justify-center  rounded-lg p-4 shadow-md w-36 h-16">
              <Image
                src="/communities/nfl.png"
                alt="CDA Girls"
                width={160}
                height={90}
                className="object-contain"
              />
            </div>

            <div className="flex items-center justify-center  rounded-lg p-4 shadow-md w-36 h-16">
              <Image
                src="/communities/Usergroups-logo_main.png"
                alt="CDA Girls"
                width={160}
                height={90}
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
