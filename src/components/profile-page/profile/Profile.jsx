import React from 'react'
import './profile.css'
import Header from '../../shared/header/Header'
import Popup from '../../shared/popup/Popup'
import Menu from '../../menu/Menu'
import MainMenuAuthorized from '../../shared/main-menu-authorized/MainMenuAuthorized'
import { useContext } from 'react'
import { GlobalContext } from '../../context/Context'
import { useForm } from 'react-hook-form'

export default function Profile() {
  const {
    handlerChangeUser,
    serverErrMessge,
    exitApp,
    setServerErrMessge,
    currentUser,
  } = useContext(GlobalContext)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  })

  function handlerOnSubmit(data) {
    handlerChangeUser(data)
    reset()
  }
  function logout() {
    exitApp()
  }

  function handlerOnFocusInput() {
    setServerErrMessge('')
  }
  return (
    <>
      <Header bg='#202020'>
        <MainMenuAuthorized />
      </Header>
      <main className='profile page__profile'>
        <h1 className='profile__title'>
          {currentUser.name
            ? `Привет, ${currentUser.name}`
            : 'Вы не зарегистрированны!'}
        </h1>
        <form
          action='/'
          method='post'
          className='profile-form'
          onSubmit={handleSubmit(handlerOnSubmit)}
        >
          <div className='profile-form__label-container'>
            <label htmlFor='name' className='profile-form__label'>
              Имя
            </label>
            <input
              type='text'
              className='profile-form__input'
              id='name'
              name='name'
              placeholder={currentUser.name && currentUser.name}
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
          </div>
          <p className='form-input-errors'>
            {errors.name && errors.name.message}
          </p>
          <div className='profile-form__label-container'>
            <label htmlFor='email' className='profile-form__label'>
              E-mail
            </label>
            <input
              type='email'
              className='profile-form__input'
              id='email'
              name='email'
              placeholder={currentUser.name && currentUser.email}
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
          </div>
          <p className='form-input-errors '>
            {errors.email && errors.email.message}
          </p>
          <p className='server-error-message'>{serverErrMessge}</p>
          <button
            type='submit'
            className='profile-form-btn'
            disabled={!isValid}
          >
            Редактировать
          </button>
        </form>
        <button type='button' className='exit-account' onClick={logout}>
          Выйти из аккаунта
        </button>
      </main>
      <Popup>
        <Menu />
      </Popup>
    </>
  )
}
