import React from 'react';
import './moviesCardList.css';
import MoviesCard from '../moviesCard/MoviesCard';
import MoreContent from '../more-content/MoreContent';

export default function MoviesCardList({
  serchMovieData,
  moreContent,
  hideBtn,
  nothingFound
}) {
  return (
    <>
      <section className='movies-card-list'>
        {serchMovieData.length !== 0
          ? serchMovieData.map((item) => {
              return <MoviesCard key={item.id} {...item} />;
            })
          : JSON.parse(localStorage.getItem('films')).map((item) => {
              return <MoviesCard key={item.id} {...item} />;
            })}
      </section>
      {nothingFound === true && <div className='resultBlock'><h2 className='resultBlock__title'>Результатов нет</h2></div>}
      {serchMovieData.length !== 0 && (
        <MoreContent moreContent={moreContent} hideBtn={hideBtn} />
      )}
    </>
  );
}
