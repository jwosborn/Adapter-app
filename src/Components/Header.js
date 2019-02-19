import React, { Component } from 'react';
import logo from '../SBTS logo.jpg'
import '../App.css';

class Header extends Component {

  render () {
    return (
      <div className="Header-Parent">
        <img className="logo-img" src={ logo } alt="SBTS Logo"  /> 
        <span className="app-title">Do I Need An Adapter?</span>
      </div>
    )
  }
}

export default Header;