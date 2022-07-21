import React, { useState } from 'react'
import { diceRoller } from '../../../utils/DiceRoller'

import './heromodal.css'

const HeroModal = ({hero, setHeroModal}) => {
    
    const [rollResults, setRollResuluts] = useState()
    const [hasRolled, setHasRolled] = useState(true)
    
    let statRolls = true

    const saveHero = () => {
        localStorage.setItem('hero', JSON.stringify(hero))
        alert('hero saved')
        setHeroModal(false)
    }

    return (
        <div className='heromodal-container flex-center-center column'>
            <button className='heromodal-stat-btn' onClick={() => hasRolled && (setRollResuluts(diceRoller(6, statRolls)) & setHasRolled(false))}>roll for stat points</button>
            <p>you can roll once</p>
            <h2>{hero.name}</h2>
            {rollResults > 0 && <p>stat points to distribute {rollResults}</p>}
            <p>customize your hero with stat points</p>
            <div className=''>
                <div>
                    <p>power: {hero.stats.power}</p>
                    <p>magic: {hero.stats.magic}</p>
                    <p>speed: {hero.stats.speed}</p>
                    <p>luck: {hero.stats.luck}</p>
                </div>
                <div>
                
                </div>
            </div>
            <button className='heromodal-close-btn' onClick={() => setHeroModal(false) }>close</button>
            <button className='heromodal-save-btn' onClick={() => saveHero()} >save hero</button>
        </div>
    )
}

export default HeroModal