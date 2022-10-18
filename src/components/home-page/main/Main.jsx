import React from 'react';
import './main.css';
import AboutProject from './aboutProgect/AboutProgect';
import AboutMe from './aboutMe/AboutMe';
import Technology from './technology/Technology';

export default function Main() {
  return (
    <main className='home-page-main'>
      <AboutProject />
      <Technology />
      <AboutMe />
    </main>
  );
}
