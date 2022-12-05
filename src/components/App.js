import React from 'react'
import './App.css'
import { Route, Switch, useHistory, useLocation } from 'react-router-dom'
import Header from './shared/header/Header'
import Main from './home-page/main/Main.jsx'
import Footer from './shared/footer/Footer.jsx'
import Register from './register-page/register/Register'
import Login from './login-page/login/Login'
import Profile from './profile-page/profile/Profile'
import NotFound404 from './page-404/page-404/NotFound404'
import Movies from './movies-page/Movies'
import SavedMovies from './saved-movies-page/SavedMovies'
import MainMenuUnauthorized from './shared/main-menu-unauthorized/MainMenuUnauthorized.jsx'
import MainMenuAuthorized from './shared/main-menu-authorized/MainMenuAuthorized'
import Menu from './menu/Menu'
import Popup from './shared/popup/Popup'
import ToltioPopup from './toltipPopup/ToltipPopup'
import { useState, useEffect } from 'react'
import { GlobalContext } from './context/Context'
import apiMovies from '../utils/MoviesApi'
import apiMoviesMain from '../utils/MainApi'
import Toltip from './shared/toltip/Toltip'
import ProtectedRoute from './ProtectedRoute/ProtectedRoute'

function App() {
  const [openClosePopup, setOpenClosePopup] = useState(false)
  const [openCloseToltipPopup, setOpenCloseToltipPopup] = useState(false)
  const [movieData, setMovieData] = useState([])
  const [renderStartMovie, setRenderStartMovie] = useState(false)
  
  const [mainMovieData, setMainMovieData] = useState([])
  const [searchMovieData, setSearchMovieData] = useState([])
  const [searchMainMovieData, setSearchMainMovieData] = useState([])
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [nothingFound, setNothingFound] = useState(false)
  const [nothingFoundSavedMovies] = useState(true)
  const [hideBtn, setHideBtn] = useState(false)
  const [preloaderCondition, setPreloaderCondition] = useState(true)
  const [currentUser, setCurrentUser] = useState('')
  const [serverErrMessge, setServerErrMessge] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [lastSlice, setLastSlice] = useState(
    windowWidth >= 320 && windowWidth <= 425
      ? 5
      : windowWidth >= 426 && windowWidth <= 768
      ? 8
      : 12
  )

  const history = useHistory()
  const location = useLocation()
  const [locationPath] = useState(location.pathname)
  /**
   * получение данных от сервиса beatfilm-movies
   */
  function getAllMainMovie() {
    apiMoviesMain
      .getAllMovies()
      .then((arr) => {
        setMainMovieData(arr)
      })
      .catch((err) => {
        handlerOpenToltipPopup()
        return
      })
  }

  /**
   * получение данных от сервиса main-api
   */
  useEffect(() => {
    apiMovies
      .getAllMovies()
      .then((arr) => {
        setMovieData(arr)
      })
      .catch((err) => {
        handlerOpenToltipPopup()
      })
    apiMoviesMain
      .getCookies(localStorage.getItem('cookie'))
      .then((res) => {
        if (res.access === true) {
          setLoggedIn(true)
          setRenderStartMovie(true)
          getUserData()
          getAllMainMovie()
          history.push(locationPath)
        }
        if (res.access === false) {
          TokenFalseExitApp()
        }
      })
      .catch((err) => {
        TokenFalseExitApp()
      })
  }, [])

  useEffect(() => {
    if (location.pathname !== '/saved-movies') {
      setSearchMainMovieData([])
    }
    if (location.pathname === '/signin' || location.pathname === '/signup' ) {
      serverErrorMessage('')
    }
  }, [location.pathname])

  useEffect(() => {
    if (location.pathname === '/saved-movies') {
      setRenderStartMovie(true)
    }
  }, [location.pathname])
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
    )
  }, [windowWidth])

  /**
   * определить ширину экрана
   */
  useEffect(() => {
    window.addEventListener('resize', setWindowDimensions)
    return () => {
      window.removeEventListener('resize', setWindowDimensions)
    }
  }, [])

  const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth)
  }
  function handlerOpenPopup() {
    setOpenClosePopup(true)
  }
  function handlerClosePopup() {
    setOpenClosePopup(false)
  }
  function handlerOpenToltipPopup() {
    setOpenCloseToltipPopup(true)
  }
  function handlerCloseToltipPopup() {
    setOpenCloseToltipPopup(false)
  }
  /**
   * Поиск пустой, вернуть плашку "нет данных".
   * Если есть поисковые данные, вернуть данные,
   * иначе вывести данные из localstoreg,
   * localstoreg пустой, вернуть null
   */
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('films')) === null) {
      return
    }
    if (searchMovieData.length === 0) {
      if (JSON.parse(localStorage.getItem('films')).length > 0) {
        setNothingFound(false)
        return
      }
      setNothingFound(true)
    }
    if (searchMovieData.length !== 0) {
      setNothingFound(false)
    }
  }, [searchMovieData])

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user')) || ''
    if (userData === '') {
      setCurrentUser({})
    } else {
      setCurrentUser(userData)
    }
  }, [])
  /**
   * сохранение данных в localstoreg,
   * перезагрузка кнопки "ЕЩЕ".
   * фильтрация поисковых данных.
   */

  function handlerOnSubmit(inputValueData, checked, location) {
    setTimeout(() => {
      setPreloaderCondition(true)
      setLastSlice(
        windowWidth >= 320 && windowWidth <= 425
          ? 5
          : windowWidth >= 426 && windowWidth <= 768
          ? 8
          : 12
      )

      const mainMovieDataIDs = mainMovieData.map((film) => film.movieId)
      // console.log(mainMovieDataIDs)
      if (location.pathname === '/saved-movies') {
        if (checked) {
          setSearchMainMovieData(
            mainMovieData.filter((film) => {
              return (
                film.duration < 40 &&
                film.nameRU.toUpperCase().includes(inputValueData.toUpperCase())
              )
            })
          )
          setRenderStartMovie(false)
          return
        }
        setSearchMainMovieData(
          mainMovieData.filter((film) =>
            film.nameRU.toUpperCase().includes(inputValueData.toUpperCase())
          )
        )
        setHideBtn(false)
        setRenderStartMovie(false)

        return
      }
      if (checked) {
        const movieSearchDataChecked = movieData.filter((film) => {
          return (
            film.duration < 40 &&
            film.nameRU.toUpperCase().includes(inputValueData.toUpperCase())
          )
        })
        setSearchMovieData(
          movieSearchDataChecked
          // movieSearchDataChecked.map((film)=> {
          //   if(mainMovieDataIDs.includes(film.id)) {
          //     film['isSaved'] = true
          //   } else {
          //     film['isSaved'] = false
          //   }
          //   return film;
          // })
        )
        localStorage.setItem(
          'films',
          JSON.stringify(
            movieSearchDataChecked
            // movieSearchDataChecked.map((film)=> {
            //   if(mainMovieDataIDs.includes(film.id)) {
            //     film['isSaved'] = true
            //   } else {
            //     film['isSaved'] = false
            //   }
            //   return film;
            // })
          )
        )
        localStorage.setItem('request', JSON.stringify(inputValueData))
        return
      }
      const movieSearchData = movieData.filter((film) => {
        return film.nameRU
          .toUpperCase()
          .includes(inputValueData.toUpperCase())
      })

      setSearchMovieData(
        movieSearchData
        // movieSearchData.map((film)=> {
        //   if(mainMovieDataIDs.includes(film.id)) {
        //     film['isSaved'] = true
        //   } else {
        //     film['isSaved'] = false
        //   }
        //   return film;
        // })
        
      )
      setHideBtn(false)

      localStorage.setItem(
        'films',
        JSON.stringify(
          movieSearchData
          // movieSearchData.map((film)=> {
          //   if(mainMovieDataIDs.includes(film.id)) {
          //     film['isSaved'] = true
          //   } else {
          //     film['isSaved'] = false
          //   }
          //   return film;
          // })
        )
      )
      localStorage.setItem('request', JSON.stringify(inputValueData))
    }, 1000)
    setPreloaderCondition(false)
  }
  /**
   * вывод добавочного контента, при нажатии на кнопку "ЕЩЕ".
   * Если данные закончились, спрятать кнопку.
   */
  function hendlerMoreContent() {
    if (windowWidth >= 769) {
      setLastSlice(lastSlice + 3)
    }
    if (windowWidth >= 426 && windowWidth <= 768) {
      setLastSlice(lastSlice + 2)
    }
    if (windowWidth >= 320 && windowWidth <= 425) {
      setLastSlice(lastSlice + 1)
    }
    if (searchMovieData.length <= lastSlice) {
      console.log(searchMovieData.length, lastSlice);
      setLastSlice(searchMovieData.length)
      setHideBtn(true)
    }
  }
  /**
   * создать нового пользователя.
   */
  function createUser(data) {
    apiMoviesMain
      .createUser(data)
      .then(() => {
        setServerErrMessge('')
        login(data)
      })
      .catch((err) => {
        if (err === 409) {
          serverErrorMessage('Пользователь с таким email существует')
          return
        }
        if (err === 400) {
          serverErrorMessage(
            'Не удалось создать пользователя, данные не корректны'
          )
          return
        }
        serverErrorMessage('На сервере произошла ошибка')
        return
      })
  }
  /**
   * вход, сохранение данных в carrentUser
   */
  function login(data) {
    apiMoviesMain
      .login(data)
      .then((res) => {
        setServerErrMessge('')
        getUserData()
        setLoggedIn(true)
        getAllMainMovie()
        setSearchMovieData([])
        setSearchMainMovieData([])
        history.push('/movies')
        localStorage.setItem('cookie', res.cookie)
      })
      .catch((err) => {
        if (err === 401) {
          serverErrorMessage('Неправильные почта или пароль')
          return
        }
        if (err === 400) {
          serverErrorMessage('данные не корректны')
          return
        }
        serverErrorMessage('На сервере произошла ошибка')
        return
      })
  }
  /**
   * Выход из приложения
   */
  function exitApp() {
    apiMoviesMain.logout().then((res) => {
      setLoggedIn(false)
      setSearchMovieData([])
      setSearchMainMovieData([])
      localStorage.clear()
      history.push('/')
    })
  }
  function TokenFalseExitApp() {
    apiMoviesMain.logout().then((res) => {
      setLoggedIn(false)
      setSearchMovieData([])
      setSearchMainMovieData([])
      localStorage.clear()
    })
  }
  /**
   * получение данных пользователя.
   */
  function getUserData() {
    apiMoviesMain
      .getUserData()
      .then((res) => {
        setServerErrMessge('')
        setCurrentUser({ ...res })
        localStorage.setItem('user', JSON.stringify({ ...res }))
      })
      .catch((err) => {
        if (err === 404) {
          serverErrorMessage('Пользователь по указанному id не найден.')
          return
        }
        if (err === 400) {
          serverErrorMessage('данные не корректны')
          return
        }
        serverErrorMessage('На сервере произошла ошибка')
        return
      })
  }

  /**
   * редактирование данных пользователя
   */

  function handlerChangeCurrentUser(data, currentUser) {
    setCurrentUser({ _id: currentUser._id, ...data })
  }
  function handlerChangeUser(data) {
    apiMoviesMain
      .changeUser(data)
      .then((res) => {
        setServerErrMessge(
          `Обнавленные данные: username: ${res.name}, email: ${res.email}`
        )
        localStorage.setItem('user', JSON.stringify({ ...res }))
      })
      .catch((err) => {
        if (err === 409) {
          serverErrorMessage(
            'переднный email уже есть в базе. Придумайте другой email.'
          )
          return
        }
        if (err === 400) {
          serverErrorMessage('необходимо ввести новый email')
          return
        }
        serverErrorMessage('На сервере произошла ошибка')
        return
      })
  }

  function hendlerSaveMovies(filmData) {
    apiMoviesMain
      .createMovie(filmData)
      .then((res) => {
        getAllMainMovie()
        setSearchMainMovieData([res, ...mainMovieData])
      })
      .catch((err) => {
        if (err === 400) {
          serverErrorMessage(
            'Переданы некорректные данные при добавлении фильма.'
          )
          return
        }
        serverErrorMessage('На сервере произошла ошибка')
        return
      })
  }

  function hendlerDeleteMovies(filmData) {
    const [movieID] = mainMovieData.filter((item) => {
      return item.movieId === filmData.id
    })
    apiMoviesMain
      .deleteMovie(movieID._id)
      .then((res) => {
        getAllMainMovie()
        setSearchMainMovieData((prevState) => {
          return prevState.filter((element) => {
            return element._id !== res._id
          })
        })
      })
      .catch((err) => {
        if (err === 404) {
          serverErrorMessage('Фильм с указанным _id не найден')
          return
        }
        if (err === 403) {
          serverErrorMessage('Вы не можите удалять чужой фильм')
          return
        }
        if (err === 400) {
          serverErrorMessage('Переданны некорректные данные')
          return
        }
        serverErrorMessage('На сервере произошла ошибка')
        return
      })
  }
  function hendlerDeleteMainMovies(filmData) {
    apiMoviesMain
      .deleteMovie(filmData)
      .then((res) => {
        getAllMainMovie()
        setSearchMainMovieData((prevState) => {
          return prevState.filter((element) => {
            return element._id !== res._id
          })
        })
      })
      .catch((err) => {
        if (err === 404) {
          serverErrorMessage('Фильм с указанным _id не найден')
          return
        }
        if (err === 403) {
          serverErrorMessage('Вы не можите удалять чужой фильм')
          return
        }
        if (err === 400) {
          serverErrorMessage('Переданны некорректные данные')
          return
        }
        serverErrorMessage('На сервере произошла ошибка')
        return
      })
  }

  function serverErrorMessage(message) {
    setServerErrMessge(message)
  }
  return (
    <GlobalContext.Provider
      value={{
        currentUser,
        loggedIn,
        movieData,
        renderStartMovie,
        setSearchMainMovieData,
        mainMovieData,
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
        hendlerDeleteMovies,
        hendlerDeleteMainMovies,
        handlerOpenPopup,
        openClosePopup,
        handlerClosePopup,
        openCloseToltipPopup,
        handlerCloseToltipPopup,
        handlerOpenToltipPopup,
        handlerChangeUser,
        serverErrMessge,
        exitApp,
        setServerErrMessge,
        login,
        createUser,
        handlerChangeCurrentUser,
        setSearchMovieData,
      }}
    >
      <Switch>
        <Route exact path='/signin'>
          <Login />
        </Route>
        <Route exact path='/signup'>
          <Register />
        </Route>
        <ProtectedRoute
          path='/profile'
          loggedIn={loggedIn}
          component={Profile}
        />
        <ProtectedRoute path='/movies' loggedIn={loggedIn} component={Movies} />
        <ProtectedRoute
          path='/saved-movies'
          loggedIn={loggedIn}
          component={SavedMovies}
        />
        <Route exact path='/'>
          <Header>
            {loggedIn ? <MainMenuAuthorized /> : <MainMenuUnauthorized />}
          </Header>
          <Main />
          <Footer />
          <Popup>
            <Menu />
          </Popup>
          <ToltioPopup>
            <Toltip>
              Во время запроса произошла ошибка. Возможно, проблема с
              соединением или сервер недоступен. Подождите немного и попробуйте
              ещё раз
            </Toltip>
          </ToltioPopup>
        </Route>
        <Route path='*'>
          <NotFound404 />
        </Route>
      </Switch>
    </GlobalContext.Provider>
  )
}

export default App
