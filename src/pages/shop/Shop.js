import React from 'react'
import ItemCard from '../../components/itemcard/ItemCard'
import ItemList from '../../data/items/ItemList'

import './shop.css'

const Shop = () => {
  return (
    <div className='shop-container min-width-100 min-height-100 flex-center-center column text-center'>
        <h2>Market</h2>
        <p>coming soon</p>
        <p>black smiths, armorers, fishermen, alchemists, trinkets, odds and ends everything you need can be found here</p>
        <p>here you can buy all kinds of cool stuff from weapons to armor, potions and food, companions and even story cards</p>
        <p>meet npc's</p>
        <div className='item-list-container flex-center-center wrap text-center'>
          {
            ItemList.map((item, key) => {
              return <ItemCard item={item} key={key} />
            })
          }
        </div>
    </div>
  )
}

export default Shop