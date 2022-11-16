import React from 'react';
import './moviesCard.css';

export default function MoviesCard({nameRU, duration, image, trailerLink, amountElements}) {
  return (
    <div className='movie-card'>
      <div className='movie-card__image-container'>
      <a href={trailerLink} target='_blank' rel='noreferrer'>
      <img 
        src={`https://api.nomoreparties.co/${image.url}`}
        alt={nameRU}
        className='movie-card__image'
         />
      </a>
         <button type='button' className='movie-card__btn-save'>Сохранить</button>
         <button type='button' className='movie-card__btn-del'></button>
         <button type='button' className='movie-card__btn-ok'></button>
      </div>
      <div className='movie-card__text-container'>
        <h4 className='movie-card__name'>{nameRU} {amountElements}</h4>
        <span className='movie-card__time'>{duration}мин</span>
      </div>
    </div>
  );
}
