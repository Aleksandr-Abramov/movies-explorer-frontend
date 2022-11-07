import React from 'react';
import './more-content.css';


export default function MoreContent({moreContent}) {
  return (
    <section className='more-content'>
        <div className='wrapper'>
            <button type='button' className='more-content__btn' onClick={moreContent}>Ещё</button>
        </div>
    </section>
  );
}