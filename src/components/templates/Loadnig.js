import React from 'react';
import loading from '../../assets/loading.gif';
import styles from '../../styles/Loading.module.css'
const Loadnig = () => {
    return (
        <div className={styles.gifContainer}>
            <img src={loading} alt="loading" className={styles.loadnigGif}/>
        </div>
    );
};

export default Loadnig;