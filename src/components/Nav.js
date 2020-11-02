import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import AboutModal from './AboutModal'

export default function Nav () {
  const [modalShow, setModalShow] = useState(false)

  return (
    <>
      <Navbar className='col-lg-12' bg='light'>
        <ButtonGroup size='sm'>
          <Button variant='success'>استخدام</Button>
          <Button variant='success'>درباره</Button>
          <Button variant='success' onClick={() => setModalShow(true)}>اکسیر چیست؟</Button>
        </ButtonGroup>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Brand>
            <Link to='/' className='display-4 rounded-circle text-decoration-none'>
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
