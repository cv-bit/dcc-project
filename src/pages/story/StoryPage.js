import { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import QuestNodeArray from '../../data/stories/mainquestline/IntroQuest';
import EnemyCard from '../../components/enemycard/EnemyCard'

import './storypage.css'

const StoryPage = () => {

    const [state, setState] = useState()

    const textElement = useRef()
    const optionButtonsElement = useRef()

    const location = useLocation();
    let quest = location.state


    function startGame() {
        setState()
        showTextNode(1)
    }

    function showTextNode(textNodeIndex) {
        const textNode = QuestNodeArray.find(textNode => textNode.id === textNodeIndex)
        console.log(textNode)
        textElement.current.innerText = textNode.text
        while (optionButtonsElement.current.firstChild) {
        optionButtonsElement.current.removeChild(optionButtonsElement.current.firstChild)
        }
    
        textNode.options.forEach(option => {
            setState(option.setState)
        if (showOption(option) && option.text !== undefined ) {
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
        setState(option.setState)
        showTextNode(nextTextNodeId)
    }

    useEffect(() => {
        startGame()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quest])

    useEffect(() => {
        console.log(state)
        state && state.storyState && localStorage.setItem('storyLocation', JSON.stringify(state.storyState))
    }, [state])

  return (
    <div className='story-container min-width-100 min-height-100 flex-center-center column text-center'>
        <h2 className="margin-5">{quest.name}</h2>
        <div className="container">
            <div ref={textElement} id="text">Text</div>
            <div ref={optionButtonsElement} id="option-buttons" className="btn-grid flex-center-center">
            <button className="btn">Option 1</button>
            <button className="btn">Option 2</button>
            <button className="btn">Option 3</button>
            <button className="btn">Option 4</button>
            </div>
        </div>
        {state && state.enemy && <h2 className="margin-5">An Enemy Appears!</h2>}
        {state && state.enemy && <Link to='/combat' state={state.enemy} ><EnemyCard enemy={state.enemy} /></Link>}
    </div>
  )
}

export default StoryPage