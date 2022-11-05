import React from 'react';
import './moviesCard.css';
// import movieImage from './card-image.png'

export default function MoviesCard({src}) {
  return (
    <div className='movie-card'>
      <div className='movie-card__image-container'>
        <img 
        src={src}
        alt='movieImage'
        className='movie-card__image'
         />
         <button type='button' className='movie-card__btn-save'>Сохранить</button>
         <button type='button' className='movie-card__btn-del'></button>
         <button type='button' className='movie-card__btn-ok'></button>
      </div>
      <div className='movie-card__text-container'>
        <h4 className='movie-card__name'>Киноальманах «100 лет дизайна»</h4>
        <span className='movie-card__time'>1ч 17м</span>
      </div>
    </div>
  );
}
