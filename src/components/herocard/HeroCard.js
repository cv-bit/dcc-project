
import './herocard.css'

const HeroCard = ({hero, func}) => {

    return (
        <div className='herocard-container flex-center-center column' onClick={() => func(hero)}>
            <h2>{hero.name}</h2>
            <div className='hero-stats-container flex wrap'>
                <p>hp: {hero.stats.hp}</p>
                <p>power: {hero.stats.power}</p>
                <p>magic: {hero.stats.magic}</p>
                <p>speed: {hero.stats.speed}</p>
                <p>stamina: {hero.stats.stamina}</p>
                <p>luck: {hero.stats.luck}</p>
                <p>xp: {hero.stats.xp}</p>
            </div>
            <p>focus: {hero.focus}</p>
        </div>
    )
}

export default HeroCard