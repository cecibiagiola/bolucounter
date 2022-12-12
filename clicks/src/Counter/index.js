import React from 'react'
import './Counter.css'

const Counter = ({ numClicks } ) => {
  return (
    <div className='main-container'>
        { numClicks }
    </div>
  )
}

export {Counter}