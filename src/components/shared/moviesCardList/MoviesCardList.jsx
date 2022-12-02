import React from 'react'
import './moviesCardList.css'
import { useContext } from 'react'
import MoviesCard from '../moviesCard/MoviesCard'
import MovieMainCard from '../movieMainCard/MovieMainCard'
import MoreContent from '../more-content/MoreContent'
import { GlobalContext } from '../../context/Context'
import { useLocation } from 'react-router-dom'

export default function MoviesCardList() {
  const {
    mainMovieData,
    searchMovieData,

    hendlerMoreContent,
    hideBtn,
    lastSlice,
    nothingFound,
  } = useContext(GlobalContext)
  const location = useLocation()
  //BeatfilmMoviesApi
  const mainMovieDataIDs = mainMovieData.map((film) => film.movieId)

  const searchRender =
    searchMovieData.length !== 0
      ? searchMovieData.slice(0, lastSlice).map((item) => {
          return (
            <MoviesCard
              key={item.id}
              {...item}
              isSaved={mainMovieDataIDs.includes(item.id)}
            />
          )
        })
      : JSON.parse(localStorage.getItem('films')) === null
      ? null
      : JSON.parse(localStorage.getItem('films')).map((item) => {
          return (
            <MoviesCard
              key={item.id}
              {...item}
              isSaved={mainMovieDataIDs.includes(item.id)}
            />
          )
        })

  return (
    <>
      <section className='movies-card-list'>{searchRender}</section>
      {nothingFound === true && location.pathname === '/movies' && (
        <div className='resultBlock'>
          <h2 className='resultBlock__title'>Результатов нет</h2>
        </div>
      )}

      {searchMovieData.length !== 0 && (
        <MoreContent
          hendlerMoreContent={hendlerMoreContent}
          hideBtn={hideBtn}
        />
      )}
    </>
  )
}
