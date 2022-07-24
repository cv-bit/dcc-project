import React from 'react'
import { Link } from 'react-router-dom'

import './tavern.css'

const Tavern = () => {

  const Hero = JSON.parse(localStorage.getItem('hero'))

  const rest = () => {
    Hero.tempStats = {
      tempHp: Hero.stats.hp,
      tempPower: Hero.stats.power,
      tempMagic: Hero.stats.magic,
      tempSpeed: Hero.stats.speed,
      tempStamina: Hero.stats.stamina,
    }
    localStorage.setItem('hero', JSON.stringify(Hero))
    alert('you sleep well and regain your strength')
  }

  return (
    <div className='tavern-container min-width-100 min-height-100 flex-center-center column'>
        <h2>Tavern</h2> <Link className='home-btn' to='/beginning'>return to Town</Link>
        <p>coming soon</p>
        <p>here you can play mini games and rest</p>
        <button className='tavern-rest-btn' onClick={() => rest()}>Get a room</button>
    </div>
  )
}

export default Tavern