import React from 'react';
import './moviesCardList.css';
import MoviesCard from '../moviesCard/MoviesCard'
import img from '../../../images/png/movie-card/movie-card.png'
    const data = [
        {src: img},
        {src: img},
        {src: img},
        {src: img},
        {src: img},
    ]
    
export default function MoviesCardList() {
    return (
    
        <section className='movies-card-list'>
                {data.map((el, index) => <MoviesCard key={index} src={el.src}/>)}
        </section>
    );
};