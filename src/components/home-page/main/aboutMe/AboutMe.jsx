import React from 'react';
import './aboutMe.css';
import Portfolio from './portfolio/Portfolio';
import profilePhoto1280 from '../../../../images/png/home-page/photo-1280.png';
import profilePhoto768 from '../../../../images/png/home-page/photo-768.png';
import profilePhoto320 from '../../../../images/png/home-page/photo-320.png';

export default function Profile() {
  return (
    <section className='aboutMe' id='aboutMe'>
      <div className='wrapper'>
        <div className='subtitle-container aboutMe__subtitle-container'>
          <h3 className='main-page-subtitle aboutMe__main-page-subtitle'>
            Студент
          </h3>
        </div>
        <div className='aboutMe__content-container'>
          <div className='aboutMe__text-container'>
            <h3 className='main-page-title aboutMe__main-page-title'>
              Алкусандр
            </h3>
            <h4 className='aboutMe__subtitle'>Фронтенд-разработчик, 30 лет</h4>
            <p className='main-page-paragraph aboutMe__main-page-paragraph'>
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a href='https://github.com/Aleksandr-Abramov' className='shared-link'>
              Github
            </a>
          </div>
          <picture>
            <source srcSet={profilePhoto320} media='(max-width: 425px)' />
            <source srcSet={profilePhoto768} media='(max-width: 768px)' />
            <img className='aboutMe__photo' src={profilePhoto1280} alt='A.Abramov' />
          </picture>
        </div>
        <Portfolio />
      </div>
    </section>
  );
}
