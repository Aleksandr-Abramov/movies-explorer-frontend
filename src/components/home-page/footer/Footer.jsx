import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer className='home-page-footer'>
      <div className='wrapper'>
        <div className='home-page-footer__title-container'>
          <h4 className='home-page-footer__title'>
            Учебный проект Яндекс.Практикум х BeatFilm.
          </h4>
        </div>
        <div className='home-page-footer__content-container'>
          <span className='home-page-footer__span'>© 2020</span>

          <div className='home-page-footer__links'>
            <a href='/' className='shared-link home-page-footer__shared-link'>
              Яндекс.Практикум
            </a>
            <a href='/' className='shared-link home-page-footer__shared-link'>
              Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
