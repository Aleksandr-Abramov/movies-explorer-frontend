import React from 'react';
import './popup.css';

export default function Popup({ children }) {
  return (
    <div className='popup'>
        {children}
    </div>
  );
}
