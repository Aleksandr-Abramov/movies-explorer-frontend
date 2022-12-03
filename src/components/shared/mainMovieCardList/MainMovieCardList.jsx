import React from 'react'
import { useContext } from 'react'
import MovieMainCard from '../movieMainCard/MovieMainCard'
import { GlobalContext } from '../../context/Context'

export default function MainMovieCardList() {
  const { mainMovieData, searchMainMovieData, renderStartMovie, lastSlice } =
    useContext(GlobalContext)

  const startMovies = mainMovieData.slice(0, lastSlice).map((item) => {
    return <MovieMainCard key={item._id} {...item} />
  })
  const searchRenderMainMovie = searchMainMovieData
    .slice(0, lastSlice)
    .map((item) => {
      return <MovieMainCard key={item._id} {...item} />
    })

  return (
    <>
      {renderStartMovie ? (
        <section className='movies-card-list'>{startMovies}</section>
      ) : searchRenderMainMovie.length === 0 ? (
        <div className='resultBlock'>
          <h2 className='resultBlock__title'>Результатов нет</h2>
        </div>
      ) : (
        <section className='movies-card-list'>{searchRenderMainMovie}</section>
      )}
    </>
  )
}
