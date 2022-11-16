import { BEATIFULMOVIESURL } from './constants';

class ApiMovies {
  constructor(apiPathUrl) {
    this._url = apiPathUrl.url;
  }

  dataValidation(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  }

  getAllMovies() {
    return fetch(`${this._url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    }).then((res) => this.dataValidation(res));
  }
}
const apiMovies = new ApiMovies(BEATIFULMOVIESURL);

export default apiMovies;
