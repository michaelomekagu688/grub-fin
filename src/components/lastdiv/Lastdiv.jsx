
import React from 'react'
import './lastdiv.scss'
import { CallMadeOutlined } from '@mui/icons-material'

const Lastdiv = () => {
  return (
    <div className='lastdiv'>
        <div className='top'>
                <h2> 1280k </h2>
                <CallMadeOutlined className='icons' />
            </div>
            <div className='middle'>
                <p> Working Moms Loyalti </p>
            </div>
            <div className='bottom'>
                <div className='inner-top'>
                    <span> U.K </span>
                    <span> LA </span>
                </div>
                <div className='inner-bottom'>
                    <div><label></label></div>
                </div>
            </div>
    </div>
  )
}

export default Lastdiv