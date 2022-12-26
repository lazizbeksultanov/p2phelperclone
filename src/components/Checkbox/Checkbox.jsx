import React from 'react';
import './Checkbox.scss';

export default function Checkbox({ label, checked }) {
  return (
    <div className='checkbox'>
      <div className="checkbox__wrap">
        <input type="checkbox" defaultChecked={checked} name="check" id="check" />
        <div className="checkbox__input">
          <span className="checkbox__no-active"></span>
          <span className="checkbox__active">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 16 16"
            >
              <rect width="16" height="16" fill="#A6FF02" rx="4"></rect>
              <path
                stroke="#000"
                strokeLinecap="round"
                strokeWidth="2"
                d="M3.5 7.5l3 3.5L13 5"
              ></path>
            </svg>
          </span>
        </div>
        {
          label ?
            <label className='checkbox__label' htmlFor="check1">
              {label}
            </label>
            :
            null
        }
      </div>
    </div>
  )
}
