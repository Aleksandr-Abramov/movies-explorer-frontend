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
import { PopupContext, SearchContext } from './context/Context';
import apiMovies from '../utils/MoviesApi';
import Toltip from './shared/toltip/Toltip';
// import { useEffect } from 'react';

function App() {
  const [openClosePopup, setOpenClosePopup] = useState(false);
  const [movieData, setMovieData] = useState([]);
  const [searchMovieData, setSearchMovieData] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [nothingFound, setNothingFound] = useState(false);
  const [hideBtn, setHideBtn] = useState(false);
  const [preloaderCondition, setPreloaderCondition] = useState(true);
  const [lastSlice, setLastSlice] = useState(
  windowWidth >= 320 && windowWidth <= 425
    ? 5
    : windowWidth >= 426 && windowWidth <= 768
    ? 8
    : 12
  );

  //получение данных от сервиса
  useEffect(() => {
    apiMovies
      .getAllMovies()
      .then(function (arr) {
        setMovieData(arr);
      })
      .catch(
        (err) => {
          handlerOpenPopup();
        }
      );
  }, []);

    // вывод контента исходя из ширины экрана
  useEffect(() => {
    setLastSlice(
      windowWidth >= 320 && windowWidth <= 425
        ? 5
        : windowWidth >= 426 && windowWidth <= 768
        ? 8
        : 12
    );
  }, [windowWidth]);

  // вычисление ширины экрана
  useEffect(() => {
    window.addEventListener('resize', setWindowDimensions);
    return () => {
      window.removeEventListener('resize', setWindowDimensions);
    };
  }, []);

  useEffect(()=> {
    if(searchMovieData.length === 0) {
      if(JSON.parse(localStorage.getItem('films')).length > 0) {
        setNothingFound(false);
        return;
      }
      setNothingFound(true);
    }
    if(searchMovieData.length !== 0) {
      setNothingFound(false);
    }
  },[searchMovieData]);

  const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth);
  };
  function handlerOpenPopup() {
    setOpenClosePopup(true);
  }
  function handlerClosePopup() {
    setOpenClosePopup(false);
  }
  
  // сохранение данных в localstoreg, перезагрузка кнопки.
  function handlerOnSubmit(inputValueData, checked) {
   
    setTimeout(()=> {
      setPreloaderCondition(true);
      setLastSlice(
        windowWidth >= 320 && windowWidth <= 425
          ? 5
          : windowWidth >= 426 && windowWidth <= 768
          ? 8
          : 12
      );
      
      if(checked) {
        setSearchMovieData(movieData.filter((film) => {
          return film.duration < 40
          &&  film.nameRU.toUpperCase().includes(inputValueData.toUpperCase());
        }))
        localStorage.setItem('films', JSON.stringify(
          movieData.filter((film) => {
            return film.duration < 40
            &&  film.nameRU.toUpperCase().includes(inputValueData.toUpperCase());
          })));
          localStorage.setItem('request', JSON.stringify(inputValueData));
        return;
      }

      setSearchMovieData(movieData.filter((film) => film.nameRU.toUpperCase().includes(inputValueData.toUpperCase())));
      setHideBtn(false);
      localStorage.setItem('films', JSON.stringify(movieData.filter((film) => film.nameRU.toUpperCase().includes(inputValueData.toUpperCase()))));
      localStorage.setItem('request', JSON.stringify(inputValueData));
    }, 1000);
    setPreloaderCondition(false);
  }
  // отдача контента, скрытие кнопки
  function moreContent() {
    if (windowWidth >= 769) {
      setLastSlice(lastSlice + 3);
    }
    if (windowWidth >= 426 && windowWidth <= 768) {
      setLastSlice(lastSlice + 2);
    }
    if (windowWidth >= 320 && windowWidth <= 425) {
      setLastSlice(lastSlice + 1);
    }
    if (searchMovieData.length <= lastSlice) {
      setLastSlice(
        searchMovieData.length
      );
      setHideBtn(true);
    }
  }

  return (
    <Switch>
      <SearchContext.Provider value={{movieData, handlerOnSubmit, searchMovieData, moreContent, hideBtn, lastSlice, nothingFound, preloaderCondition}}>
        <PopupContext.Provider
          value={{
            handlerOpenPopup,
            openClosePopup,
            handlerClosePopup,
          }}
        >
          <Route exact path='/signin'>
            <Login />
          </Route>
          <Route exact path='/signup'>
            <Register />
          </Route>
          <Route exact path='/movies'>
            <Movies />
            <Popup>
              <Menu />
            </Popup>
          </Route>
          <Route exact path='/saved-movies'>
            <SavedMovies />
            <Popup>
              <Menu />
            </Popup>
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
          <Popup>
            <Toltip handlerClosePopup={handlerClosePopup}>
              Во время запроса произошла ошибка. Возможно, проблема с
              соединением или сервер недоступен. Подождите немного и попробуйте
              ещё раз
            </Toltip>
          </Popup>
        </PopupContext.Provider>
      </SearchContext.Provider>
    </Switch>
  );
}

export default App;
