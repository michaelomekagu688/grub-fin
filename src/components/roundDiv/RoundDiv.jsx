
import React from 'react'
import './rounddiv.scss'
import { CallMadeOutlined } from '@mui/icons-material'

const RoundDiv = () => {
  return (
    <div className='rounddiv'>
        <div className='top'>
            <h2> 1.9M </h2>
            <CallMadeOutlined className='icons' />
        </div>
        <div className='middle'>
            <p> Little League Dads </p>
        </div>
        <div className='bottom'>
            <div className='inner-top'>
                <span> USA </span>
                <span> EU </span>
            </div>
            <div className='inner-bottom'>
                <div><label></label></div>
            </div>
        </div>
    </div>
  )
}

export default RoundDiv