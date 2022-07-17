import React from 'react'
import { Link } from 'react-router-dom'

const NewStart = () => {
  return (
    <div className='min-width-100 min-height-100 flex-center-center'>
      <p>new game dialog</p>
      <Link to="/beginning" >create a party</Link>
    </div>
  )
}

export default NewStart