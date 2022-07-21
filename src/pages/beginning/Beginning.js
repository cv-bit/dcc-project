import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import StoryCard from '../../components/storycard/StoryCard'

import './beginning.css'

const Beginning = () => {

  const [myHero, setMyHero] = useState({})

  useEffect(() => {
    setMyHero(JSON.parse(localStorage.getItem('hero')))
  }, [])

  return (
    <div className='beginning-container min-width-100 min-height-100 flex-center-center column'>
        <div className='beginning-container-intro flex-center-center column text-center'>
          <h2>Beginning</h2>
          <p>here you will be able to see your new party and choose a starting point</p>
          <Link className='battle-btn' to='/combat'>Test your hero's might</Link>
        </div>
        {myHero && myHero.name && myHero.name}
        {myHero && myHero.name && <div className='flex-center-center column'>
            <div style={{width: '300px', display: 'flex', justifyContent: 'space-between'}}>
              <div>
                <p>hp: {myHero.stats.hp}</p>
                <p>power: {myHero.stats.power}</p>
                <p>magic: {myHero.stats.magic}</p>
              </div>
              <div style={{width: '100px'}}>
                <p>speed: {myHero.stats.speed}</p>
                <p>stamina: {myHero.stats.stamina}</p>
                <p>luck: {myHero.stats.luck}</p>
              </div>
            </div>
            <p style={{width: '100%', textAlign: 'center'}}>xp: {myHero.stats.xp}</p>
          </div>}
        <div className='beginning-story-container  flex-justify-center wrap'>
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
        </div>
    </div>
  )
}

export default Beginning