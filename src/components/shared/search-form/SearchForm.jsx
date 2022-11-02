import React from 'react';
import { useState } from 'react';
import './searchForm.css';

export default function SearchForm() {
  const [checked, setChecked] = useState(false)
  function handlerCheckboxClick() {
    setChecked(check => !check);
  } 
  return (
      <section className='search-section'>
      <form action='/' method='GET' className='search-form'>
          <input type='text' className='search-form__input' placeholder='Фильм' required/>
          <button type='submit' className='search-form__btn'></button>
          
          <label htmlFor="search-form__checkbox" className='search-form__label'>
          
          <input type="checkbox" name="search-form__checkbox" id="search-form__checkbox" className='search-form__checkbox'/>
          <div className='search-form__switch' onClick={handlerCheckboxClick}>
            <div className={`search-form__circle ${checked ? 'search-form__circle_move': ''}`}></div>
          </div>
          Короткометражки
          </label>
        </form>
      </section>
  );
}
