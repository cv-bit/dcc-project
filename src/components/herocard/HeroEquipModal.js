import React, { useEffect } from 'react'

const HeroEquipModal = ({hero, setIsEquip}) => {

    let heroEquipItems = []
    
    console.log(hero)

    hero.items.forEach(item => {
        if(item.type === 'weapon' || item.type === 'armor') {
            heroEquipItems.push(item)
        }
    });

    const equipItem = (item) => {
        hero.equip[item.type] = item
        if(item.type === 'weapon') {
            hero.damage += item.stats
        }
        if(item.type === 'armor') {
            hero.armor += item.stats
        }
        console.log(hero)
        localStorage.setItem('hero', JSON.stringify(hero))
        alert('hero has equiped the ' + item.name)
        setIsEquip(false)
    }

    const unEquipItem = (item) => {
        hero.equip[item.type] = ''
        if(item.type === 'weapon') {
            hero.damage -= item.stats
        }
        if(item.type === 'armor') {
            hero.armor -= item.stats
        }
        localStorage.setItem('hero', JSON.stringify(hero))
        alert('hero has unequiped the ' + item.name)
        setIsEquip(false)
    }

  return (
    <div className='hero-equip-modal-container flex-center-center column'>
    <button className='hero-equip-btn' onClick={() => setIsEquip(false)}>close</button>
        <h3>items to equip</h3>
        {
            heroEquipItems.map((item, key) => {
                return <p key={key} onClick={() => equipItem(item)}>{item.name}</p>
            })
        }
        <h3>equiped items</h3>
        {hero.equip.weapon && <p style={{color: 'blue'}} onClick={() => unEquipItem(hero.equip.weapon)}>{hero.equip.weapon.name}</p>}
        {hero.equip.armor.name && <p style={{color: 'blue'}} onClick={() => unEquipItem(hero.equip.armor)}>{hero.equip.armor.name}</p>}
    </div>
  )
}

export default HeroEquipModal