import React from 'react';
import './profile.css';
import logo from '../../../images/svg/home-page/logo.svg';

export default function Profile() {
  return (
    <>
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
            <a href='/' className='authorized-header__link authorized-header__link_icon'>
              Аккаунт
            </a>
          </li>
        </ul>
        <button type='button' className='authorized-header__btn-hamburger'></button>
      </header>
      <main className='profile'>
        <h1 className='profile__title'>Привет, Виталий!</h1>
        <form action='/' method='post' className='profile-form'>
          <div className='profile-form__label-container'>
            <label htmlFor='name' className='profile-form__label'>
              Имя
            </label>
            <input
              type='text'
              className='profile-form__input'
              id='name'
              placeholder='Имя'
            />
          </div>
          <div className='profile-form__label-container'>
            <label htmlFor='email' className='profile-form__label'>
              E-mail
            </label>
            <input
              type='text'
              className='profile-form__input'
              id='email'
              placeholder='E-mail'
            />
          </div>
          <button type='submit' className='profile-form-btn'>
            Редактировать
          </button>
        </form>
        <button type='button' className='exit-account'>
          Выйти из аккаунта
        </button>
      </main>
    </>
  );
}
