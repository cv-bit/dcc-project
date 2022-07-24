import React from 'react'

import './enemycard.css'

const EnemyCard = ({enemy}) => {
    return (
        <div className='enemycard-container flex-center-center column'>
            <h2>{enemy.name}</h2>
            <div className='enemy-stats-container flex wrap'>
                <p>hp: {enemy.stats.hp}</p>
                <p>power: {enemy.stats.power}</p>
                <p>magic: {enemy.stats.magic}</p>
                <p>speed: {enemy.stats.speed}</p>
                <p>stamina: {enemy.stats.stamina}</p>
            </div>
            <p>{enemy.description}</p>
        </div>
    )
}

export default EnemyCard