import React from 'react';
import './searchForm.css';

export default function SearchForm() {
  return (
    <>
      <form action='GET' className='search-form movies__search-form'>
        <div className='search-form__imput-container'>
          <input
            type='text'
            name='search'
            id='search'
            className='search-form__input'
            placeholder='Фильм'
          />
          <button type='submit' className='search-form__btn'></button>
        </div>
        <div className='search-form__checkbox-container'>
          <div className='switch-container'>
            <div className='switch'></div>
          </div>
          <input
            type='checkbox'
            className='search-form__checkbox'
            id='search-form__checkbox'
          />
          <label htmlFor='search-form__checkbox' className='search-form__label'>
            Короткометражки
          </label>
        </div>
      </form>
    </>
  );
}
