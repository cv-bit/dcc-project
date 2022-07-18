import React from 'react'
import StoryCard from '../../components/storycard/StoryCard'

import './beginning.css'

const Beginning = () => {
  return (
    <div className='beginning-container min-width-100 min-height-100 flex-center-center column'>
        <div className='text-center'>
          <h2>Beginning</h2>
          <p>here you will be able to see your new party and choose a starting point</p>
        </div>
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