import React from 'react'
import QuestList from '../../data/stories/QuestList'

const QuestModal = ({hero, setAquireQuest}) => {
  return (
    <div className='quest-modal-container flex-center-center column'>
        {
            QuestList.map((quest) => {
                return <div className='quest-item margin-5'>
                            <p>{quest.name}</p>
                            <p>power level req: {quest.difficulty * 60} </p>
                        </div>
            })
        }
        <button className='wizard-modal-btn' onClick={() => setAquireQuest(false)}>leave</button>
    </div>
  )
}

export default QuestModal