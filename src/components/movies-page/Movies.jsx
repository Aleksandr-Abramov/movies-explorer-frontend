import React from 'react';
import './movies.css';
import Footer from '../shared/footer/Footer'
import Header from '../shared/header/Header';
import SearchForm from '../shared/search-form/SearchForm';
import MainMenuAuthorized from '../shared/main-menu-authorized/MainMenuAuthorized';
import MoviesCardList from '../shared/moviesCardList/MoviesCardList';


export default function Movies() {
  const [newData, setNewData] = React.useState(); 

  function hendlerMoviesOnSubmit(data) {
    setNewData(data);
  }
  return (
    <> 
    <Header bg="#202020">
      <MainMenuAuthorized />
    </Header>
    <main className='movies'>
      <div className="wrapper">
        <SearchForm hendlerMoviesOnSubmit={hendlerMoviesOnSubmit}/>
        <MoviesCardList newData={newData}/>
      </div>
    </main> 
    <Footer/>
    </>
  );
}
