import React from 'react'
import './NavBar.css'

export default function NavBar() {
  return (
    <div className="appNavbar">
        <div className='appLogo'>
          <img src={require('../../images/logo192.png')} className="appLogoImage" alt="logo"/>
          <span>The Dev Office</span>
        </div>
        <div className='appSearch'>
            <input type="text" placeholder="&#xF002; Search" className='inputSearch'/>
        </div>
    </div>
  )
}
