import React from 'react';
import './HomeMainBottom.scss';
import {
    SwitchBtn
} from "./../ExportComponent/ExportComponent";

export default function HomeMainBottom() {
    return (
        <div className='home-main-bottom'>
            <div className="home-main-bottom__auto-update">
                <SwitchBtn name="auto" label="Автообновление таблицы" />
            </div>
            <div className="home-main-bottom__register">
                <p><a href="/">Авторизируйтесь,</a>чтобы видеть связки</p>
            </div>
        </div>
    )
}
