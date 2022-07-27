import React from 'react'

const HeroInfoCard = ({hero}) => {
  return (
    <div className='heroinfo-container flex-center-center column text-center'>
        <h2>hero inventory</h2>
        <div className='heroinfo-item-container'>
          {
            hero.items.length > 0 ? hero.items.map((item, key) => {
                return <p key={key}>{item.name}</p>
            }) : <p >go to the market to get stuff you don't have anything</p>
          }
        </div>
        <p style={{color: 'yellow'}}>gold: {hero.gold}</p>
    </div>
  )
}

export default HeroInfoCard