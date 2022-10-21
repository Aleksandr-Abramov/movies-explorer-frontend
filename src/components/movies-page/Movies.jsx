import React from 'react';
import './movies.css';
import Footer from '../shared/footer/Footer'
import Header from '../shared/header/Header';
import SearchForm from './search-form/SearchForm';
import MainMenuAuthorized from '../shared/main-menu-authorized/MainMenuAuthorized';
import Preloader from './preloader/Preloader';

export default function Movies() {
  return (
    <>
    
    <Header bg="#202020">
      <MainMenuAuthorized/>
    </Header>
    <main className='movies'>
    <div className="wrapper">
    <SearchForm />
    <Preloader />

    </div>
    </main> 
    <Footer/>
    </>
  );
}
