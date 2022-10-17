import React from 'react';
import './main.css';
import AboutProject from './about/AboutProgect';
import Profile from './profile/Profile';
import Technology from './technology/Technology';

export default function Main() {
  return (
    <main className='home-page-main'>
      <AboutProject />
      <Technology />
      <Profile />
    </main>
  );
}