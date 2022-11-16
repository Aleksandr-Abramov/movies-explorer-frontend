import React from 'react'
import './login.css'
import Input from '../../shared/input/Input'
import logo from '../../../images/svg/home-page/logo.svg'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { GlobalContext, UsersContext } from '../../context/Context'
import { useForm } from 'react-hook-form'

export default function Login() {
  const { login, serverErrMessge } = useContext(UsersContext)
  const { currentUser } = useContext(GlobalContext)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  })
  // const [inputData, setInputData] = useState({
  //   email: '',
  //   password: '',
  // });

  // function handlerInputChange(event) {
  //   const { value, name } = event.target;
  //   setInputData({ ...inputData, [name]: value });
  // }

  function handlerOnSubmit(data) {
    login(data);
    reset();
  }
  return (
    <main className='login'>
      <div className='login__content-container'>
        <Link to='/' className='login__logo-link'>
          <img className='login__logo-img' src={logo} alt='logo' />
        </Link>
        <h1 className='login__title'>Рады видеть!</h1>
        <form
          action='/'
          method='post'
          className='login__form'
          onSubmit={handleSubmit(handlerOnSubmit)}
        >
          <label htmlFor='email' className='shared-label'>
            E-mail
          </label>
          <input
            type='email'
            name='email'
            id='email'
            className='shared-input'
            {...register('email', {
              required: {
                value: true,
                message: 'поле обязательно к заполнению',
              },
              pattern: {
                value: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
                message: 'поле email заполненно не верно',
              },
            })}
          />
          <p className='form-input-errors '>
            {errors.email && errors.email.message}
          </p>
          <label htmlFor='password' className='shared-label'>
            Пароль
          </label>
          <input
            type='text'
            name='password'
            id='password'
            className='shared-input'
            {...register('password', {
              required: {
                value: true,
                message: 'поле обязательно к заполнению',
              },
              minLength: {
                value: 3,
                message: 'поле должно быть не мение 3 симлолов',
              },
            })}
          />
          <p className='form-input-errors '>
            {errors.password && errors.password.message}
          </p>
          <p className='server-error-message'>{serverErrMessge}</p>
          <button type='submit' className='login__form-btn' disabled={!isValid}>
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
  )
}
