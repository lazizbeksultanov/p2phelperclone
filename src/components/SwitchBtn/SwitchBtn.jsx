import React from 'react';
import "./SwitchBtn.scss";

export default function SwitchBtn({ name, label }) {
    return (
        <div className='switch'>
            <div className="switch__btn">
                <input className='switch__checkbox' type="checkbox" name={name} id={name} />
                <div className="switch__circle"></div>
                <div className="switch__bg"></div>
            </div>
            <div className="switch__label">
                <label htmlFor={name}>{label}</label>
            </div>
        </div>
    )
}
