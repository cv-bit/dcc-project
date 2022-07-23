import React from 'react'
import EnemyCard from '../../components/enemycard/EnemyCard'
import EnemyList from '../../data/enemies/EnemyList'
import { Link } from 'react-router-dom'

import './combat.css'

const Combat = () => {
    return (
        <div className='combat-container min-width-100 min-height-100 flex-center-center column text-center'>
            <h2>Arena</h2> <Link className='home-btn' to='/beginning'>return to Town</Link>
            <p>here you can fight monsters to gain fame, gold, items, and even unlock story cards</p>
            <div className='flex-center-center wrap text-center'>
                {EnemyList.map((enemy, key) => {
                    return <EnemyCard enemy={enemy} key={key} />
                })}
            </div>
        </div>
    )
}

export default Combat