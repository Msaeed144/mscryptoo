import React from 'react';
import styles from '../../styles/Toolbar.module.css'

const Toolbar = () => {
    return (
        <div className={`d-flex justify-content-between align-items-center`}>
            <div className={`${styles.searchBox} m-2`}>
                <div>
                    <label htmlFor="inp" className={styles.inp}>
                    <input className={styles.search} type="text" id="inp" placeholder="&nbsp;"/>
                    <span className={styles.label}>دنبال چی می گردی؟</span>
                    <span className={styles.focusBg}></span>
                    </label>
                </div>   
            </div>
            <div className={`m-2 d-flex`}>
            <div className={`mx-1`}>
                <select className={`p-1`}>
                    <option value={""}>انتخاب کنید</option>
                    <option value={"maxprofit"}>بیشترین سود</option>
                    <option value={"maxprice"}>بیشترین قیمت</option>
                    <option value={"maxdamage"}>بیشترین ضرر</option>
                </select>
            </div>
            <div className={`mx-1`}>
                <select className={`p-1`}>
                    <option value={""}>انتخاب کنید</option>
                    <option value={"maxprofit"}>دلار</option>
                    <option value={"maxprice"}>تومان</option>
                    <option value={"maxdamage"}>بیت کوین</option>
                </select>
            </div>
            </div>
        </div>
    );
};

export default Toolbar;