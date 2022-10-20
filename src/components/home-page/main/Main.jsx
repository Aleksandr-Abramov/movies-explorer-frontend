import React from 'react';
import './main.css';
import AboutProject from './aboutProgect/AboutProgect';
import AboutMe from './aboutMe/AboutMe';
import Technology from './technology/Technology';
import Promo from './promo/Promo';
import NavTab from './navTab/NavTab';


export default function Main() {
  return (
    <main className='home-page-main'>
      <Promo/>
      <NavTab/>
      <AboutProject />
      <Technology />
      <AboutMe />
    </main>
  );
}
