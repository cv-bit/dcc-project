import React, { useState } from 'react'
import { diceRoller } from '../../../utils/DiceRoller'
import {HiOutlinePlus} from 'react-icons/hi'
import { plusPower, plusMagic, plusSpeed, plusLuck } from '../HeroFunctions'

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
            
            <p>customize your hero with stat points</p>
            <br/>
            {rollResults > 0 && <p>stat points to distribute {rollResults}</p>}

            <div className=''>
                <div className='flex-center-center column width-100'>
                    <div className='flex width-100 margin-5'>
                        <p>power: {hero.stats.power}</p> <HiOutlinePlus className='stat-plus' onClick={() => rollResults > 0 && plusPower(hero) & setRollResuluts(rollResults -1)}/> 
                    </div>
                    <div className='flex width-100 margin-5'>
                        <p>magic: {hero.stats.magic}</p> <HiOutlinePlus className='stat-plus' onClick={() => rollResults > 0 && plusMagic(hero) & setRollResuluts(rollResults -1)}/>
                    </div>
                    <div className='flex width-100 margin-5'>
                        <p>speed: {hero.stats.speed}</p> <HiOutlinePlus className='stat-plus' onClick={() => rollResults > 0 && plusSpeed(hero) & setRollResuluts(rollResults -1)}/>
                    </div> 
                    <div className='flex width-100 margin-5'>
                        <p>luck: {hero.stats.luck}</p> <HiOutlinePlus className='stat-plus' onClick={() => rollResults > 0 && plusLuck(hero) & setRollResuluts(rollResults -1)}/> 
                    </div>
                </div>
                <div>
                
                </div>
            </div>
            <div>
                <button className='heromodal-close-btn' onClick={() => setHeroModal(false) }>close</button>
                <button className='heromodal-save-btn' onClick={() => saveHero()} >save hero</button>
            </div>
        </div>
    )
}

export default HeroModal