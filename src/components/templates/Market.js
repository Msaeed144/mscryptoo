import React, { useContext } from "react";
import { CryptosContext } from "../../context/CryptoContextProvider";
import {v4} from 'uuid';
import TableRow from "./TableRow";

const Market = ({search}) => {
    const crypto = useContext(CryptosContext)
    const searchedCryptps = crypto.filter(crypto =>crypto.symbol.includes(search))

  return (
    <div>
      <table className="table table-striped">
      <thead>
          <tr>
            {/* <th className={`text-end`} scope="col">
              مورد علاقه
            </th> */}
            <th className={`text-end`} scope="col">
              نماد و نام ارز
            </th>
            <th className={`text-end`} scope="col">
              آخرین قیمت
            </th>
            <th className={`text-end`} scope="col">
              تغییر 24 ساعت اخیر
            </th>
            <th className={`text-end`} scope="col">
              حجم معاملات
            </th>
            <th className={`text-end`} scope="col">
              تغییرات هفته اخیر
            </th>
          </tr>
        </thead>
        <tbody>
                 {search?searchedCryptps.map(coin => <TableRow coin={coin} key={v4()} />):
                 crypto.map(coin => <TableRow coin={coin} key={v4()} />)}
                

        </tbody>
      </table>
    </div>
  );
};

export default Market;
