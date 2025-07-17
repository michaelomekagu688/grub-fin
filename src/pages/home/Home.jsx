

import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './home.scss'
import RoundDiv from '../../components/roundDiv/RoundDiv'
import Middlediv from '../../components/middlediv/Middlediv'
import Lastdiv from '../../components/lastdiv/Lastdiv'

const Home = () => {
  return (
    <div className='home'>
        <Navbar />
       
        <div className='first-sec'>
            <h1> Market Segmentation </h1>
            <h5> Last 3 month </h5>
        </div>
        <div className='second-sec'>
            <div className='pages'> All </div>
            <div className='pages'> Top </div>
            <div className='pages'> Growing </div>
            <div className='pages'> Falling </div>
        </div>
        <RoundDiv />
        <Middlediv />
        <Lastdiv />
    </div>
  )
}

export default Home