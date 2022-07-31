import React from 'react'
import QuestList from '../../data/stories/QuestList'

const QuestModal = ({hero, setAquireQuest}) => {
  return (
    <div className='quest-modal-container flex-center-center column'>
        <h3>entry level quests</h3>
        <div className='flex-justify-center wrap'>
          {
            QuestList.map((quest, key) => {
                return key > 0 && <div className='quest-item margin-5' key={key}>
                                        <h4 style={{margin: '0'}}>{quest.name}</h4>
                                        <p>power level req: {((quest.difficulty * 55) + 15) > 15 ? (quest.difficulty * 55) + 15 : 'entry level'} </p>
                                    </div>
            })
          }
        </div>
        <button className='wizard-modal-btn' onClick={() => setAquireQuest(false)}>leave</button>
    </div>
  )
}

export default QuestModal