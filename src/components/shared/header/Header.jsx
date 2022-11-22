import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import logo from '../../../images/svg/home-page/logo.svg';
import { useLocation } from 'react-router-dom';

export default function Header({ children }) {
  const location = useLocation();
  return (
    <header className='header' style={{ background: location.pathname !== '/' && '#202020' }}>
      <div className='wrapper wrapper-flex'>
        <Link to='/'>
          <img src={logo} alt='logo' className='authorized-header__logo' />
        </Link>
        {children}
      </div>
    </header>
  );
}
