import React from 'react'
import {BellIcon, BookmarkIcon, HashIcon, HomeIcon, ListIcon, MessagesIcon, MoreIcon, ProfileIcon, Twitter} from '../../Assets/icons'
import Button from '../Button/Button'
import NavItem from '../NavItem/NavItem'
import img from '../../Assets/images/signin-image.jpg'
import './navbar.css'
import ProfileImg from '../ProfileImg/ProfileImg'
const Navbar = () => {
  return (
    <div className="navbar" >
      <Twitter/>
      <ul className='navbar__list'>
        <NavItem icon={<HomeIcon/>} description={"Home"} path={"/"}/>
        <NavItem icon={<ProfileIcon/>} description={"Profile"} path={"/profile"}/>
        <NavItem icon={<HashIcon/>} description={"Explore"} path={"/#"}/>
        <NavItem icon={<BellIcon/>} description={"Notifications"} path={"/#"}/>
        <NavItem icon={<MessagesIcon/>} description={"Messages"} path={"/#"}/>
        <NavItem icon={<BookmarkIcon/>} description={"Bookmarks"} path={"/#"}/>
        <NavItem icon={<ListIcon/>} description={"Lists"} path={"/#"}/>
        <NavItem icon={<MoreIcon/>} description={"More"} path={"/#"}/>
      </ul>
      
      <Button description={"Tweet"} type="button"/>
      {/* <div className='navbar__profile'>
          <ProfileImg src={img}/>
          <div className='profile__user user'>
            <h6 className='user__username'>Jabbor</h6>
            <p className='user__email'>jabboe@gmail.com</p>
          </div>
          <MoreIcon/>
      </div> */}
    </div>
  )
}

export default Navbar