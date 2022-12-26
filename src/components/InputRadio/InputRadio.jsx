import React from 'react';
import './InputRadio.scss';

export default function InputRadio({ label, name,checked }) {
  return (
    <div className='radio'>
      <div className="radio__wrap">
        <input defaultChecked={checked} type="radio" name={name} id={name} />
        <div className="radio__input">
          <span className="radio__no-active">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 16 16"
            >
              <circle cx="8" cy="8" r="8" fill="url(#paint0_linear_23_875)"></circle>
              <circle className='white' cx="8" cy="8" r="5.5" stroke="#5F5F5F"></circle>
              <circle className='white' cx="8" cy="8" r="5.5" stroke="#5F5F5F"></circle>
              <defs>
                <linearGradient
                  id="paint0_linear_23_875"
                  x1="7.525"
                  x2="7.525"
                  y1="0"
                  y2="16"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.009" stopColor="#37384A"></stop>
                  <stop offset="1" stopColor="#1C1C21"></stop>
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="radio__active">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 16 16"
            >
              <circle cx="8" cy="8" r="8" fill="#A6FF02"></circle>
              <circle
                cx="8"
                cy="8"
                r="5.5"
                fill="#A6FF02"
                stroke="url(#paint0_linear_23_762)"
              ></circle>
              <defs>
                <linearGradient
                  id="paint0_linear_23_762"
                  x1="7.644"
                  x2="7.644"
                  y1="2"
                  y2="14"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.009" stopColor="#37384A"></stop>
                  <stop offset="1" stopColor="#1C1C21"></stop>
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
        {
          label ?
            <label className='radio__label' htmlFor={name}>
              {label}
            </label>
            :
            null
        }
      </div>
    </div>
  )
}
