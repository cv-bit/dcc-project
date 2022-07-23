import React from 'react'

import './itemcard.css'

const ItemCard = ({item}) => {

    const purchase = (item) => {
        if(localStorage.getItem('hero')) {
            let tempHero = JSON.parse(localStorage.getItem('hero'))

            if(tempHero.gold >= item.value) {
                tempHero.items.push(item)
                tempHero.gold -= item.value
                localStorage.setItem('hero', JSON.stringify(tempHero))
                alert( ' gold left ' + tempHero.gold + ' purchased ' + item.name)
            } else if (tempHero.gold < item.value) {
                alert(`are you trying to steal that, you don't have the gold for that come back when you're not broke`)
            }
        }
    }

  return (
    <div onClick={() => purchase(item)} className='item-container flex-center-center column'>
        <h2 onClick={item.useFunction}>{item.name}</h2>
        <p>cost: {item.value} gold</p>
        <p>type: {item.type} </p>
    </div>
  )
}

export default ItemCard