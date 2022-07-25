import React from 'react'
import { Link } from 'react-router-dom'

import './guild.css'

const Guild = () => {
  return (
    <div className='guild-container min-width-100 min-height-100 flex-center-center column text-center'>
        <h2>Guild</h2> <Link className='home-btn' to='/beginning'>return to Town</Link>
        <p>coming soon</p>
        <p>from here you can aquire companions unlock story cards and go through training to learn cool abilities</p>
        <p>meet npc's</p>
        <div>
          <button className='guild-train-btn'>Train</button>
          <button className='guild-magic-btn'>Buy magic</button>
        </div>
    </div>
  )
}

export default Guild