import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import StoryCard from '../../components/storycard/StoryCard'
import HeroCard from '../../components/herocard/HeroCard'
import QuestList from '../../data/stories/QuestList'
import HeroInfoCard from '../../components/herocard/HeroInfoCard'

import './beginning.css'

const Beginning = () => {

  const [myHero, setMyHero] = useState({})

  useEffect(() => {
    setMyHero(JSON.parse(localStorage.getItem('hero')))
  }, [])

  return (
    <div className='beginning-container min-width-100 min-height-100 flex-center-center column'>
        <div className='beginning-container-intro flex-center-center column text-center'>
          <h2>Beginning Town</h2> <Link className='home-btn' to='/'>return to home page</Link>
          <p>here you will be able to see your party and adventure</p>
          <div className='flex-center-center wrap'>
            <Link className='battle-btn' to='/arena'>Arena</Link>
            <Link className='market-btn' to='/market'>Market</Link>
            <Link className='guild-btn' to='/guild'>Guild Hall</Link>
            <Link className='tavern-btn' to='/tavern'>Tavern</Link>
            <Link className='docks-btn' to='/docks'>Ship Docks</Link>
            <Link className='forest-btn' to='/forest'>Forest</Link>
          </div>
        </div>
        {
          myHero && myHero.name && <div className='flex-justify-center wrap'>
          <HeroCard hero={myHero} /> <HeroInfoCard hero={myHero}/>
          </div>
        }
        <div className='beginning-story-container  flex-justify-center wrap'>
          {
            QuestList.map((quest, key) => {
              return <StoryCard quest={quest} key={key} />
            })
          }
        </div>
    </div>
  )
}

export default Beginning