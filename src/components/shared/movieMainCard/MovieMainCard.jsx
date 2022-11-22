import React from 'react'
import { useState, useContext } from 'react'
import './movieMainCard.css'
import { SearchContext, GlobalContext } from '../../context/Context'
import { useLocation } from 'react-router-dom'

export default function MovieMainCard(props) {
  const { hendlerDeleteMainMovies } = useContext(SearchContext);
  

  function deleteMovies() {
    hendlerDeleteMainMovies(props._id)
  }
  return (
    <div className='movie-card'>
      <div className='movie-card__image-container'>
        <a href={props.trailer} target='_blank' rel='noreferrer'>
          <img
            src={props.image}
            alt={props.nameRU}
            className='movie-card__image'
          />
        </a>

        <button type='button' className='movie-card__btn-del' onClick={deleteMovies}></button>
      </div>
      <div className='movie-card__text-container'>
        <h4 className='movie-card__name'>{props.nameRU}</h4>
        <span className='movie-card__time'>{props.duration}</span>
      </div>
    </div>
  )
}
