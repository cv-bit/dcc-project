import React, { useState } from 'react'
import { diceRoller } from '../../../utils/DiceRoller'
import {HiOutlinePlus} from 'react-icons/hi'
import { plusHp, plusPower, plusMagic, plusSpeed, plusLuck, plusStamina } from '../HeroFunctions'

import './heromodal.css'

const HeroModal = ({hero, setTraining}) => {
    
    const [rollResults, setRollResuluts] = useState()
    
    let statRolls = true

    const saveHero = () => {
        hero.stats.xp -= (hero.trainingLevel * 15) - 5
        hero.trainingLevel ++
        hero.gold -= (hero.trainingLevel * 7) - 2
        hero.powerLevel = (hero.stats.hp + hero.stats.power + hero.stats.magic + hero.stats.speed + hero.stats.stamina )* 5
        localStorage.setItem('hero', JSON.stringify(hero))
        alert('hero saved')
        setTraining(false)
        window.location.href = '/beginning'
    }

    const notReady = () => {
        alert("come back when you have some hair on your chest")
    }

    return (
        <div className='heromodal-container flex-center-center column'>
            <h2>Hello {hero.name}</h2>
            <h4 className='margin-5'>Trainer: care to do some training?</h4>
            <p>it's gonna cost you {(hero.trainingLevel * 7) - 2} gold</p>
            <p style={{marginTop: '0'}}>and you're gonna need {(hero.trainingLevel * 15) - 5} xp </p>
            <button className='heromodal-stat-btn' onClick={() => hero.stats.xp >= (hero.trainingLevel * 15) - 5 && hero.gold > (hero.trainingLevel * 7) - 2 ? (setRollResuluts(diceRoller(3, statRolls))) : notReady()}>train</button>
            <br/>
            {rollResults > 0 && <p>stat points to distribute {rollResults}</p>}

            <div className=''>
                <div className='flex-center-center width-100'>
                    <div>
                        <div className='flex-align-center width-100 margin-5'>
                            <p>hp: {hero.stats.hp}</p> <HiOutlinePlus className='stat-plus' onClick={() => rollResults > 0 && plusHp(hero) & setRollResuluts(rollResults -1)}/> 
                        </div>
                        <div className='flex-align-center width-100 margin-5'>
                            <p>power: {hero.stats.power}</p> <HiOutlinePlus className='stat-plus' onClick={() => rollResults > 0 && plusPower(hero) & setRollResuluts(rollResults -1)}/> 
                        </div>
                        <div className='flex-align-center width-100 margin-5'>
                            <p>magic: {hero.stats.magic}</p> <HiOutlinePlus className='stat-plus' onClick={() => rollResults > 0 && plusMagic(hero) & setRollResuluts(rollResults -1)}/>
                        </div>
                    </div>
                    <div>
                        <div className='flex-align-center width-100 margin-5'>
                            <p>speed: {hero.stats.speed}</p> <HiOutlinePlus className='stat-plus' onClick={() => rollResults > 0 && plusSpeed(hero) & setRollResuluts(rollResults -1)}/>
                        </div> 
                        <div className='flex-align-center width-100 margin-5'>
                            <p>stamina: {hero.stats.stamina}</p> <HiOutlinePlus className='stat-plus' onClick={() => rollResults > 0 && plusStamina(hero) & setRollResuluts(rollResults -1)}/> 
                        </div>
                        <div className='flex-align-center width-100 margin-5'>
                            <p>luck: {hero.stats.luck}</p> <HiOutlinePlus className='stat-plus' onClick={() => rollResults > 0 && plusLuck(hero) & setRollResuluts(rollResults -1)}/> 
                        </div>
                    </div>
                </div>
                <div>
                
                </div>
            </div>
            <div>
                <button className='heromodal-close-btn' onClick={() => setTraining(false) }>leave</button>
                <button className='heromodal-save-btn' onClick={() => saveHero()} >save hero</button>
            </div>
        </div>
    )
}

export default HeroModal