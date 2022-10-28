import React from 'react';
import './login.css';
import Input from '../../shared/input/Input';
import logo from '../../../images/svg/home-page/logo.svg';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <main className='login'>
      <div className='login__content-container'>
        <Link to='/' className='login__logo-link'>
          <img className='login__logo-img' src={logo} alt='logo' />
        </Link>
        <h1 className='login__title'>Рады видеть!</h1>
        <form action='/' method='post' className='login__form'>
          <Input type='email' name='email' id='email' labelName='E-mail' />
          <Input
            type='password'
            name='password'
            id='password'
            labelName='Пароль'
            minlength={2}
          />
          <button type='submit' className='login__form-btn'>
            Войти
          </button>
        </form>
        <div className='login__link-container'>
          <span className='login__span'>Ещё не зарегистрированы?</span>
          <Link to='/signup' className='login__link'>
            Регистрация
          </Link>
        </div>
      </div>
    </main>
  );
}
