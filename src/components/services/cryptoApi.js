import axios from 'axios'

const BASE_URL = 'https://api.wallex.ir/v1/markets'

const getCrypto = async () => {
    const response = await axios.get(BASE_URL)
    
    const oData = response.data.result.symbols
    const result = Object.values(oData)
    const data = result.sort((a, b) => {
        if (a.quoteAsset === 'TMN' && b.quoteAsset !== 'TMN') return -1;
        if (a.quoteAsset !== 'TMN' && b.quoteAsset === 'TMN') return 1;
        if (a.quoteAsset === 'USDT' && b.quoteAsset !== 'USDT') return -1;
        if (a.quoteAsset !== 'USDT' && b.quoteAsset === 'USDT') return 1;
        return 0;
      });
    return data
}
export {getCrypto}