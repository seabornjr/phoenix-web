import React from 'react'
import HomeScreenPanels from '../components/HomeScreenPanels'
import Login from '../components/Login'

function Home() {
  return (
    <div className='HomeView'>
        <Login />
        <HomeScreenPanels />
    </div>
  )
}

export default Home
