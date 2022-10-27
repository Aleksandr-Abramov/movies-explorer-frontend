import React from 'react';
import './mainMenuUnauthorized.css';
import { Link } from 'react-router-dom'; 

export default function MainMenuAuthorized({children}) {
  return (
    <nav>
      <ul className='main-menu-authorized'>
        <li className='main-menu-authorized__item'>
          {children[0]}
          {/* <Link  to='/signup' className='main-menu-authorized__link'>Регистрация</Link> */}
          {/* <a href='/signup' className='main-menu-authorized__link'>
            Регистрация
          </a> */}
        </li>
        <li className='main-menu-authorized__item'>
          {children[1]}
          {/* <Link  to='/signin' className='main-menu-authorized__link main-menu-authorized__link_bg'>Войти</Link> */}
          {/* <a
            href='/signin'
            className='main-menu-authorized__link main-menu-authorized__link_bg'
          >
            Войти
          </a> */}
        </li>
      </ul>
    </nav>
  );
}
