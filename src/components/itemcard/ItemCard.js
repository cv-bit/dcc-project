import React from 'react'

import './itemcard.css'

const ItemCard = ({item}) => {
  return (
    <div className='item-container flex-center-center column'>
        <h2 onClick={item.useFunction}>{item.name}</h2>
    </div>
  )
}

export default ItemCard