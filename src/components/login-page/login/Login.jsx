import React from 'react'
import './login.css'
import logo from '../../../images/svg/home-page/logo.svg'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalContext } from '../../context/Context'
import { useForm } from 'react-hook-form'

export default function Login() {
  const { login, serverErrMessge, setServerErrMessge } =
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
    login(data)
    reset()
  }

  function handlerOnFocusInput() {
    setServerErrMessge('')
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
