import styles from './styles.module.css';

const CompaniesSection = () => {
  const { photos } = styles;
  return (
    <div className={photos}>
      <img src="/typo3.png" width={182} height={150}/>  
      
    </div>
  );
};

export default CompaniesSection;
