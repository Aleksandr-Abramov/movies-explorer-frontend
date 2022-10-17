import React from 'react';
import './technology.css';

export default function Technology() {
  return (
    <section className='technology'>
      <div className='wrapper'>
        <div className='subtitle-container technology__subtitle-container'>
          <h3 className='main-page-subtitle technology__main-page-subtitle'>
            О проекте
          </h3>
        </div>
        <h2 className='main-page-title technology__main-page-title'>
          7 технологий
        </h2>
        <p className='main-page-paragraph technology__main-page-paragraph'>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <div className="technology-list">
          <div className="technology-list__item">HTML</div>
          <div className="technology-list__item">CSS</div>
          <div className="technology-list__item">JS</div>
          <div className="technology-list__item">React</div>
          <div className="technology-list__item">Git</div>
          <div className="technology-list__item">Express.js</div>
          <div className="technology-list__item">mongoDB</div>
        </div>
      </div>
    </section>
  );
}
