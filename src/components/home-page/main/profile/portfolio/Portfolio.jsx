import React from 'react';
import './portfolio.css';
// import profilePhoto1280 from '../../../../images/png/home-page/photo-1280.png';
// import profilePhoto768 from '../../../../images/png/home-page/photo-768.png';
// import profilePhoto320 from '../../../../images/png/home-page/photo-320.png';

export default function Portfolio() {
  return (
    <div className='portfolio'>
      <h5 className='portfolio__title'>Портфолио</h5>
      <div className='portfolio__link-container'>
        <a href='/' className='portfolio__link'>
          Статичный сайт
        </a>
      </div>
      <div className='portfolio__link-container'>
        <a href='/' className='portfolio__link'>
          Адаптивный сайт
        </a>
      </div>
      <div className='portfolio__link-container'>
        <a href='/' className='portfolio__link'>
          Одностраничное приложение
        </a>
      </div>
    </div>
  );
}
