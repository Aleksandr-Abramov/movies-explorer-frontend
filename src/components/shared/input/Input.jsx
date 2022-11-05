import React from 'react';
import './input.css';

export default function Register({ type, name, id, labelName, minlength }) {
  return (
    <>
      <label htmlFor={id} className='shared-label'>{labelName}</label>
      <input type={type} name={name} id={id} className='shared-input' minLength={minlength}/>
    </>
  );
}
