import React from 'react';
import {
   useState,
  //  useEffect,
   useContext,
   } from 'react';
// import apiMovies from '../../../utils/MoviesApi';
import { PopupContext } from '../../context/Context';
import './searchForm.css';

export default function SearchForm() {
  const [checked, setChecked] = useState(false)
  const [searchValue, setSearchValue] = useState('');
  const { hendlerSearchInputChange, movieData } = useContext(PopupContext);

  function handlerCheckboxClick() {
    setChecked(check => !check);
  } 
  // в app происходиит запрос на получение фильмов. Тут происходи поиск.
  const filterSearchValue = movieData.filter(function(film) {
    return film.nameRU.toLowerCase().includes(searchValue.toLowerCase());
  });
  // при нажатии на кнопку, сохраняю данные в хранилище.
  function saveDataInStorage(event) {
    event.preventDefault();
    localStorage.setItem('films', JSON.stringify(filterSearchValue));
  }
  // onClick={(event) => hendlerSearchInputChange(event, filterSearchValue)}
  return (
      <section className='search-section'>
      <form action='/' method='GET' className='search-form'>
          <input type='text' className='search-form__input' placeholder='Фильм' onChange={(event) => setSearchValue(event.target.value)} required/>
          <button type='submit' className='search-form__btn' onClick={(event)=> {saveDataInStorage(event)}}></button>
          
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
