import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import logo from '../../../images/svg/home-page/logo.svg';

export default function Header({ children, bg }) {
  return (
    <header className='header' style={{ background: bg && bg }}>
      <div className='wrapper wrapper-flex'>
        <Link to='/'>
          <img src={logo} alt='' className='authorized-header__logo' />
        </Link>
        {children}
      </div>
    </header>
  );
}
