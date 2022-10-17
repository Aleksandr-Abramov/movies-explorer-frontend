import React from 'react';
import './header.css';
import NavTab from './navTab/NavTab';
import menuLogo from '../../../images/svg/home-page/logo.svg';


export default function Header() {
  return (
    <header className='home-page-header'>
    <nav className='home-page-nav home-page-header__home-page-nav'>
          <img src={menuLogo} alt='logo' />
          <div className='main-menu'>
            <a className='main-menu__link' href='/'>
              Регистрация
            </a>
            <a className='main-menu__link' href='/'>
              Войти
            </a>
          </div>
        </nav>
        <h1 className='main-page-title home-page-header__main-page-title'>Учебный проект студента факультета Веб-разработки.</h1>
      <NavTab />
    </header>
  );
}
