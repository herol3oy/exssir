import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import AboutModal from './AboutModal'
import 'csshake/dist/csshake.min.css'

export default function Nav () {
  const [modalShow, setModalShow] = useState(false)

  return (
    <>
      <Navbar className='shadow-sm' bg='light'>
        <ButtonGroup size='sm'>
          <Button variant='outline-success'>هنرمندان</Button>
          <Button variant='outline-success' onClick={() => setModalShow(true)}>درباره اکسیر</Button>
        </ButtonGroup>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Brand>
            <Link to='/' className='shake shake-opacity h1 rounded-circle text-decoration-none'>
              <span role='img' aria-label='اکسیر'>🧪</span>
            </Link>
          </Navbar.Brand>
        </Navbar.Collapse>
      </Navbar>
      <AboutModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}
