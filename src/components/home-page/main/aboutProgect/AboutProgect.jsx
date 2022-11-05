import React from 'react';
import './aboutProgect.css';

export default function AboutProject() {
  return (
    <section className='about-progect' id='about-progect'>
      <div className='wrapper'>
        <div className='subtitle-container about-progect__subtitle-container'>
          <h3 className='main-page-subtitle about-progect__main-page-subtitle'>
            О проекте
          </h3>
        </div>
        <div className='about-progect__content-container'>
          <div className='about-progect__text-container'>
            <h3 className='about-progect__subtitle'>
              Дипломный проект включал 5 этапов
            </h3>
            <p className='main-page-paragraph about-progect__main-page-paragraph'>
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className='about-progect__text-container'>
            <h3 className='about-progect__subtitle'>
              На выполнение диплома ушло 5 недель
            </h3>
            <p className='main-page-paragraph'>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="progressbar">
          <span className="progressbar__item">1 неделя</span>
          <span className="progressbar__item">4 недели</span>
          <span className="progressbar__item">Back-end</span>
          <span className="progressbar__item">Front-end</span>
        </div>
      </div>
    </section>
  );
}
