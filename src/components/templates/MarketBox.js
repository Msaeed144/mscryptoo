import React from 'react';
import { useContext } from 'react';
import { CryptosContext } from "../../context/CryptoContextProvider";
import styles from '../../styles/MarketBox.module.css'
import Toolbar from './Toolbar';
import Market from './Market';

const MarketBox = () => {
    const crypto = useContext(CryptosContext)

    return (
        <div className={`${styles.containerF} container container-xxl border-light bg-white mt-3`}>
            <Toolbar />
            <Market crypto={crypto}/>

        </div>
    );
};

export default MarketBox;