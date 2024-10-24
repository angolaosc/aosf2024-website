'use-client';
import styles from './styles.module.css';
import Image from 'next/image';
import { i18n } from '@/translate/i18n';
const PartnersSection = () => {
  const { container, sponsors, tpatrocinio, barra, platinum, gold, silver, logo } = styles;

  return (
    <div className={container} id="partnersSection">
      <div className={barra}>
        <hr />
        <h3 >{i18n.t('section_5.title')}</h3>
        <hr />
      </div>
      <div className={sponsors}>
      
        <div className={platinum}>
          <h3 className={tpatrocinio}>Platinum</h3>
          <div className={logo}>
            <Image src="/KINSARI_RGB 1.svg" className="logo Kinsari" alt={''} width={140} height={60}/>
          </div>
        </div>

        {
          /*
            <div className={gold}>
              <h3 className={tpatrocinio}>Gold</h3>
              <div className={logo}>
                
              </div>
            </div>
          */
        }
        
        
        <div className={silver}>
          <h3 className={tpatrocinio}>Silver</h3>
          <div className={logo}>
            <Image src="/typo3.png" className="logo Typo3" alt={''} width={140} height={60}/>
          </div>
        </div>
      
      </div>
      
    </div>
  );
};

export default PartnersSection;
