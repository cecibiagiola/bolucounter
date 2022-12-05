import React from 'react'
import './Button.css'

const Button = ( { text, clickButton, onHandleClick }) => {
  
  return (
    <button 
    className={ clickButton? 'click-button' : 'reset-button' }
    onClick={ onHandleClick }>
        {text}
    </button>
  );
}

export { Button }