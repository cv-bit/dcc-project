import React from 'react'

import './itemcard.css'

const ItemCard = ({item}) => {
  return (
    <div className='item-container flex-center-center column'>
        <h2 onClick={item.useFunction}>{item.name}</h2>
        <p>cost: {item.value} gold</p>
        <p>type: {item.type} </p>
    </div>
  )
}

export default ItemCard