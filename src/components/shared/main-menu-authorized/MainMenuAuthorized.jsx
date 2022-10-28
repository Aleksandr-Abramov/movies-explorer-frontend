import React from 'react';
import './mainMenuAuthorized.css';
import { NavLink } from 'react-router-dom';

export default function MainMenuAuthorized() {
  return (
    <nav>
      <ul className='main-menu-authorized'>
        <li className='main-menu-authorized__item'>
          <NavLink to='/movies' activeClassName='main-menu-authorized__link_active' className='main-menu-authorized__link'>
            Фильмы
          </NavLink>
        </li>
        <li className='main-menu-authorized__item'>
          <NavLink to='/saved-movies' activeClassName='main-menu-authorized__link_active' className='main-menu-authorized__link'>
            Сохранённые фильмы
          </NavLink>
        </li>
        <li className='main-menu-authorized__item'>
          <NavLink to='/profile' activeClassName='main-menu-authorized__link_active' className='main-menu-authorized__link main-menu-authorized__link_icon'>
            Аккаунт
          </NavLink>
        </li>
      </ul>
      <button
        type='button'
        className='authorized-header__btn-hamburger'
      ></button>
    </nav>
  );
}
