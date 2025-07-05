import React from 'react'
import logoImage from '../assets/logoImage.png' 
import { Link } from 'react-router-dom';

function Logo({width = '100px'}) {
  return (
    <Link to="/">
   <img
      src={logoImage}
      alt="Logo"
      style={{ width }}
      className="object-contain"
    />
    </Link>
  )
}

export default Logo