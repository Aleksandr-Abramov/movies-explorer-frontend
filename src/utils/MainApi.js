import { APIMAINURL } from './constants';

// console.log(APIMAINURL);

class ApiMoviesMain {
  constructor(apiPathUrl) {
    this._url = apiPathUrl.url;
  }

  dataValidation(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }
  /**
   * создать нового пользователя.
   */
  createUser({ name, email, password }) {
    return fetch(`${this._url}/signup`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    }).then((res) => this.dataValidation(res));
  }

  /**
   * авторизация, вход
   */
  login({ email, password }) {
    return fetch(`${this._url}/signin`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        // sameSite: 'None',
        // secure: false,
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((res) => this.dataValidation(res));
  }
  //получить данные пользователя
  getUserData() {
    return fetch(`${this._url}/users/me`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    }).then((res) => this.dataValidation(res));
  }
  changeUser({ name, email }) {
    return fetch(`${this._url}/users/me`, {
      credentials: 'include',
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        sameSite: 'None',
        secure: true,
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    }).then((res) => this.dataValidation(res));
  }
  //выход 
  logout() {
    return fetch(`${this._url}/signout`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    }).then((res) => this.dataValidation(res));
  }

  //создать фильм 
  createMovie(data) {
    return fetch(`${this._url}/movies`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        // sameSite: 'None',
        // secure: false,
      },
      body: JSON.stringify({
        "country": data.country,
        "director": data.director,
        "duration": data.duration,
        "year": data.year,
        "description": data.description,
        "image": `https://api.nomoreparties.co/${data.image.url}`,
        "trailer": data.trailerLink,
        "nameRU": data.nameRU,
        "nameEN": data.nameEN,
        "thumbnail": "https://picsum.photos/200/300.jpg",
        "movieId": data.id
      }),
    }).then((res) => this.dataValidation(res));
  }
  //удаление фильма
  deleteMovie(idMovie) {
    return fetch(`${this._url}/movies/${idMovie}`, {
      credentials: 'include',
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    }).then((res) => this.dataValidation(res));
  }

  //получить все фильмы
  getAllMovies() {
    return fetch(`${this._url}/movies`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    }).then((res) => this.dataValidation(res));
  }
  getCookies(cookies) {
    return fetch(`${this._url}/getcookies`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        token: cookies,
      }),
    }).then((res) => this.dataValidation(res));
  }
}

const apiMoviesMain = new ApiMoviesMain(APIMAINURL);

export default apiMoviesMain;
