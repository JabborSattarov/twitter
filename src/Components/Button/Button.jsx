import React from 'react'
import "./button.css"

const Button = ({description, type ,onClick}) => {
  return (
    <button type={type} className=' button' onClick={onClick}>
        {description}
    </button>
  )
}

export default Button