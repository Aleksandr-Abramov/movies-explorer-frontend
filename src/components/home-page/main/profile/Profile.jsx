import React from 'react';
import './profile.css';
import profilePhoto1280 from '../../../../images/png/home-page/photo-1280.png';
import profilePhoto768 from '../../../../images/png/home-page/photo-768.png';
import profilePhoto320 from '../../../../images/png/home-page/photo-320.png';

export default function Profile() {
  return (
    <section className='profile'>
      <div className='wrapper'>
        <div className='subtitle-container profile__subtitle-container'>
          <h3 className='main-page-subtitle profile__main-page-subtitle'>
            Студент
          </h3>
        </div>
        <div className='profile__content-container'>
          <div className='profile__text-container'>
            <h3 className='main-page-title profile__main-page-title'>
              Алкусандр
            </h3>
            <h4 className='profile__subtitle'>Фронтенд-разработчик, 30 лет</h4>
            <p className='main-page-paragraph profile__main-page-paragraph'>
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a href='/' className='shared-link'>
              Github
            </a>
          </div>
          <picture>
            <source srcSet={profilePhoto320} media='(max-width: 425px)' />
            <source srcSet={profilePhoto768} media='(max-width: 768px)' />
            <img className='profile__photo' src={profilePhoto1280} alt='A.Abramov' />
          </picture>
        </div>
        <div className="portfolio">
          <h5 className='portfolio__title'>Портфолио</h5>
          <div className='portfolio__link-container'>
            <a href="/" className='portfolio__link'>Статичный сайт</a>
          </div>
          <div className='portfolio__link-container'>
            <a href="/" className='portfolio__link'>Адаптивный сайт</a>
          </div>
          <div className='portfolio__link-container'>
            <a href="/" className='portfolio__link'>Одностраничное приложение</a>
          </div>
        </div>
      </div>
    </section>
  );
}
