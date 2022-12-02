import React from 'react'
import { useState, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import './searchFormSavedMovies.css'
import { GlobalContext } from '../../context/Context'
import { useEffect } from 'react'

export default function SearchFormSavedMovies() {
  const { handlerOnSubmit } = useContext(GlobalContext)
  const [checked, setChecked] = useState(false)
  const location = useLocation()

  
  const [inputValue, setInputValue] = useState('')
  const [checkboxСlass, setСheckboxСlass] = useState(
    checked ? 'search-form__circle_move' : ''
  )

  function handlerCheckboxChange(e) {
    if (e.target.checked === true) {
      setСheckboxСlass('search-form__circle_move')
      setChecked(true)
    } else {
      setСheckboxСlass('')
      setChecked(false)
    }
  }

  function handlerInputChange(event) {
    event.preventDefault()
    handlerOnSubmit(inputValue, checked, location)
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
  )
}
