
import { useState } from 'react'
import HeroEquipModal from './HeroEquipModal'

import './herocard.css'

const HeroCard = ({hero, func}) => {

    const [isEquip, setIsEquip] = useState(false)

    const equipItem = () => {
        setIsEquip(true)
    }

    return (
        <div className='herocard-container flex-center-center column' onClick={() => func && func(hero)}>
            <h2>{hero.name}</h2>
            <div className='hero-stats-container flex wrap'>
                <p>hp: {hero.tempStats.tempHp}/{hero.stats.hp}</p>
                <p>power: {hero.tempStats.tempPower}/{hero.stats.power}</p>
                <p>magic: {hero.tempStats.tempMagic}/{hero.stats.magic}</p>
                <p>speed: {hero.tempStats.tempSpeed}/{hero.stats.speed}</p>
                <p>stamina: {hero.tempStats.tempStamina}/{hero.stats.stamina}</p>
                <p>luck: {hero.stats.luck}</p>
                <p>xp: {hero.stats.xp}</p>
            </div>
            <p>focus: {hero.focus}</p>
            {
                hero.items.length > 0 && <div>
                <button className='hero-info-equip-btn'>items</button>
                <button className='hero-info-equip-btn' onClick={() => equipItem()}>equip</button>
                </div>
            }

            {isEquip && <HeroEquipModal hero={hero} setIsEquip={setIsEquip}/>}
        </div>
    )
}

export default HeroCard