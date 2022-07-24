import React from 'react'
import { Link } from 'react-router-dom'

import './forest.css'

const Forest = () => {
  return (
    <div className='forest-container min-width-100 min-height-100 flex-center-center column text-center'>
        <h2>Forest</h2> <Link className='home-btn' to='/beginning'>return to Town</Link>
        <p>coming soon</p>
        <p>here you will be able to hunt fish gather and explore the vast forest of beginning town</p>
    </div>
  )
}

export default Forest