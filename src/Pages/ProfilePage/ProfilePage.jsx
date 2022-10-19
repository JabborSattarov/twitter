import React from 'react'
import AllUsers from '../../Components/AllUsers/AllUsers'
import Navbar from '../../Components/Navbar/Navbar'
import Profile from '../../Components/Profile/Profile'
import './profilepage.css'
const ProfilePage = () => {
  return (
    <div className='profilepage'>
        <Navbar /> 
        <Profile/>
        <AllUsers/>
    </div>
  )
}

export default ProfilePage