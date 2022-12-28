import React from 'react';
import './HomeMainBottom.scss';
import {
    SwitchBtn
} from "./../ExportComponent/ExportComponent";
import { Link } from 'react-router-dom';

export default function HomeMainBottom() {
    return (
        <div className='home-main-bottom'>
            <div className="home-main-bottom__auto-update">
                <SwitchBtn name="auto" label="Автообновление таблицы" />
            </div>
            <div className="home-main-bottom__register">
                <p><Link href="/">Авторизируйтесь,</Link>чтобы видеть связки</p>
            </div>
        </div>
    )
}
