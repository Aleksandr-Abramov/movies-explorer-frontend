import React from 'react'
import { useState, useContext } from 'react'
import './moviesCard.css'
import { SearchContext } from '../../context/Context'
import { useLocation } from 'react-router-dom'

export default function MoviesCard(props) {
  const { hendlerSaveMovies, hendlerDeleteMovies } = useContext(SearchContext)
  const [infoMovie] = useState(props);
  const [like, setLike] = useState(true);
  const location = useLocation();

  let renderImage;
  if (location.pathname === '/movies') {
    renderImage = `https://api.nomoreparties.co/${props.image.url}`
  }
  if (location.pathname === '/saved-movies') {
    renderImage = props.image
  }
  function hendlerClickLike() {
    if (like) {
      setLike(false);
      hendlerSaveMovies(infoMovie);
      
    } else {
      setLike(true);
      hendlerDeleteMovies(infoMovie);
    }
    // hendlerSaveMovies(infoMovie)
    // setLike((like) => !like)
    console.log(like)
  }
  return (
    <div className='movie-card'>
      <div className='movie-card__image-container'>
        <a href={props.trailerLink} target='_blank' rel='noreferrer'>
          <img
            // src={  `https://api.nomoreparties.co/${props.image.url}`}
            src={renderImage}
            alt={props.nameRU}
            className='movie-card__image'
          />
        </a>
        {/* <button type='button' className='movie-card__btn-save' >Сохранить</button> */}
        {/* <button type='button' className='movie-card__btn-del'></button> */}
        <button
          type='button'
          className={`movie-card__btn-ok ${like && 'movie-card__btn-ok_unactive'}`}
          onClick={hendlerClickLike}
        ></button>
      </div>
      <div className='movie-card__text-container'>
        <h4 className='movie-card__name'>{props.nameRU}</h4>
        <span className='movie-card__time'>{props.duration}мин</span>
      </div>
    </div>
  )
}
