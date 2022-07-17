import React from 'react'
import { Link } from 'react-router-dom'

import './newStart.css'

const NewStart = () => {
  return (
    <div className='newStart-container min-width-100 min-height-100 flex-center-center'>
      <p>new game dialog</p>
      <Link className='create-party-link' to="/beginning" >create a party</Link>
    </div>
  )
}

export default NewStart