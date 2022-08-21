import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { LogoM } from '../../assets'
import { AnimatedLetters, Logo } from '../../components'
import Loader from 'react-loaders'
import './style.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = 'atthew'
  const jobArray = 'web developer'
  
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className='container home-page'>
          <div className='text-zone'>
              <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span> 
                <br/> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span> 
                <img src={LogoM} alt='developer' />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray.split('')} idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray.split('')} idx={22}/>
              </h1>
              <h2>Frontend Developer / JavaScript Expert</h2>
              <Link to="/contact" className='flat-button'>Contact Me</Link>
          </div>
          <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home