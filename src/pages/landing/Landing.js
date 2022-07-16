import React from 'react'
import { diceRoller } from '../../utils/DiceRoller'

import './landing.css'

const Landing = () => {
  return (
    <div className='landing-container min-height-100 min-width-100 flex-center-center'>
      <button onClick={() => console.log(diceRoller(6))}>d6</button>
      <button onClick={() => console.log(diceRoller(20))}>d20</button>
    </div>
  )
}

export default Landing