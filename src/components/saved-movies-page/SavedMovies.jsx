import React from 'react'
import './savedMovies.css'
import Footer from '../shared/footer/Footer'
import Header from '../shared/header/Header'
import SearchForm from '../shared/search-form/SearchForm'
import Menu from '../menu/Menu'
import Popup from '../shared/popup/Popup'
import MainMenuAuthorized from '../shared/main-menu-authorized/MainMenuAuthorized'
import { useContext } from 'react'
import MoviesCardList from '../shared/moviesCardList/MoviesCardList'
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
          <SearchForm />
          <MoviesCardList />
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
