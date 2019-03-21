import React from 'react'
import logo from '../Assets/SBTSlogo.jpg'

const Header = () => (
  <div className="Header-Parent">
    <img className="logo-img" src={logo} alt="SBTS Logo" />
    <span className="app-title">Do I Need An Adapter?</span>
  </div>
)

export default Header
