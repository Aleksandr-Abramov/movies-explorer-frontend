import React from 'react';
import {
  useState,
  //  useEffect,
   useContext,
} from 'react';
import './searchForm.css';
import { SearchContext } from '../../context/Context';

export default function SearchForm() {
  const { handlerOnSubmit } = useContext(SearchContext);

  const [checked, setChecked] = useState(
    localStorage.getItem('checkbox') === null
      ? false
      : JSON.parse(localStorage.getItem('checkbox'))
  );

  const [inputValue, setInputValue] = useState(
    localStorage.getItem('request') === null
      ? ''
      : localStorage.getItem('request').slice(1, -1)
  );
  const [checkboxСlass, setСheckboxСlass] = useState(
    checked ? 'search-form__circle_move' : ''
  );
 
  function handlerCheckboxChange(e) {
    if (e.target.checked === true) {
      localStorage.setItem('checkbox', JSON.stringify(e.target.checked));
      setСheckboxСlass('search-form__circle_move');
      setChecked(true);
    } else {
      localStorage.setItem('checkbox', JSON.stringify(e.target.checked));
      setСheckboxСlass('');
      setChecked(false);
    }
  }
 
  function handlerInputChange(event) {
    event.preventDefault();
    handlerOnSubmit(inputValue, checked);
    // console.log(event);
  }
  

  return (
    <section className='search-section'>
      <form
        action='/'
        method='GET'
        className='search-form'
        onSubmit={(event) => handlerInputChange(event)}
      >
        <input
          type='text'
          className='search-form__input'
          value={inputValue || ''}
          placeholder='Фильм'
          onChange={(event) => setInputValue(event.target.value)}
          required
        />
        <button type='submit' className='search-form__btn'></button>

        <label htmlFor='search-form__checkbox' className='search-form__label'>
          <input
            type='checkbox'
            name='search-form__checkbox'
            id='search-form__checkbox'
            onChange={handlerCheckboxChange}
            className='search-form__checkbox'
            defaultChecked={checked}
          />
          <div className='search-form__switch'>
            <div className={`search-form__circle ${checkboxСlass}`}></div>
          </div>
          Короткометражки
        </label>
      </form>
    </section>
  );
}
