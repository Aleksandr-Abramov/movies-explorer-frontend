import React from 'react';
import './navTab.css';

export default function NavTab() {
  return (
    <nav className='home-page-header__links'>
      <a className='home-page-header__link' href='/'>
        О проекте
      </a>
      <a className='home-page-header__link' href='/'>
        Технологии
      </a>
      <a className='home-page-header__link' href='/'>
        Студент
      </a>
    </nav>
  );
}
