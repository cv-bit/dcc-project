import {  useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import arenaImage from '../../assets/images/arena-image.jpg'
import { diceRoller } from "../../utils/DiceRoller";

import {BiShield} from 'react-icons/bi'
import {GiBroadsword} from 'react-icons/gi'

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
        hero.damage > enemy.armor && setEnemyDamage((enemyDamage + hero.damage) - enemy.armor)
        hero.damage > enemy.armor && setHpWidth2(((enemy.tempStats.tempHp - (enemyDamage + hero.damage) + enemy.armor) / enemy.stats.hp))
        if(enemyDamage >= (enemy.tempStats.tempHp - hero.damage + enemy.armor)) {
            hero.tempStats.tempHp -= playerDamage
            hero.stats.xp += enemy.xp
            hero.gold += diceRoller(enemy.gold, true)
            alert('enemy died player has won' )
            localStorage.setItem('hero', JSON.stringify(hero))
            return window.location.href = '/beginning'
        }
        enemy.damage > hero.armor && setPlayerDamage((playerDamage + enemy.damage) - hero.armor)
        enemy.damage > hero.armor && setHpWidth1(((hero.tempStats.tempHp - (playerDamage + enemy.damage) + hero.armor) / hero.stats.hp))
        if(playerDamage >= hero.tempStats.tempHp - 1) {
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
        console.log(enemyDamage)
    }, [enemyDamage])

    return (
        <div className='combat-container min-width-100 min-height-100 flex-center-center column text-center' style={{backgroundImage: `url(${arenaImage})`}}>
            <div className='enemy-battle-container flex-justify-center'>
                { enemy && enemy.stats.hp &&
                    <div className="enemy-info-container">
                        <div className="flee-btn">
                            <Link className='home-btn' to='/beginning'>Flee</Link>
                            <h2>Battle</h2>
                        </div>
                        <div>
                            <img src={enemy.img} alt="enemy img" className="enemy-img" />
                            <h2>{enemy.name}</h2>
                            <p>hp: {enemy.tempStats.tempHp - enemyDamage}/{enemy.stats.hp}</p>
                            <div className="hp-guage">
                                <div className="hp-fill" style={{width: hpWidth2 * 100 +"%"}}></div>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className='hero-control-bar flex-align-center'>
                <div className="combat-hero-container flex">
                    <div>
                        <h2>{hero.name}</h2>
                        {<div className="flex-center-center">
                            {hero.armor > 0 && <div className="flex margin-5"><BiShield /> <p>{hero.armor}</p></div>}
                            <GiBroadsword /> <p>{hero.damage}</p>
                        </div>}
                        <p>hp: {hero.tempStats.tempHp - playerDamage}/{hero.stats.hp}</p>
                        <div className="hp-guage">
                            <div className="hp-fill" style={{width: hpWidth1 * 100 +"%"}}></div>
                        </div>
                    </div>
                    <div className="combat-hero-stats flex column">
                        <p>power: {hero.tempStats.tempPower}/{hero.stats.power}</p>
                        <p>magic: {hero.tempStats.tempMagic}/{hero.stats.magic}</p>
                        <p>speed: {hero.tempStats.tempSpeed}/{hero.stats.speed}</p>
                        <p>stamina: {hero.tempStats.tempStamina}/{hero.stats.stamina}</p>
                    </div>
                </div>
                <div className="flex-center-center">
                    <div>
                        <button className="combat-defend-btn">Defend</button>
                    </div>
                    <div className="flex column">
                        <button className='combat-attack-btn' onClick={() => Attack()}>Attack</button>
                        <button className='combat-item-btn' onClick={() => Items()}>Items</button>
                    </div>
                    <div >
                        <button className='combat-magic-btn'>Magic</button>
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