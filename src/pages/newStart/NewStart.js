import React from 'react'
import { Link } from 'react-router-dom'

import './newStart.css'

const NewStart = () => {
  return (
    <div className='newStart-container min-width-100 min-height-100 flex-center-center'>
      <div className='text-center'>
        <h2>new game dialog</h2>
        <p>here you will be able to create your party to adventure with</p>
        <Link className='create-party-link' to="/beginning" >create a party</Link>
      </div>
    </div>
  )
}

export default NewStart