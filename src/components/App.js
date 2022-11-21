import React from 'react';
import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import Header from './shared/header/Header';
import Main from './home-page/main/Main.jsx';
import Footer from './shared/footer/Footer.jsx';
import Register from './register-page/register/Register';
import Login from './login-page/login/Login';
import Profile from './profile-page/profile/Profile';
// import NotFound404 from './page-404/page-404/NotFound404';
import Movies from './movies-page/Movies';
import SavedMovies from './saved-movies-page/SavedMovies';
import MainMenuUnauthorized from './shared/main-menu-unauthorized/MainMenuUnauthorized.jsx';
import MainMenuAuthorized from './shared/main-menu-authorized/MainMenuAuthorized';
import Menu from './menu/Menu';
import Popup from './shared/popup/Popup';
import ToltioPopup from './toltipPopup/ToltipPopup';
import { useState, useEffect } from 'react';
import { PopupContext, SearchContext, UsersContext, GlobalContext } from './context/Context';
import apiMovies from '../utils/MoviesApi';
import apiMoviesMain from '../utils/MainApi';
import Toltip from './shared/toltip/Toltip';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
// import { useLocation } from 'react-router-dom'


function App() {
  const [openClosePopup, setOpenClosePopup] = useState(false);
  const [openCloseToltipPopup, setOpenCloseToltipPopup] = useState(false);
  const [movieData, setMovieData] = useState([]);
  const [searchMovieData, setSearchMovieData] = useState([]);
  const [mainMovieData, setMainMovieData] = useState([]);
  const [searchMainMovieData, setSearchMainMovieData] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [nothingFound, setNothingFound] = useState(false);
  const [nothingFoundSavedMovies, setNothingFoundSavedMovies] = useState(false);
  const [hideBtn, setHideBtn] = useState(false);
  const [preloaderCondition, setPreloaderCondition] = useState(true);
  const [currentUser, setCurrentUser] = useState('');
  const [serverErrMessge, setServerErrMessge] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [lastSlice, setLastSlice] = useState(
  windowWidth >= 320 && windowWidth <= 425
    ? 5
    : windowWidth >= 426 && windowWidth <= 768
    ? 8
    : 12
  );

  const history = useHistory();

  /**
   * получение данных от сервиса beatfilm-movies
   */
  function getAllMainMovie() {
    apiMoviesMain
      .getAllMovies()
      .then((arr) => {
        setMainMovieData(arr);
      })
      .catch(
        (err) => {
          handlerOpenToltipPopup();
      }
    );
  }

  // console.log(mainMovieData);
    /**
   * получение данных от сервиса main-api
   */
     useEffect(() => {
      apiMovies
        .getAllMovies()
        .then((arr) => {
          setMovieData(arr);
        })
        .catch(
          (err) => {
            handlerOpenToltipPopup();
          }
        );
    }, []);


  /**
   * вывод контента исходя из ширины экрана
   */
  useEffect(() => {
    setLastSlice(
      windowWidth >= 320 && windowWidth <= 425
        ? 5
        : windowWidth >= 426 && windowWidth <= 768
        ? 8
        : 12
    );
  }, [windowWidth]);

  /**
   * определить ширину экрана
   */
  useEffect(() => {
    window.addEventListener('resize', setWindowDimensions);
    return () => {
      window.removeEventListener('resize', setWindowDimensions);
    };
  }, []);

  const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth);
  };
  function handlerOpenPopup() {
    setOpenClosePopup(true);
  }
  function handlerClosePopup() {
    setOpenClosePopup(false);
  }
  function handlerOpenToltipPopup() {
    setOpenCloseToltipPopup(true);
  }
  function handlerCloseToltipPopup() {
    setOpenCloseToltipPopup(false);
  }
  /**
   * Поиск пустой, вернуть плашку "нет данных". 
   * Если есть поисковые данные, вернуть данные,
   * иначе вывести данные из localstoreg,
   * localstoreg пустой, вернуть null 
   */
  useEffect(()=> {
    if(JSON.parse(localStorage.getItem('films')) === null) {
      return;
    }
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

  useEffect(()=> {

    if(JSON.parse(localStorage.getItem('saved-films')) === null) {
      return;
    }
    if(searchMainMovieData.length === 0) {
      if(JSON.parse(localStorage.getItem('saved-films')).length > 0) {
        setNothingFoundSavedMovies(false);
        return;
      }
      setNothingFoundSavedMovies(true);
    }
    if(searchMainMovieData.length !== 0) {
      setNothingFoundSavedMovies(false);
    }

  },[searchMainMovieData]);

    useEffect(()=>{
      const userData = JSON.parse(localStorage.getItem('user')) || '';
      if (userData === '') {
        setCurrentUser({});
        } else {
        setCurrentUser(userData)
        }
    },[])
  /**
   * сохранение данных в localstoreg,
   * перезагрузка кнопки "ЕЩЕ".
   * фильтрация поисковых данных.
   */
  function handlerOnSubmit(inputValueData, checked, location) {

    setTimeout(()=> {
      setPreloaderCondition(true);
      setLastSlice(
        windowWidth >= 320 && windowWidth <= 425
          ? 5
          : windowWidth >= 426 && windowWidth <= 768
          ? 8
          : 12
      );
      if (location.pathname === '/saved-movies') {
        if(checked) {
          setSearchMainMovieData(mainMovieData.filter((film) => {
            return film.duration < 40
            &&  film.nameRU.toUpperCase().includes(inputValueData.toUpperCase());
          }))
          localStorage.setItem('saved-films', JSON.stringify(
            mainMovieData.filter((film) => {
              return film.duration < 40
              &&  film.nameRU.toUpperCase().includes(inputValueData.toUpperCase());
            })));
            localStorage.setItem('saved-films-request', JSON.stringify(inputValueData));
          return;
        }
        setSearchMainMovieData(mainMovieData.filter((film) => film.nameRU.toUpperCase().includes(inputValueData.toUpperCase())));
        setHideBtn(false);
        localStorage.setItem('saved-films', JSON.stringify(mainMovieData.filter((film) => film.nameRU.toUpperCase().includes(inputValueData.toUpperCase()))));
        localStorage.setItem('saved-films-request', JSON.stringify(inputValueData));
        return;
      }
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
  /**
   * вывод добавочного контента, при нажатии на кнопку "ЕЩЕ".
   * Если данные закончились, спрятать кнопку.
   */
  function hendlerMoreContent() {
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
  /**
   * создать нового пользователя.
   */
  function createUser(data) {
    apiMoviesMain.createUser(data)
      .then(() => {
        setServerErrMessge('');
        login(data);
      })
      .catch((err) => {
        if(err === 409) {
          serverErrorMessage('Пользователь с таким email существует');
          return;
        }
        if(err === 400) {
          serverErrorMessage('Не удалось создать пользователя, данные не корректны');
          return;
        }
        serverErrorMessage('На сервере произошла ошибка');
      });
  }
  /**
   * вход, сохранение данных в carrentUser 
   */
  function login(data) {
    apiMoviesMain.login(data)
      .then((res) => {
        setServerErrMessge('');
        getUserData();
        setLoggedIn(true);
        getAllMainMovie()
        history.push('/movies');
      })
      .catch((err)=>{
        if(err === 401) {
          serverErrorMessage('Неправильные почта или пароль');
          return;
        }
        if(err === 400) {
          serverErrorMessage('данные не корректны');
          return;
        }
        serverErrorMessage('На сервере произошла ошибка');
        console.log(`login ${err}`);
      })
  }
  /**
   * Выход из приложения
   */
  function exitApp() {
    apiMoviesMain.logout()
      .then((res) => {
        localStorage.clear();
        setLoggedIn(false);
        history.push('/');
      });
  }
  /**
   * получение данных пользователя.
   */
  function getUserData() {
    apiMoviesMain.getUserData()
      .then((res) => {
        setServerErrMessge('');
        setCurrentUser({...res});
        localStorage.setItem('user', JSON.stringify({...res}));
      })
      .catch((err)=> {
        if(err === 404) {
          serverErrorMessage('Пользователь по указанному id не найден.');
          return;
        }
        if(err === 400) {
          serverErrorMessage('данные не корректны');
          return;
        }
        serverErrorMessage('На сервере произошла ошибка');
        console.log(`getUserData ${err}`);
    })
  }

  /**
   * редактирование данных пользователя
   */
  function handlerChangeUser(data) {
    apiMoviesMain.changeUser(data)
    .then((res) => {
      setServerErrMessge('');
      setCurrentUser({...res});
      localStorage.setItem('user', JSON.stringify({...res}));
    })
    .catch((err)=>{
      if(err === 409) {
        serverErrorMessage('переднный email уже есть в базе. Придумайте другой email.');
        return;
      }
      if(err === 400) {
        serverErrorMessage('необходимо ввести новый email');
        return;
      }
      serverErrorMessage('На сервере произошла ошибка');
      console.log(`getUserData ${err}`);
    })
  }

  function hendlerSaveMovies(filmData) {
    apiMoviesMain.createMovie(filmData)
      .then((res) => {
        console.log(res);
        getAllMainMovie();
      }).catch((err) => {
        console.log(err);
      })
    // console.log(filmData);
  }

  function hendlerDeleteMovies(filmData) {
    const movieID = mainMovieData.filter((item) => {
      return item.movieId === filmData.id;
    })
    apiMoviesMain.deleteMovie(movieID[0]._id)
      .then((res) => {
        console.log(res);
        getAllMainMovie();
      }).catch((err) => {
        console.log(err);
      })
  }

  function serverErrorMessage(message) {
    setServerErrMessge(message);
  }
  return (
    <Switch>
    <GlobalContext.Provider value={{ currentUser, loggedIn }}>
      <SearchContext.Provider value={{
        movieData,
        handlerOnSubmit,
        searchMovieData,
        searchMainMovieData,
        hendlerMoreContent,
        hideBtn,
        lastSlice,
        nothingFound,
        nothingFoundSavedMovies,
        preloaderCondition,
        hendlerSaveMovies,
        hendlerDeleteMovies
        }}>
        <PopupContext.Provider
          value={{
            handlerOpenPopup,
            openClosePopup,
            handlerClosePopup,
            openCloseToltipPopup,
            handlerCloseToltipPopup,
            handlerOpenToltipPopup
          }}
        >
        <UsersContext.Provider value={{ login, createUser, handlerChangeUser, serverErrMessge, exitApp }}>
          <Route exact path='/signin'>
            <Login />
          </Route>
          <Route exact path='/signup'>
            <Register />
          </Route>
          <ProtectedRoute path='/profile'  loggedIn={loggedIn} component={Profile}/>
        </UsersContext.Provider> 
          <ProtectedRoute path='/movies'  loggedIn={loggedIn} component={Movies}/>
          <ProtectedRoute path='/saved-movies'  loggedIn={loggedIn} component={SavedMovies}/>

        <Route exact path='/'>
            <Header>
              {loggedIn ? <MainMenuAuthorized/>: <MainMenuUnauthorized />}
            </Header>
            <Main />
            <Footer />
            <Popup>
              <Menu />
            </Popup>
          </Route>
          <ToltioPopup>
            <Toltip>
              Во время запроса произошла ошибка. Возможно, проблема с
              соединением или сервер недоступен. Подождите немного и попробуйте
              ещё раз
            </Toltip>
          </ToltioPopup>
        </PopupContext.Provider>
      </SearchContext.Provider>
    </GlobalContext.Provider>
    </Switch>
  );
}

export default App;
