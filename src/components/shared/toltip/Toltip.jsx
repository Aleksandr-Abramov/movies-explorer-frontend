import React from 'react';
import './toltip.css';


export default function Toltip({ children, handlerClosePopup }) {
  return (
    <div className='toltip'>
        <p className='toltip__text'>{children}</p>
        <button type='button' className='menu__btn-close menu__btn-close_toltip' onClick={handlerClosePopup} ></button>
    </div>
  );
}