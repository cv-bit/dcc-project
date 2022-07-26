import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { attackEnemy, attackHero } from '../../utils/CombatFunctions';

import './combat.css'

const Combat = () => {

    const location = useLocation();
    let enemy = location.state
    const [enemyDamage, setEnemyDamage] = useState(0)
    const [playerDamage, setPlayerDamage] = useState(0)

    let hero = JSON.parse(localStorage.getItem('hero'))

    const Attack = () => {
        setEnemyDamage(enemyDamage +1)
        if(enemyDamage === enemy.tempStats.tempHp - 1) {
            alert('enemy died player has won')
            window.location.href = '/beginning'
        }
        setPlayerDamage(playerDamage + 1)
        if(playerDamage === hero.tempStats.tempHp - 1) {
            alert('your hero was defeated')
            localStorage.removeItem('hero')
            window.location.href = '/start'
        }
    }

    const Items = () => {
        if(hero.items.length < 1) alert('you have no items')
        if(hero.items.length > 0) alert(JSON.stringify(hero.items))
    }

  return (
    <div className='combat-container min-width-100 min-height-100 flex-align-center column text-center'>
    <Link className='home-btn' to='/beginning'>Flee</Link>
    <h2>Battle</h2>
        <div className='enemy-battle-container flex-center-center'>
            { enemy && enemy.stats.hp &&
                <div className="enemy-info-container">
                    <img src={enemy.img} alt="enemy img" className="enemy-img" />
                    <h2>{enemy.name}</h2>
                    <p>hp: {enemy.tempStats.tempHp - enemyDamage}/{enemy.stats.hp}</p>
                </div>
            }
        </div>
        <div className='hero-control-bar flex-align-center'>
            <div>
                <h2>{hero.name}</h2>
                <p>hp: {hero.tempStats.tempHp - playerDamage}/{hero.stats.hp}</p>
            </div>
            <div>
                <button className='combat-attack-btn' onClick={() => Attack()}>Attack</button>
                <button className='combat-item-btn' onClick={() => Items()}>Items</button>
            </div>
        </div>
    </div>
  )
}

export default Combat