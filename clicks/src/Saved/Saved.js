import React from 'react'
import './Saved.css'

const Saved = ({saved} ) => {
  return (
    <div className='saved-container'>
      <p> Atendiste {saved} boludos</p>
    </div>
  )
}

export {Saved}