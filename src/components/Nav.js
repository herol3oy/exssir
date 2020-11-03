import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import AboutModal from './AboutModal'
import Contact from './ContactModal'
import 'csshake/dist/csshake.min.css'

export default function Nav() {

  const [aboutModalShow, setAboutModalShow] = useState(false)
  const [contactModalShow, setContactModalShow] = useState(false)

  return (
    <>
      <Navbar className='shadow-sm' bg='light'>
        <ButtonGroup size='sm'>
          <Button variant='outline-success' onClick={() => setContactModalShow(true)}>تماس</Button>
          <Button variant='outline-success' onClick={() => setAboutModalShow(true)}>درباره اکسیر</Button>
        </ButtonGroup>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Brand>
            <Link to='/' className='logo-circle shake shake-opacity display-4 rounded-circle text-decoration-none'>
              <span role='img' aria-label='اکسیر'>🧪</span>
            </Link>
          </Navbar.Brand>
        </Navbar.Collapse>
      </Navbar>
      <AboutModal
        show={aboutModalShow}
        onHide={() => setAboutModalShow(false)}
      />
      <Contact
        show={contactModalShow}
        onHide={() => setContactModalShow(false)}
      />
    </>
  )
}
