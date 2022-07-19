import React from 'react'
import { Link } from 'react-router-dom'
import HeroList from '../../data/hero/HeroList'
import HeroCard from '../../components/herocard/HeroCard'

import './newStart.css'

const NewStart = () => {
  return (
    <div className='newStart-container min-width-100 min-height-100 flex-center-center column'>
      <div className='newStart-continue-container text-center height-100'>
        <h2>new game dialog</h2>
        <p>here you will be able to create your party to adventure with</p>
        <Link className='create-party-link' to="/beginning" >create a party</Link>
      </div>
      <div className='newStart-hero-container flex-center-center wrap text-center'>
        <h2>Pick your heros</h2>
        {
          HeroList.map((hero, key) => {
            return <HeroCard hero={hero} key={key} />
          })
        }
      </div>
    </div>
  )
}

export default NewStart