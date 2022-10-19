import React from 'react'
import AllUsers from '../../Components/AllUsers/AllUsers'
import Navbar from '../../Components/Navbar/Navbar'
import Posts from '../../Components/Posts/Posts'
import Profile from '../../Components/Profile/Profile'

import './home.css'

const Home = () => {
  return (
    <div className='home'>

      <Navbar/>
      <Posts/>
      <AllUsers/>
    </div>
  )
}

export default Home