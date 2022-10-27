import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Main from './home-page/main/Main.jsx';
import Footer from './shared/footer/Footer.jsx';
// import Main  from './main-page/main-tag/Main-home-page';
import Register from './register-page/register/Register';
import Login from './login-page/login/Login';
import Profile from './profile-page/profile/Profile';
// import NotFound404 from './page-404/page-404/NotFound404';
// import AboutTheProject  from '../components/main-page/aboutTheProject/AboutTheProject';
// import Technologies  from '../components/main-page/technologies/Technologies';
// import Profile  from '../components/main-page/profile/Profile';
import Movies from './movies-page/Movies';
import SavedMovies from './saved-movies-page/SavedMovies';
// import MainMenuAuthorized from './shared/main-menu-authorized/MainMenuAuthorized';
import MainMenuUnauthorized from './shared/main-menu-unauthorized/MainMenuUnauthorized.jsx';
import Header from './shared/header/Header';


function App() {
  return (
    <Switch>
      <Route exact path='/signup'>
        <Login />
      </Route>
      <Route exact path='/signin'>
        <Register />
      </Route>
      <Route exact path='/movies'>
        <Movies />
      </Route>
      <Route exact path='/profile'>
        <Profile />
      </Route>
      <Route exact path='/'>
        <Header>
            <MainMenuUnauthorized>
              <Link  to='/signup' className='main-menu-authorized__link'>Регистрация</Link>
              <Link  to='/signin' className='main-menu-authorized__link main-menu-authorized__link_bg'>Войти</Link>
          </MainMenuUnauthorized>
        </Header>
        <Main />
        <Footer />
      </Route>
    </Switch>
  );
}

export default App;
