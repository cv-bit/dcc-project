import React from 'react'
import {Link} from 'react-router-dom'
import { diceRoller } from '../../utils/DiceRoller'

import './landing.css'

const Landing = () => {
  return (
    <div className='landing-container min-height-100 min-width-100 flex-center-center'>
      <div className='text-center'>
        <h2>Welcome</h2>
        <p>this page will be a welcome page and maybe have a mini game</p>
        <div className='flex-column margin-5'>
          <div>
            <button onClick={() => diceRoller(6)}>d6</button>
            <button onClick={() => diceRoller(20)}>d20</button>
          </div>
          
          <Link to="/start">start game</Link>
          <Link to='/beginning'>continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Landing