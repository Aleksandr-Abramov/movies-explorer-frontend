import React from 'react'
import './notFound.css'

export default function NotFound404() {
  return (
    <main className='not-found'>
      <div className='not-found__content-container'>
        <h1 className='not-found__title'>404</h1>
        <p className='not-found__text'>Страница не найдена</p>
      </div>
      <a href='/' className='not-found__link'>
        Назад
      </a>
    </main>
  )
}
