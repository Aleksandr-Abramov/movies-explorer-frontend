import React from 'react';
import './searchForm.css';

export default function SearchForm() {
  return (
    <>
      <section className='search-section'>

      <form action='/' method='GET' className='search-form'>
          <input type='text' className='search-form__input' placeholder='Фильм'/>
          <button type='submit' className='search-form__btn'></button>
          
          <label htmlFor="search-form__checkbox" className='search-form__label'>
          
          <input type="checkbox" name="search-form__checkbox" id="search-form__checkbox" className='search-form__checkbox'/>
          <div className='search-form__switch'>
            <div className='search-form__circle'></div>
          </div>
          Короткометражки
          </label>
        </form>
      </section>
    </>
  );
}
