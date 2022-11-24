import React from 'react';
import './moviesCardList.css';
import { useContext } from 'react';
import MoviesCard from '../moviesCard/MoviesCard';
import MovieMainCard from '../movieMainCard/MovieMainCard';
import MoreContent from '../more-content/MoreContent';
import { SearchContext } from '../../context/Context';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function MoviesCardList() {
  const {
    mainMovieData,
    searchMovieData,
    searchMainMovieData,
    hendlerMoreContent,
    hideBtn,
    lastSlice,
    nothingFound,
    nothingFoundSavedMovies,
  } = useContext(SearchContext);
  const location = useLocation();
  //BeatfilmMoviesApi
  const [mainMovieDataIDs] = useState(mainMovieData.map((film) => film.movieId));

  let searchRender
  if (location.pathname === '/movies') {
    searchRender =
      searchMovieData.length !== 0
        ? searchMovieData.slice(0, lastSlice).map((item) => {
            return <MoviesCard key={item.id} {...item} isSaved={mainMovieDataIDs.includes(item.id)}/>
          })
        : JSON.parse(localStorage.getItem('films')) === null
        ? null
        : JSON.parse(localStorage.getItem('films')).map((item) => {
            return <MoviesCard key={item.id} {...item} isSaved={mainMovieDataIDs.includes(item.id)}/>
          })
  }
  if (location.pathname === '/saved-movies') {
    searchRender =
      searchMainMovieData.length !== 0
        ? searchMainMovieData.slice(0, lastSlice).map((item) => {
            return <MovieMainCard key={item._id} {...item} />
          })
        : JSON.parse(localStorage.getItem('saved-films')) === null
        ? null
        : JSON.parse(localStorage.getItem('saved-films')).map((item) => {
            return <MovieMainCard key={item._id} {...item} />
          })
  }

  return (
    <>
      <section className='movies-card-list'>{searchRender}</section>
      {nothingFound === true && location.pathname === '/movies' && (
        <div className='resultBlock'>
          <h2 className='resultBlock__title'>Результатов нет</h2>
        </div>
      )}
      {location.pathname === '/saved-movies' && nothingFoundSavedMovies === true && (
        <div className='resultBlock'>
          <h2 className='resultBlock__title'>Результатов нет</h2>
        </div>
      )}
      {location.pathname === '/movies' && searchMovieData.length !== 0 && (
        <MoreContent
          hendlerMoreContent={hendlerMoreContent}
          hideBtn={hideBtn}
        />
      )}
    </>
  )
}
