import React from 'react'
import ItemCard from '../../components/itemcard/ItemCard'
import CommonItemList from '../../data/items/CommonItemList'
import { Link } from 'react-router-dom'

import './shop.css'

const Shop = () => {

  console.log(CommonItemList)

  return (
    <div className='shop-container min-width-100 min-height-100 flex-center-center column text-center'>
        <h2>Market</h2> <Link className='home-btn' to='/beginning'>return to Town</Link>
        <p>coming soon</p>
        <p>black smiths, armorers, fishermen, alchemists, trinkets, odds and ends everything you need can be found here</p>
        <p>here you can buy all kinds of cool stuff from weapons to armor, potions and food, companions and even story cards</p>
        <p>meet npc's</p>
        <div className='item-list-container flex-center-center wrap text-center'>
          {
            CommonItemList.map((item, key) => {
              return <ItemCard item={item} key={key} />
            })
          }
        </div>
    </div>
  )
}

export default Shop