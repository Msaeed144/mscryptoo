import React from 'react';
import { fixNum , deletPayment ,addPaymentToEnd , persianPayment} from '../../tools/functions';

const TableRow = ({coin}) => {
    return (
        <tr>
                <td>
                    <div className={`d-flex align-items-center`}>
                    <div>
                        <img src={coin.baseAsset_svg_icon} alt="coin" />
                    </div>
                    <div>
                    <div>
                        <h5>{deletPayment(coin.symbol)}<span className={`text-secondary`}>{addPaymentToEnd(coin.symbol)} </span></h5>
                    </div>
                    <div className={`d-flex`}>
                    <p>{coin.faBaseAsset}</p>
                    <p>/ {persianPayment(coin.symbol)}</p>
                    </div>
                    </div>
                    </div>
                </td>
                <td>
                    <h5>{fixNum(coin.stats.lastPrice)}</h5>
                </td>
                <td>
                    <div className='d-flex'>
                    <h6 dir='ltr'>{coin.stats['24h_ch']}</h6>
                    </div>
                </td>
                <td>
                    <h5>{fixNum(coin.stats['24h_volume'])}</h5>
                </td>
                <td>
                    <div className='d-flex'>
                    <h6 dir='ltr'>{coin.stats['7d_ch']}</h6>
                    </div>
                </td>
            </tr>
    );
};

export default TableRow;