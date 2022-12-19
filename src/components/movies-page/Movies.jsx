import React from 'react'
import './movies.css'
import Footer from '../shared/footer/Footer'
import Header from '../shared/header/Header'
import Popup from '../shared/popup/Popup'
import Menu from '../menu/Menu'
import SearchForm from '../shared/search-form/SearchForm'
import MainMenuAuthorized from '../shared/main-menu-authorized/MainMenuAuthorized'
import MoviesCardList from '../shared/moviesCardList/MoviesCardList'
import { GlobalContext } from '../context/Context'
import { useContext } from 'react'
import Preloader from '../shared/preloader/Preloader'

export default function Movies() {
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
