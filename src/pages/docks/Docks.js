import React from 'react'
import { Link } from 'react-router-dom'

import './docks.css'

const Docks = () => {
  return (
    <div className='docks-container min-width-100 min-height-100 flex-center-center column text-center'>
        <h2>Docks</h2> <Link className='home-btn' to='/beginning'>return to Town</Link>
        <p>coming soon</p>
        <p>here you can go to other cities and find new adventures</p>
        <p>meet npc's</p>
    </div>
  )
}

export default Docks