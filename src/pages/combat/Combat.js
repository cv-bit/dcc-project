import {  useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

import './combat.css'

const Combat = () => {

    let hero = JSON.parse(localStorage.getItem('hero'))

    const location = useLocation();
    let enemy = location.state
    const [enemyDamage, setEnemyDamage] = useState(0)
    const [playerDamage, setPlayerDamage] = useState(0)
    const [hpWidth1, setHpWidth1] = useState((hero.tempStats.tempHp / hero.stats.hp))
    const [hpWidth2, setHpWidth2] = useState((enemy.tempStats.tempHp / enemy.stats.hp))
    
    const Attack = () => {
        setEnemyDamage(enemyDamage +1)
        setHpWidth2(((enemy.tempStats.tempHp - (enemyDamage + 1)) / enemy.stats.hp))
        if(enemyDamage === enemy.tempStats.tempHp - 1) {
            alert('enemy died player has won')
            window.location.href = '/beginning'
            hero.tempStats.tempHp -= playerDamage
            return localStorage.setItem('hero', JSON.stringify(hero))
        }
        setPlayerDamage(playerDamage + 1)
        setHpWidth1(((hero.tempStats.tempHp - (playerDamage + 1)) / hero.stats.hp))
        if(playerDamage === hero.tempStats.tempHp - 1) {
            alert('your hero was defeated')
            localStorage.removeItem('hero')
            window.location.href = '/'
        }
    }

    const Items = () => {
        let itemList = []
        if(hero.items.length < 1) alert('you have no items')
        if(hero.items.length > 0) {
            hero.items.forEach(item => {
                itemList.push(item.name)
            });
            alert('items: ' + itemList)
        }
    }

    useEffect(() => {
        console.log()
    }, [playerDamage])

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
                        <div className="hp-guage">
                            <div className="hp-fill" style={{width: hpWidth2 * 100 +"%"}}></div>
                        </div>
                    </div>
                }
            </div>
            <div className='hero-control-bar flex-align-center'>
                <div>
                    <h2>{hero.name}</h2>
                    <p>hp: {hero.tempStats.tempHp - playerDamage}/{hero.stats.hp}</p>
                    <div className="hp-guage">
                        <div className="hp-fill" style={{width: hpWidth1 * 100 +"%"}}></div>
                    </div>
                </div>
                <div className="flex-center-center">
                    <div >
                        <button className='combat-attack-btn' onClick={() => Attack()}>Attack</button>
                    </div>
                    <div className="flex column">
                        <button className='combat-magic-btn'>Magic</button>
                        <button className='combat-item-btn' onClick={() => Items()}>Items</button>
                    </div>
                    <div>
                        <button className="combat-defend-btn">Defend</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

// <div>
//     <button className='combat-s-attack-btn' >Strong Attack</button>
//     <button className='combat-d-attack-btn'>Double Strike</button>
// </div>

export default Combat