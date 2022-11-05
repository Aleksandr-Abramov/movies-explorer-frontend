import React from 'react';
import { NavLink } from 'react-router-dom';
import './menu.css';
import { PopupContext } from '../context/Context';
import { useContext } from 'react';
export default function Menu() {
  const { handlerClosePopup } = useContext(PopupContext);
  return (
    <div className='menu'>
      <ul className='menu__list'>
        <li className='menu__item'>
          <NavLink exact to='/' className='menu__link' activeClassName='menu__link_active'>Главная</NavLink>
        </li>
        <li className='menu__item'>
          <NavLink to='/movies' className='menu__link' activeClassName='menu__link_active'>Фильмы</NavLink>
        </li>
        <li className='menu__item'>
          <NavLink to='/saved-movies' className='menu__link' activeClassName='menu__link_active'>Сохранённые фильмы</NavLink>
        </li>
        <li className='menu__item'>
          <NavLink to='/profile' className='menu__link menu__link_icon' activeClassName='menu__link_active'>Аккаунт</NavLink>
        </li>
      </ul>
      <button type='button' className='menu__btn-close' onClick={handlerClosePopup}></button>
    </div>
  );
}
