import React from 'react'
import { NavLink } from 'react-router-dom'
import './navitem.css'

const NavItem = ({icon, description, path}) => {
  return (
    <NavLink to={path} className='list__item item'>
        <i className='item__icon'>{icon}</i>
        <h5>{description}</h5>
    </NavLink>
  )
}

export default NavItem