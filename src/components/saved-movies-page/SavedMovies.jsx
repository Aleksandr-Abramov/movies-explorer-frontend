import React from 'react'
import './savedMovies.css'
import Footer from '../shared/footer/Footer'
import Header from '../shared/header/Header'
import SearchFormSavedMovies from '../shared/search-form-Saved-movies/SearchFormSavedMovies'
import Menu from '../menu/Menu'
import Popup from '../shared/popup/Popup'
import MainMenuAuthorized from '../shared/main-menu-authorized/MainMenuAuthorized'
import { useContext } from 'react'
import MainMovieCardList from '../shared/mainMovieCardList/MainMovieCardList'
import { GlobalContext } from '../context/Context'
import Preloader from '../shared/preloader/Preloader'

export default function SavedMovies() {
  const { preloaderCondition } = useContext(GlobalContext)
  return (
    <>
      <Header>
        <MainMenuAuthorized />
      </Header>
      <main className='movies'>
        <div className='wrapper'>
          <SearchFormSavedMovies />
          <MainMovieCardList />
        </div>
      </main>
      <Footer />
      <Popup>
        <Menu />
      </Popup>
      <Preloader preloaderCondition={preloaderCondition} />
    </>
  )
}
