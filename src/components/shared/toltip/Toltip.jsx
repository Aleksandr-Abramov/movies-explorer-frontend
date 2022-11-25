import React from 'react';
import './toltip.css';
import { GlobalContext } from '../../context/Context';
import { useContext } from 'react';
export default function Toltip({ children }) {
  const { handlerCloseToltipPopup } = useContext(GlobalContext);
  return (
    <div className='toltip'>
        <p className='toltip__text'>{children}</p>
        <button type='button' className='menu__btn-close menu__btn-close_toltip' onClick={handlerCloseToltipPopup} ></button>
    </div>
  );
}