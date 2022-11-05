import React from 'react';
import './popup.css';
import { PopupContext } from '../../context/Context';
import { useContext } from 'react';

export default function Popup({ children }) {
  const { openClosePopup } = useContext(PopupContext);

  return (
    <div className={`popup ${openClosePopup ? 'popup__open':''}`}>
        {children}
    </div>
  );
}
