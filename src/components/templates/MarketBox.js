import React from 'react';
import styles from '../../styles/MarketBox.module.css'
import Toolbar from './Toolbar';
import Market from './Market';

const MarketBox = () => {
    return (
        <div className={`${styles.containerF} container container-xxl border-light bg-white mt-3`}>
            <Toolbar />
            <Market />

        </div>
    );
};

export default MarketBox;