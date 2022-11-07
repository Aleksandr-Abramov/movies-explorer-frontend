import React from 'react';
import {
   useState,
  //  useEffect,
   useContext,
   } from 'react';
// import apiMovies from '../../../utils/MoviesApi';
import { PopupContext } from '../../context/Context';
import './searchForm.css';

export default function SearchForm({ hendlerMoviesOnSubmit }) {
  const [checked, setChecked] = useState(false)
  const { movieData } = useContext(PopupContext);
  const [inputValue, setInputValue] = useState('');

  function handlerCheckboxClick() {
    setChecked(check => !check);
  } 
  const serchMovieData = movieData.filter((film) => {
    return film.nameRU.toUpperCase().includes(inputValue.toUpperCase());
  });

  function hendlerOnSubmit(event) {
    event.preventDefault();
    localStorage.setItem('films', JSON.stringify(serchMovieData));
    hendlerMoviesOnSubmit(JSON.parse(localStorage.getItem('films')));
  }
  function handlerInputChange (event) {
    setInputValue(event)
  }
  
  return (
      <section className='search-section'>
      <form action='/' method='GET' className='search-form' onSubmit={event => hendlerOnSubmit(event)}>
          <input type='text' className='search-form__input' placeholder='Фильм' onChange={(event)=> handlerInputChange(event.target.value)} required/>
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
