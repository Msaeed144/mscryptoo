import React from 'react'
import styels from '../styles/HomePage.module.css'
import NavbarS from './templates/NavbarS'
import MarketBox from './templates/MarketBox'


function HomePage() {
  return (
    <div className={`${styels.homeContainer}`}>
      <NavbarS />
      <MarketBox />
    </div>
  )
}

export default HomePage