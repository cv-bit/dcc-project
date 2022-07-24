
import './enemycard.css'

const EnemyCard = ({enemy}) => {

    return (
        <div className='enemycard-container flex-center-center column'>
            <h2>{enemy.name}</h2>
            <div className='enemy-stats-container flex wrap'>
                <p>hp: {enemy.tempStats.tempHp}/{enemy.stats.hp}</p>
                <p>power: {enemy.tempStats.tempPower}/{enemy.stats.power}</p>
                <p>magic: {enemy.tempStats.tempMagic}/{enemy.stats.magic}</p>
                <p>speed: {enemy.tempStats.tempSpeed}/{enemy.stats.speed}</p>
                <p>stamina: {enemy.tempStats.tempStamina}/{enemy.stats.stamina}</p>
            </div>
            <p>{enemy.description}</p>
        </div>
    )
}

export default EnemyCard