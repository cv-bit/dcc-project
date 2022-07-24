
import './herocard.css'

const HeroCard = ({hero, func}) => {

    return (
        <div className='herocard-container flex-center-center column' onClick={() => func(hero)}>
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
        </div>
    )
}

export default HeroCard