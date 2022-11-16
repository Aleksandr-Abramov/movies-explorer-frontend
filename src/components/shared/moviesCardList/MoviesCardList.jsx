import React from 'react';
import './moviesCardList.css';
import { useContext } from 'react';
import MoviesCard from '../moviesCard/MoviesCard';
import MoreContent from '../more-content/MoreContent';
import { SearchContext } from '../../context/Context';
import { useLocation } from 'react-router-dom';

export default function MoviesCardList() {
  // const { searchMovieData, moreContent, hideBtn, lastSlice, nothingFound} = useContext(SearchContext);
  const {
    searchMovieData,
    hendlerMoreContent,
    hideBtn,
    lastSlice,
    nothingFound,
  } = useContext(SearchContext);
  let location = useLocation();
  // JSON.parse(localStorage.getItem('films')).map((item) => {
  //   return <MoviesCard key={item.id} {...item} />;
  // });
  return (
    <>
      <section className='movies-card-list'>
        {searchMovieData.length !== 0
          ? searchMovieData.slice(0, lastSlice).map((item) => {
              return <MoviesCard key={item.id} {...item} />;
            })
          : JSON.parse(localStorage.getItem('films')) === null
          ? null
          : JSON.parse(localStorage.getItem('films')).map((item) => {
              return <MoviesCard key={item.id} {...item} />;
            })
        }
      </section>
      {nothingFound === true && (
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
  );
}
