import React from 'react'
import { Link } from 'react-router-dom'
import npcList from '../../data/npc/beginningNpcs'
import barImg from '../../assets/images/beginning-bar.jpg'

import './tavern.css'

const Tavern = () => {

  const Hero = JSON.parse(localStorage.getItem('hero'))

  const rest = () => {
    if(Hero.gold > 0) {
      alert('a room costs 1 gold')
      Hero.tempStats = {
        tempHp: Hero.stats.hp,
        tempPower: Hero.stats.power,
        tempMagic: Hero.stats.magic,
        tempSpeed: Hero.stats.speed,
        tempStamina: Hero.stats.stamina,
      }
      Hero.gold--
      localStorage.setItem('hero', JSON.stringify(Hero))
      alert('you sleep well and regain your strength')
      return window.location.href = '/beginning'
    } else if (Hero.gold === 0) {
      alert("come on love, I can't give it to you for free")
    }
  }

  const barmaid = npcList[0]
  const barmaidImg = barmaid.img

  const play = () => {
    alert('no one is here yet come back later to play cards or dice')
  }

  return (
    <div style={{backgroundImage: `url(${barImg})`}} className='tavern-container min-width-100 min-height-100 flex-center-center column'>
        <div className='barmaid-container flex-center-center column'>
          <h2>Tavern</h2> <Link className='home-btn' to='/beginning'>return to Town</Link>

          <div>
            <div className='barmaid-img' style={{backgroundImage: `url(${barmaidImg})`}}></div>
            <p>hi there :)!!</p>
            <p>I'm {barmaid.name}, how can I help you?</p>
          </div>
          <button className='tavern-rest-btn' onClick={() => rest()}>Get a room</button>
          <button className='tavern-games-btn' onClick={() => play()}>Play Games</button>
        </div>
    </div>
  )
}

export default Tavern