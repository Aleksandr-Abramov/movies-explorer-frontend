import React from 'react';
import './more-content.css';


export default function MoreContent({hendlerMoreContent, hideBtn}) {
  return (
    <section className='more-content'>
        <div className='wrapper'>
            <button type='button' className={`more-content__btn ${hideBtn ?'more-content_none': ''}`} onClick={hendlerMoreContent}>Ещё</button>
        </div>
    </section>
  );
}