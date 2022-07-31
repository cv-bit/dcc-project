import React from 'react'
import levelOneMagic from '../../data/magic/LevelOneMagic'

const WizardModal = ({hero, setBuyingMagic}) => {
    
  const getMagic = () => {
    alert("we don't have our magic training license yet come back later")
  }

  return (
    <div className='wizard-modal-container flex-center-center column'>
        <h3>level one spells</h3>
        {
            levelOneMagic.map((magic, key) => {
                return <div className='magic-item margin-5 flex-align-center' key={key} onClick={() => getMagic()}>
                            <h4 style={{margin: '0', width: '100%'}}>{magic.name}: </h4>
                            <p>cost: {magic.value} gold</p>
                        </div>
            })
        }
        <button className='wizard-modal-btn' onClick={() => setBuyingMagic(false)}>leave</button>
    </div>
  )
}

export default WizardModal