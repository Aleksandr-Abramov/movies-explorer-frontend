import React from 'react';
import './savedMovies.css';
import Footer from '../shared/footer/Footer'
import Header from '../shared/header/Header';
import SearchForm from '../shared/search-form/SearchForm';
import MainMenuAuthorized from '../shared/main-menu-authorized/MainMenuAuthorized';
// import Preloader from '../shared/preloader/Preloader';
import MoviesCardList from '../shared/moviesCardList/MoviesCardList';

export default function Movies() {
  return (
    <>
    
    <Header bg="#202020">
      <MainMenuAuthorized/>
    </Header>
    <main className='movies'>
      <div className="wrapper">
        <SearchForm />
        <MoviesCardList />
        {/* <Preloader /> */}
      </div>
    </main> 
    <Footer/>
    </>
  );
}