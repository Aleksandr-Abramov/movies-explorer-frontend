import React from 'react'
import { useState, useContext } from 'react'
import './moviesCard.css'
import { SearchContext } from '../../context/Context'

export default function MoviesCard(props) {
  const { hendlerSaveMovies, hendlerDeleteMovies } = useContext(SearchContext);
  const [isSaved, setIsSaved] = useState(props.isSaved);
  const saveDelBtnClass = isSaved ? '' : 'movie-card__btn-ok_unactive';
  
  function hendlerClickLikeBtn() {
    if(isSaved) {
      setIsSaved(false);
      hendlerDeleteMovies(props)
    } else {
      hendlerSaveMovies(props);
      setIsSaved(true);
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
        <h4 className='movie-card__name' onClick={()=> console.log(props)}>{props.nameRU}</h4>
        <span className='movie-card__time'>{props.duration}</span>
      </div>
    </div>
  )
}
