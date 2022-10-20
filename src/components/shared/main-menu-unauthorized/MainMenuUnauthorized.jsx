import React from 'react';
import './mainMenuUnauthorized.css';

export default function MainMenuAuthorized() {
  return (
    <nav>
      <ul className='main-menu-authorized'>
        <li className='main-menu-authorized__item'>
          <a href='/' className='main-menu-authorized__link'>
            Регистрация
          </a>
        </li>
        <li className='main-menu-authorized__item'>
          <a
            href='/'
            className='main-menu-authorized__link main-menu-authorized__link_bg'
          >
            Войти
          </a>
        </li>
      </ul>
    </nav>
  );
}
