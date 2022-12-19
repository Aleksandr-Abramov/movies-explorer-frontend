import React from 'react'
import { Link } from 'react-router-dom'
import './register.css'
import logo from '../../../images/svg/home-page/logo.svg'
import { useContext } from 'react'
import { GlobalContext } from '../../context/Context'
import { useForm } from 'react-hook-form'

export default function Register() {
  const { createUser, serverErrMessge, setServerErrMessge } =
    useContext(GlobalContext)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  })

  function handlerOnSubmit(data) {
    createUser(data)
    reset()
  }

  function handlerOnFocusInput() {
    setServerErrMessge('')
  }
  return (
    <main className='register'>
      <div className='register__content-container'>
        <Link to='/' className='register__logo-link'>
          <img className='register__logo-img' src={logo} alt='logo' />
        </Link>
        <h1 className='register__title'>Добро пожаловать!</h1>
        <form
          action='/'
          method='post'
          className='register__form'
          onSubmit={handleSubmit(handlerOnSubmit)}
        >
          <label htmlFor='name' className='shared-label'>
            Имя
          </label>
          <input
            type='text'
            name='name'
            id='name'
            className='shared-input'
            onFocus={handlerOnFocusInput}
            {...register('name', {
              required: {
                value: true,
                message: 'поле обязательно к заполнению',
              },
              minLength: {
                value: 2,
                message: 'должно быть не мение 2 симлолов',
              },
              maxLength: {
                value: 30,
                message: 'должно быть более 30 симлолов',
              },
              pattern: {
                value: /[A-Za-zА-Яа-яЁё\\s-]+/,
                message:
                  'поле name содержит только латиницу, кириллицу, пробел или дефис',
              },
            })}
          />
          <p className='form-input-errors '>
            {errors.name && errors.name.message}
          </p>

          <label htmlFor='email' className='shared-label'>
            E-mail
          </label>
          <input
            type='email'
            name='email'
            id='email'
            className='shared-input'
            onFocus={handlerOnFocusInput}
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
          <p className='form-input-errors'>
            {errors.email && errors.email.message}
          </p>
          <label htmlFor='password' className='shared-label'>
            Пароль
          </label>
          <input
            type='password'
            name='password'
            id='password'
            className='shared-input'
            onFocus={handlerOnFocusInput}
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
          <p className='form-input-errors'>
            {errors.password && errors.password.message}
          </p>
          <p className='server-error-message'>{serverErrMessge}</p>
          <button
            type='submit'
            className='register__form-btn'
            disabled={!isValid}
          >
            Зарегистрироваться
          </button>
        </form>
        <div className='register__link-container'>
          <span className='register__span'>Уже зарегистрированы?</span>
          <Link to='/signin' className='register__link'>
            Войти
          </Link>
        </div>
      </div>
    </main>
  )
}
