import React from 'react';
import './mainMenuUnauthorized.css';
import { Link } from 'react-router-dom'; 

export default function MainMenuUnauthorized({children}) {
  return (
    <nav>
      <ul className='main-menu-unauthorized'>
        <li className='main-menu-unauthorized__item'>
          <Link  to='/signup' className='main-menu-unauthorized__link'>Регистрация</Link>
        </li>
        <li className='main-menu-unauthorized__item'>
          <Link  to='/signin' className='main-menu-unauthorized__link main-menu-unauthorized__link_bg'>Войти</Link>
        </li>
      </ul>
    </nav>
  );
}
