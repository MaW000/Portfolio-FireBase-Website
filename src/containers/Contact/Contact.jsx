import emailjs from '@emailjs/browser'
import React, { useEffect, useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Loader from 'react-loaders'
import { AnimatedLetters } from '../../components'
import './style.scss'
const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()
    useEffect(() => {
        setTimeout(() => {
        setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()
        
        emailjs
            .sendForm(
                'service_er6n4vg',
                'template_urdvt4w',
                form.current,
                'UPQbla5Qg1Onl1Lbz'
            )
            .then (
                () => {
                    alert('Message succesfully sent!')
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
        
        document.getElementById('form').reset();
    }

  return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={'Contact Me'.split('')} idx={15} />
                </h1>
                <p>
                I am interested in freelance opportunities - especially ambitious or
                large projects. However, if you have a request or question,
                don't hesitate to contact me using below form either.
                </p>
                <div className='contact-form'>
                <form ref={form} id='form' onSubmit={sendEmail}>
                <ul>
                    <li className="half">
                        <input placeholder="Name" type="text" name="name" required />
                    </li>
                    <li className="half">
                        <input
                            placeholder="Email"
                            type="email"
                            name="email"
                            required
                        />
                    </li>
                    <li>
                        <input
                            placeholder="Subject"
                            type="text"
                            name="subject"
                            
                        />
                    </li>
                    <li>
                        <textarea
                            placeholder="Message"
                            name="message"
                            required
                        ></textarea>
                    </li>
                    <li>
                        <input type="submit" className="flat-button" value="SEND" />
                    </li>
              </ul>
            </form>
                </div>
            </div>
            <div className="info-map">
                Matthew Wardlow,
                <br />
                Tampa, Fl 33545
                <br />
                United States <br />
                <br />
                <span>mwardlow0@gmail.com</span>
            </div>
            <div className="map-wrap">
                <MapContainer center={[27.9477, -82.4593]} zoom={11}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[27.9500, -82.4793]}>
                        <Popup className='popup'>Matt lives here, come over for a cup of coffee :)</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type="pacman" />
    </>
  )
}

export default Contact