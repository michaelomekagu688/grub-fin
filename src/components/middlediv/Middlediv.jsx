
import { CallMadeOutlined } from '@mui/icons-material'
import './middlediv.scss'
import React from 'react'

const Middlediv = () => {
  return (
    <div className='middlediv'>
        <div className='top'>
            <h2> 2.3M </h2>
            <CallMadeOutlined className='icons' />
        </div>
        <div className='middle'>
            <p> BTS Shoppers </p>
        </div>
        <div className='bottom'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default Middlediv