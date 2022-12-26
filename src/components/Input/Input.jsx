import React from 'react';
import './Input.scss';

export default function Input({ placeholder, value, type }) {
    return <input className='custom-input' placeholder={placeholder} defaultValue={value} type={type ? type : "text"} />
}
