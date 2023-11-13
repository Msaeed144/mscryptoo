import React from 'react';
import { createContext , useState , useEffect } from 'react';

import { getCrypto } from '../tools/functions';

export const CryptosContext = createContext()

const CryptoContextProvider = ({children}) => {
    const [ cryptos , setCryptos ] = useState([])
    useEffect(()=>{
        const fetchAPI = async () => {
            setCryptos(await getCrypto())
        }
        fetchAPI()
    },[])
    return (
        <CryptosContext.Provider value={cryptos}>
            {children}
        </CryptosContext.Provider>
    );
};

export default CryptoContextProvider;