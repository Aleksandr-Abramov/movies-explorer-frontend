import React from 'react'
import { useContext } from 'react'
import './movieMainCard.css'
import { GlobalContext } from '../../context/Context'

export default function MovieMainCard(props) {
  const { hendlerDeleteMainMovies } = useContext(GlobalContext)

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

        <button
          type='button'
          className='movie-card__btn-del'
          onClick={deleteMovies}
        ></button>
      </div>
      <div className='movie-card__text-container'>
        <h4 className='movie-card__name'>{props.nameRU}</h4>
        <span className='movie-card__time'>{props.duration}</span>
      </div>
    </div>
  )
}
