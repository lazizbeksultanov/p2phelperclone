import React from 'react';
import './Footer.scss';
import { BaseContainer } from './../ExportComponent/ExportComponent';

export default function Footer() {
  return (
    <footer className='footer'>
      <BaseContainer className='footer__wrap'>
        <div className='footer__left'>
          <a href='#' className='footer__text'>
            Политика конфиденциальности
          </a>
          <a href='#' className='footer__text'>
            Пользовательское соглашение
          </a>
        </div>
        <div className='footer__right'>
          <span className='copyright'>&copy; 2022, P2PHelper</span>
        </div>
      </BaseContainer>
    </footer>
  )
}
