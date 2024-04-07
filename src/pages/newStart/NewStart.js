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

  const chooseHero = (hero) => {
    setSelectedHero(hero)
    setHeroModal(true)
}

  return (
    <div className='newStart-container min-width-100 min-height-100 flex-center-center column'>
      <div className='newStart-continue-container flex-center-center column height-100'>
        <h2>new game dialog</h2> <Link className='home-btn' to='/'>return to home page</Link>
        <p className='text-center'>here you will be able to create a hero to adventure with</p>
        {hasHero && hasHero.name && <p style={{marginTop: "15px"}}>my hero: {hasHero.name}</p>}
        {hasHero && hasHero.name && <Link className='create-party-link' to="/beginning" >continue</Link>}
      </div>
      <div className='newStart-hero-container flex-center-center wrap text-center'>
        <h2>Choose your hero</h2>
        {
          HeroList.map((hero, key) => {
            console.log(hero)
            return <HeroCard hero={hero} key={key} func={chooseHero} />
          })
        }
      </div>
      {heroModal && <HeroModal hero={selectedHero} hasRolled={hasRolled} setHasRolled={setHasRolled} setHeroModal={setHeroModal}/>}
    </div>
  )
}

export default NewStart