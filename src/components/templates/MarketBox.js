import React, { useState } from 'react';
import styles from '../../styles/MarketBox.module.css'
import Toolbar from './Toolbar';
import Market from './Market';

const MarketBox = () => {
    const[search , setSearch] = useState('')
    const[payment , setPayment] = useState('')

    return (
        <div className={`${styles.containerF} container container-xxl border-light bg-white mt-3`}>
            <Toolbar
             search={search}
             setSearch={setSearch}
             payment={payment}
             setPayment={setPayment}
             />
            <Market search={search} payment={payment}/>

        </div>
    );
};

export default MarketBox;