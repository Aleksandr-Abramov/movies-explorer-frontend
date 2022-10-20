import React from 'react';
import './mainMenuAuthorized.css';

export default function MainMenuUnauthorized() {
  return (
      <nav>
      <ul className='main-menu-unauthorized'>
        <li className='main-menu-unauthorized__item'>
          <a href='/' className='main-menu-unauthorized__link'>
            Фильмы
          </a>
        </li>
        <li className='main-menu-unauthorized__item'>
          <a href='/' className='main-menu-unauthorized__link '>
            Сохранённые фильмы
          </a>
        </li>
        <li className='main-menu-unauthorized__item'>
          <a href='/' className='main-menu-unauthorized__link  main-menu-unauthorized__link_icon'>
            Аккаунт
          </a>
        </li>
      </ul>
    </nav>
    
  );
}
