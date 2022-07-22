import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import StoryCard from '../../components/storycard/StoryCard'
import HeroCard from '../../components/herocard/HeroCard'

import './beginning.css'

const Beginning = () => {

  const [myHero, setMyHero] = useState({})

  useEffect(() => {
    setMyHero(JSON.parse(localStorage.getItem('hero')))
  }, [])

  return (
    <div className='beginning-container min-width-100 min-height-100 flex-center-center column'>
        <div className='beginning-container-intro flex-center-center column text-center'>
          <h2>Beginning Town</h2>
          <p>here you will be able to see your party and adventure</p>
          <div className='flex-center-center wrap'>
            <Link className='battle-btn' to='/combat'>Arena</Link>
            <Link className='market-btn' to='/market'>Market</Link>
            <Link className='guild-btn' to='/guild'>Guild Hall</Link>
            <Link className='tavern-btn' to='/tavern'>Tavern</Link>
            <Link className='docks-btn' to='/docks'>Ship Docks</Link>
          </div>
        </div>
        {
          myHero && myHero.name && <HeroCard hero={myHero} />
        }
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