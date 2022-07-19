import React from 'react'
import EnemyCard from '../../components/enemycard/EnemyCard'

import './combat.css'

const Combat = () => {
    return (
        <div className='combat-container min-width-100 min-height-100 flex-center-center column'>
            Combat
            <div className='flex-center-center wrap text-center'>
                <EnemyCard />
                <EnemyCard />
                <EnemyCard />
            </div>
        </div>
    )
}

export default Combat