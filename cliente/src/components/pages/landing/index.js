import React from 'react';
import meliLogo from '../../../assets/Logo_ML@2x.png.png';
import styles from './Landing.module.scss';

const Landing = () => {
  return (
  <div className={styles.logoContainer}>
      <div className={styles.logoBox}>
        <img src={meliLogo} alt="Mercadolibre Home" className={styles.logo}/>
      </div>
  </div>
  );
};

export default Landing;
