import React from 'react';
import './authorized-header.css';
import logo from '../../../images/svg/home-page/logo.svg';

export default function AuthorizedHeader() {
  return (
    <header className='authorized-header'>

  
      <img src={logo} alt='' className='authorized-header__logo' />
      <ul className='authorized-header__links'>
        <li className='authorized-header__item'>
          <a href='/' className='authorized-header__link'>
            Фильмы
          </a>
        </li>
        <li className='authorized-header__item'>
          <a href='/' className='authorized-header__link'>
            Сохранённые фильмы
          </a>
        </li>
        <li className='authorized-header__item'>
          <a
            href='/'
            className='authorized-header__link authorized-header__link_icon'
          >
            Аккаунт
          </a>
        </li>
      </ul>
      <button
        type='button'
        className='authorized-header__btn-hamburger'
      ></button>

    </header>
  );
}
