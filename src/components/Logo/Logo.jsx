import React from 'react'
import { LogoM } from '../../assets'
import './style.scss'

const Logo = () => {
  return (
    <div className="logo-container">
      <img
        className="solid-logo"
        src={LogoM}
        alt="JavaScript,  Developer"
      />
    </div>
  )
}

export default Logo