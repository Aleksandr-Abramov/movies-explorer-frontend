import React from 'react'
import { useState, useContext } from 'react'
import './moviesCard.css'
import { GlobalContext } from '../../context/Context'

export default function MoviesCard(props) {
  const { hendlerSaveMovies, hendlerDeleteMovies } = useContext(GlobalContext)
  const [isSaved, setIsSaved] = useState(props.isSaved)
  const saveDelBtnClass = props.isSaved ? '' : 'movie-card__btn-ok_unactive'

  function hendlerClickLikeBtn() {
    setIsSaved(() => !isSaved)
    if (isSaved) {
      hendlerDeleteMovies(props)
    } else {
      hendlerSaveMovies(props)
    }
  }

  return (
    <div className='movie-card'>
      <div className='movie-card__image-container'>
        <a href={props.trailerLink} target='_blank' rel='noreferrer'>
          <img
            src={`https://api.nomoreparties.co/${props.image.url}`}
            alt=''
            className='movie-card__image'
          />
        </a>

        <button
          type='button'
          className={`movie-card__btn-ok ${saveDelBtnClass}`}
          onClick={hendlerClickLikeBtn}
        ></button>
      </div>
      <div className='movie-card__text-container'>
        <h4 className='movie-card__name'>{props.nameRU}</h4>
        <span className='movie-card__time'>{props.duration}</span>
      </div>
    </div>
  )
}
