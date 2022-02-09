import React from 'react';
import styles from './ErrorMsg.module.scss';


const ErrorMsg = ({errorMsg}) => {
  return (
    <div className={styles.errorContainer}>
        <div className={styles.errorBox}>            
            <h2 className={styles.errorText}>{errorMsg}</h2>
        </div>
    </div>
  );
};

export default ErrorMsg;
