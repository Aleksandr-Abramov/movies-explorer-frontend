import React from 'react';
import './preloader.css';


export default function Preloader() {
  return (
    <section className='preloader'>
        <div className='wrapper'>
            <button type='button' className='preloader__btn'>Ещё</button>
        </div>
    </section>
  );
}