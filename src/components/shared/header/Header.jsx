import React from 'react';
import './header.css';
// import MainMenuAuthorized from '../main-menu-authorized/MainMenuAuthorized';
import MainMenuUnauthorized from '../main-menu-unauthorized/MainMenuUnauthorized.jsx';
import logo from '../../../images/svg/home-page/logo.svg';
export default function Header() {
  return (
    <header className='header'>
      <div className='wrapper wrapper-flex'>
        <img src={logo} alt='' className='authorized-header__logo' />
        {/* <MainMenuAuthorized /> */}
        <MainMenuUnauthorized/>
      </div>
    </header>
  );
}
