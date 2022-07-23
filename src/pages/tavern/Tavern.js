import React from 'react'
import { Link } from 'react-router-dom'

import './tavern.css'

const Tavern = () => {
  return (
    <div className='tavern-container min-width-100 min-height-100 flex-center-center column'>
        <h2>Tavern</h2> <Link className='home-btn' to='/beginning'>return to Town</Link>
        <p>coming soon</p>
        <p>here you can play mini games and rest</p>
    </div>
  )
}

export default Tavern