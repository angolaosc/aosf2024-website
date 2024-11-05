import styles from './styles.module.css';
import Image from 'next/image';
const CompaniesSection = () => {
  const { photos } = styles;
  return (
    <div className={photos}>
      <Image src="/typo3.png" width={182} height={150} alt={''}/>  
      
    </div>
  );
};

export default CompaniesSection;
