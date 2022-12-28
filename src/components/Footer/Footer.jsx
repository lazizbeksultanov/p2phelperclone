import React from 'react';
import './Footer.scss';
import { BaseContainer } from './../ExportComponent/ExportComponent';
import SVGsprite from './../../Icons/SVGsprite';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='footer'>
      <BaseContainer className='footer__wrap'>
        <div className='footer__left'>
          <Link rel="noreferrer" href='#' className='footer__text'>
            Политика конфиденциальности
          </ Link>
          <Link rel="noreferrer" href='#' className='footer__text'>
            Пользовательское соглашение
          </ Link>
        </div>
        <div className='footer__right'>
          <span className='copyright'>&copy; 2022, P2PHelper</span>
        </div>
      </BaseContainer>
      <SVGsprite />
    </footer>
  )
}
