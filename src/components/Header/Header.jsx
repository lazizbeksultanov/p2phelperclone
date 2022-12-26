import React, {useState} from 'react';
import "./Header.scss";
import { Link } from 'react-router-dom';
import { navConfig } from './NavConfig';
import { BaseContainer } from './../ExportComponent/ExportComponent';
import { UserIcon, LogoIcon } from './../../Icons/ExportIcons';

export default function Header() {
  const [visible, setVisible] = useState(false);
  
  return (
    <header className='header'>
      <BaseContainer className='header__wrap'>
        <div className='header__logo'>
          <LogoIcon />
        </div>
        <nav className={visible ? 'header__nav active' : "header__nav"}>
          <ul className='header__list'>
            <div className="header__close-icon">
              <svg onClick={() => setVisible(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            {navConfig.map((item, index) => <NavItem {...item} key={index} />)}
            <button className='header__nav-btn'>
              <span>
                <UserIcon />
              </span>
              Личный кабинет
            </button>
          </ul>
          {visible ? <div onClick={() => setVisible(false)} className="header__backdrop"></div> : ""}
        </nav>
        <button className='header__nav-btn'>
          <span>
            <UserIcon />
          </span>
          Личный кабинет
        </button>
        <button onClick={() => setVisible(true)} className='header__nav-menu'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </BaseContainer>
    </header>
  )
}

const NavItem = ({ path, label }) => {
  return (
    <li className='header__list-item'>
      <Link to={path}>{label}</Link>
    </li>
  );
}
