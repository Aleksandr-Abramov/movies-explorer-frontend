import React from 'react';
import './movies.css';
import Footer from '../shared/footer/Footer'
import Header from '../shared/header/Header';
import SearchForm from '../shared/search-form/SearchForm';
import MainMenuAuthorized from '../shared/main-menu-authorized/MainMenuAuthorized';
import MoreContent from '../shared/more-content/MoreContent';
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
        <MoreContent />
      </div>
    </main> 
    <Footer/>
    </>
  );
}
