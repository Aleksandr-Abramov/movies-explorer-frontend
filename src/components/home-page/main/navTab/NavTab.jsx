import React from 'react';
import './navTab.css';

export default function NavTab() {
  return (
    <nav className='navTab'>
    <div className="wrapper">
    <ul className='navTab-menu'>
        <li className='navTab-menu__item'>
          <a href='/' className='navTab-menu__link'>
            О проекте
          </a>
        </li>
        <li className='navTab-menu__item'>
          <a href='/' className='navTab-menu__link'>
            Технологии
          </a>
        </li>
        <li className='navTab-menu__item'>
          <a href='/' className='navTab-menu__link'>
            Студент
          </a>
        </li>
      </ul>
    </div>
      
    </nav>
  );
}
