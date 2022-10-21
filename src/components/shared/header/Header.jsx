import React from 'react';
import './header.css';
// import MainMenuAuthorized from '../main-menu-authorized/MainMenuAuthorized';
// import MainMenuUnauthorized from '../main-menu-unauthorized/MainMenuUnauthorized.jsx';
import logo from '../../../images/svg/home-page/logo.svg';
export default function Header({children, bg}) {
  return (
    <header className='header' style={{background: bg && bg}}>
      <div className='wrapper wrapper-flex'>
        <img src={logo} alt='' className='authorized-header__logo' />
        {children}
        {/* <MainMenuAuthorized /> */}
        {/* <MainMenuUnauthorized/> */}
      </div>
    </header>
  );
}
