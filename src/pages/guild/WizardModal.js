import React from 'react'
import levelOneMagic from '../../data/magic/LevelOneMagic'

const WizardModal = ({hero, setBuyingMagic}) => {
    
  return (
    <div className='wizard-modal-container flex-center-center column'>
        {
            levelOneMagic.map((magic) => {
                return <div className='magic-item margin-5'>
                            <p>{magic.name}</p>
                            <p>cost: {magic.value} gold</p>
                        </div>
            })
        }
        <button className='wizard-modal-btn' onClick={() => setBuyingMagic(false)}>leave</button>
    </div>
  )
}

export default WizardModal