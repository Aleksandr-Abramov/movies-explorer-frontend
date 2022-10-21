import React from 'react';
import './profile.css';
import Header from '../../shared/header/Header'
import MainMenuAuthorized from '../../shared/main-menu-authorized/MainMenuAuthorized';
export default function Profile() {
  return (
    <>
      <Header bg="#202020">
        <MainMenuAuthorized/>
      </Header>
      <main className='profile page__profile'>
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
