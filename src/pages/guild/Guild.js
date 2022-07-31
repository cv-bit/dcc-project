import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TrainingModal from '../../data/hero/heromodal/TrainingModal'
import WizardModal from './WizardModal'
import QuestModal from './QuestModal'

import Guildhall from '../../assets/images/guildhall.jpg'

import './guild.css'

const Guild = () => {

  const [training, setTraining] = useState(false)
  const [buyingMagic, setBuyingMagic] = useState(false)
  const [aquireQuest, setAquireQuest] = useState(false)

  const hero = JSON.parse(localStorage.getItem('hero'))

  const letsTrain = () => {
    setTraining(true)
  }

  const buyMagic = () => {
    setBuyingMagic(true)
  }

  const getQuests = () => {
    setAquireQuest(true)
  }

  const hire = () => {
    alert("no one will work with newbs like you come back when you've got some exp under your belt")
  }

  return (
    <div style={{backgroundImage: `url(${Guildhall})`}} className='guild-container min-width-100 min-height-100 flex-center-center column text-center'>
        <div className='guild-clerk-container '>
          <h2>Guild</h2> <Link className='home-btn margin-5' to='/beginning'>return to Town</Link>
          <p>coming soon</p>
          <p>from here you can aquire companions unlock story cards and go through training to learn cool abilities</p>
          <p>meet npc's</p>
          <div>
            <button className='guild-train-btn' onClick={() => letsTrain()}>Train</button>
            <button className='guild-magic-btn' onClick={() => buyMagic()}>Buy magic</button>
            <button className='guild-quest-btn' onClick={() => getQuests()}>get quests</button>
            <button className='guild-hire-btn' onClick={() => hire()}>hire a companion</button>
          </div>
          {training && <TrainingModal hero={hero} setTraining={setTraining}/>}
          {buyingMagic && <WizardModal hero={hero} setBuyingMagic={setBuyingMagic} />}
          {aquireQuest && <QuestModal hero={hero} setAquireQuest={setAquireQuest} />}
        </div>
    </div>
  )
}

export default Guild