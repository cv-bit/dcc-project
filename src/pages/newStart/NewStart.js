import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import HeroList from '../../data/hero/HeroList'
import HeroCard from '../../components/herocard/HeroCard'
import HeroModal from '../../data/hero/heromodal/HeroModal'

import './newStart.css'

const NewStart = () => {

  const [heroModal, setHeroModal] = useState(false)
  const [selectedHero, setSelectedHero] = useState(HeroList[0])
  const [hasHero, setHasHero] = useState({})
  const [hasRolled, setHasRolled] = useState(false)

  useEffect(() => {
    if(localStorage.getItem('hero')) {
      let tempHero = localStorage.getItem('hero')
      setHasHero(JSON.parse(tempHero))
    }
  }, [heroModal])

  return (
    <div className='newStart-container min-width-100 min-height-100 flex-center-center column'>
      <div className='newStart-continue-container flex-center-center column height-100'>
        <h2>new game dialog</h2>
        <p className='text-center'>here you will be able to create a hero to adventure with</p>
        <Link className='create-party-link' to="/beginning" >continue</Link>
        {hasHero && hasHero.name && "my hero: " + hasHero.name}
      </div>
      <div className='newStart-hero-container flex-center-center wrap text-center'>
        <h2>Pick your heros</h2>
        {
          HeroList.map((hero, key) => {
            return <HeroCard hero={hero} key={key} setSelectedHero={setSelectedHero} setHeroModal={setHeroModal} />
          })
        }
      </div>
      {heroModal && <HeroModal hero={selectedHero} hasRolled={hasRolled} setHasRolled={setHasRolled} setHeroModal={setHeroModal} />}
    </div>
  )
}

export default NewStart