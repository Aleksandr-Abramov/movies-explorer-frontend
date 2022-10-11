import React from 'react';
import headerLogo from '../../images/svg/logo.svg';
// import lendingLOgo from '../../images/svg/landing-logo.png';
import './header.css';
function Header() {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <img src={headerLogo} alt='heade-logo' />
        <div className='header__btn-container'>
          <a href='/'  className='header__signup'>
            Регистрация
          </a>
          <a href='/' className='header__signout'>
            Войти
          </a>
        </div>
      </nav>
      <h1 className="header__title">Учебный проект студента факультета Веб-разработки.</h1>
      <ul className="header__list">
        <li className="header__list-item"><a href="/" className="header__link">О проекте</a></li>
        <li className="header__list-item"><a href="/" className="header__link">Технологии</a></li>
        <li className="header__list-item"><a href="/" className="header__link">Студент</a></li>
      </ul>
    </header>
  );
}
export default Header;
