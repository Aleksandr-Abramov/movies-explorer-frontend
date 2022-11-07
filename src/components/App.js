import React from 'react';
import './App.css';
// import apiMovies from '../utils/MoviesApi';
import { Route, Switch } from 'react-router-dom';
import Header from './shared/header/Header';
import Main from './home-page/main/Main.jsx';
import Footer from './shared/footer/Footer.jsx';
import Register from './register-page/register/Register';
import Login from './login-page/login/Login';
import Profile from './profile-page/profile/Profile';
// import Preloader from './shared/preloader/Preloader';
// import NotFound404 from './page-404/page-404/NotFound404';
import Movies from './movies-page/Movies';
import SavedMovies from './saved-movies-page/SavedMovies';
import MainMenuUnauthorized from './shared/main-menu-unauthorized/MainMenuUnauthorized.jsx';
import Menu from './menu/Menu';
import Popup from './shared/popup/Popup';
import { useState, useEffect } from 'react';
import { PopupContext } from './context/Context';
import apiMovies from '../utils/MoviesApi';
// import { useEffect } from 'react';

function App() {
  const [openClosePopup, setOpenClosePopup] = useState(false);
  const [movieData, setMovieData] = useState([]);
  function handlerOpenPopup() {
    setOpenClosePopup(true);
  }
  function handlerClosePopup() {
    setOpenClosePopup(false);
  }

  useEffect(() => {
    apiMovies.getAllMovies()
    .then(function (arr) {
      setMovieData(arr);
    });
  }, []);

  return (
    <Switch>
      <Route exact path='/signin'>
        <Login />
      </Route>
      <Route exact path='/signup'>
        <Register />
      </Route>
      <Route exact path='/movies'>
        <PopupContext.Provider
          value={{ handlerOpenPopup, openClosePopup, handlerClosePopup, movieData }}
        >
          <Movies />
          <Popup>
            <Menu />
          </Popup>
        </PopupContext.Provider>
      </Route>
      <Route exact path='/saved-movies'>
        <PopupContext.Provider
          value={{ handlerOpenPopup, openClosePopup, handlerClosePopup }}
        >
          <SavedMovies />
          <Popup>
            <Menu />
          </Popup>
        </PopupContext.Provider>
      </Route>
      <Route exact path='/profile'>
        <Profile />
      </Route>
      <Route exact path='/'>
        <Header>
          <MainMenuUnauthorized />
        </Header>
        <Main />
        <Footer />
      </Route>
      {/* <Preloader /> */}
    </Switch>
  );
}

export default App;
