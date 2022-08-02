import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import QuestNodeArray from '../../data/stories/IntroQuest';

import './storypage.css'

const StoryPage = () => {

    const textElement = useRef()
    const optionButtonsElement = useRef()

    const location = useLocation();
    let quest = location.state

    console.log(textElement, optionButtonsElement)

    let state = {}

    function startGame() {
        state = {}
        showTextNode(1)
    }

    function showTextNode(textNodeIndex) {
        const textNode = QuestNodeArray.find(textNode => textNode.id === textNodeIndex)
        textElement.current.innerText = textNode.text
        while (optionButtonsElement.current.firstChild) {
        optionButtonsElement.current.removeChild(optionButtonsElement.current.firstChild)
        }
    
        textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.current.appendChild(button)
        }
        })
    }

    function showOption(option) {
        return option.requiredState == null || option.requiredState(state)
    }
    
    function selectOption(option) {
        const nextTextNodeId = option.nextText
        if (nextTextNodeId <= 0) {
        return startGame()
        }
        state = Object.assign(state, option.setState)
        showTextNode(nextTextNodeId)
    }

    useEffect(() => {
        startGame()
    }, [quest])

  return (
    <div className='story-container min-width-100 min-height-100 flex-center-center column text-center'>
        {quest.name}
        <div className="container">
            <div ref={textElement} id="text">Text</div>
            <div ref={optionButtonsElement} id="option-buttons" className="btn-grid">
            <button className="btn">Option 1</button>
            <button className="btn">Option 2</button>
            <button className="btn">Option 3</button>
            <button className="btn">Option 4</button>
            </div>
        </div>
    </div>
  )
}

export default StoryPage