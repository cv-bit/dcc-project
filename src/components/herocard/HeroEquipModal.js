import React from 'react'

const HeroEquipModal = ({hero, setIsEquip}) => {

    let heroEquipItems = []
    
    hero.items.forEach(item => {
        if(item.type === 'weapon' || item.type === 'armor') {
            heroEquipItems.push(item)
        }
    });

    const equipItem = (item) => {
        
        if(item.type === 'weapon') {
            hero.equip.weapon[item.loc].hasOwnProperty('stats') ? hero.damage -= hero.equip.weapon[item.loc].stats : console.log('no equiped item')
            hero.damage += item.stats
            hero.equip.weapon[item.loc] = item
            
        }
        if(item.type === 'armor') {
            hero.armor += item.stats
            hero.equip.armor[item.loc] = item
        }
        
        localStorage.setItem('hero', JSON.stringify(hero))
        console.log(hero)
        alert('hero has equiped the ' + item.name)
        setIsEquip(false)
    }

    const unEquipItem = (item) => {
        hero.equip[item.type][item.loc] = ''
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
        {hero.equip.weapon.rightArm.name && <p style={{color: 'blue'}} onClick={() => unEquipItem(hero.equip.weapon.rightArm)}>{hero.equip.weapon.rightArm.name}</p>}
        {hero.equip.weapon.leftArm.name && <p style={{color: 'blue'}} onClick={() => unEquipItem(hero.equip.weapon.leftArm)}>{hero.equip.weapon.leftArm.name}</p>}
        {hero.equip.armor.chest.name && <p style={{color: 'blue'}} onClick={() => unEquipItem(hero.equip.armor.chest)}>{hero.equip.armor.chest.name}</p>}
        {hero.equip.armor.legs.name && <p style={{color: 'blue'}} onClick={() => unEquipItem(hero.equip.armor.legs)}>{hero.equip.armor.legs.name}</p>}
        {hero.equip.armor.gloves.name && <p style={{color: 'blue'}} onClick={() => unEquipItem(hero.equip.armor.gloves)}>{hero.equip.armor.gloves.name}</p>}
        {hero.equip.armor.leftArm.name && <p style={{color: 'blue'}} onClick={() => unEquipItem(hero.equip.armor.leftArm)}>{hero.equip.armor.leftArm.name}</p>}
    </div>
  )
}

export default HeroEquipModal