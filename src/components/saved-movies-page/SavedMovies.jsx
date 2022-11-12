import React from 'react';
import './savedMovies.css';
import Footer from '../shared/footer/Footer'
import Header from '../shared/header/Header';
import SearchForm from '../shared/search-form/SearchForm';
import MainMenuAuthorized from '../shared/main-menu-authorized/MainMenuAuthorized';
import { useContext } from 'react';
import MoviesCardList from '../shared/moviesCardList/MoviesCardList';
import { SearchContext } from '../context/Context';
import Preloader from '../shared/preloader/Preloader';

export default function Movies() {
  const { preloaderCondition } = useContext(SearchContext);
  return (
    <>
    
    <Header bg="#202020">
      <MainMenuAuthorized/>
    </Header>
    <main className='movies'>
      <div className="wrapper">
      <SearchForm />
      <MoviesCardList/>
        {/* <MoreContent /> */}
      </div>
    </main> 
    <Footer/>
    <Preloader preloaderCondition={preloaderCondition}/>
    </>
  );
}