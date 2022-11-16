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
    // console.log(res);
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
        sameSite: 'None',
        secure: true,
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
    console.log();
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

  logout() {
    return fetch(`${this._url}/signout`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    }).then((res) => this.dataValidation(res));
  }
}

const apiMoviesMain = new ApiMoviesMain(APIMAINURL);

export default apiMoviesMain;
