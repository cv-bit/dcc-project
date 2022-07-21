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
          <h2>Beginning</h2>
          <p>here you will be able to see your new party and choose a starting point</p>
          <Link className='battle-btn' to='/combat'>Test your hero's might</Link>
        </div>
        {
          myHero && <HeroCard hero={myHero} />
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