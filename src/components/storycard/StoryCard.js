import React from 'react'

import './storycard.css'

const StoryCard = ({quest}) => {
    return (
        <div className='storycard-container flex-center-center column text-center wrap'>
            StoryCard
            <h2>{quest.name}</h2>
        </div>
    )
}

export default StoryCard