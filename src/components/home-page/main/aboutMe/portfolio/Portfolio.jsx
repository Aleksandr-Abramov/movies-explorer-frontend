import React from 'react';
import './portfolio.css';

export default function Portfolio() {
  return (
    <div className='portfolio'>
      <h5 className='portfolio__title'>Портфолио</h5>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
        <a
          target='blank'
          href='https://github.com/Aleksandr-Abramov/how-to-learn'
          className='portfolio__link'
        >
          Статичный сайт
        </a>
        </li>
        <li className='portfolio__item'>
        <a
          target='blank'
          href='https://github.com/Aleksandr-Abramov/russian-travel'
          className='portfolio__link'
        >
          Адаптивный сайт
        </a>
        </li>
        <li className='portfolio__item'>
        <a
          target='blank'
          href='https://github.com/Aleksandr-Abramov/react-mesto-api-full'
          className='portfolio__link'
        >
          Одностраничное приложение
        </a>
        </li>
      </ul>
      {/* <div className='portfolio__item'>
        <a
          target='blank'
          href='https://github.com/Aleksandr-Abramov/how-to-learn'
          className='portfolio__link'
        >
          Статичный сайт
        </a>
      </div>
      <div className='portfolio__item'>
        <a
          target='blank'
          href='https://github.com/Aleksandr-Abramov/russian-travel'
          className='portfolio__link'
        >
          Адаптивный сайт
        </a>
      </div>
      <div className='portfolio__item'>
        <a
          target='blank'
          href='https://github.com/Aleksandr-Abramov/react-mesto-api-full'
          className='portfolio__link'
        >
          Одностраничное приложение
        </a> */}
      {/* </div> */}
    </div>
  );
}
