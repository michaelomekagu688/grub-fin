

import { CalendarMonthOutlined, FilterAltOutlined, KeyboardBackspaceOutlined } from '@mui/icons-material'
import React from 'react'
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        <KeyboardBackspaceOutlined className='icons back' />
        <CalendarMonthOutlined className='icons' />
        <FilterAltOutlined className='icons' />
    </div>
  )
}

export default Navbar