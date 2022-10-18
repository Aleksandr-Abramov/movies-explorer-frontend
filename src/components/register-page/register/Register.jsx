import React from 'react';
import './register.css';
import Input from '../../shared/input/Input';
import logo from '../../../images/svg/home-page/logo.svg';

export default function Register() {
  return (
    <main className='register'>
    <div className='register__content-container'>
      <a href='/' className='register__logo-link'>
        <img className='register__logo-img' src={logo} alt='logo' />
      </a>
      <h1 className='register__title'>Добро пожаловать!</h1>
      <form action='/' method='post' className='register__form'>
        <Input type='text' name='name' id='name' labelName='Имя' />
        <Input type='email' name='email' id='email' labelName='E-mail' />
        <Input
          type='password'
          name='password'
          id='password'
          labelName='Пароль'
          minlength={2}
        />
        <button type='submit' className='register__form-btn'>
          Зарегистрироваться
        </button>
      </form>
      <div className='register__link-container'>
        <span className='register__span'>Уже зарегистрированы?</span>
        <a href='/' className='register__link'>
          Выход
        </a>
      </div>
      </div>
    </main>
  );
}
