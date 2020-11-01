import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

export default function Nav () {
  return (
    <Navbar bg='light'>
      <ButtonGroup size='sm'>
        <Button variant='success'>استخدام</Button>
        <Button variant='success'>درباره</Button>
        <Button variant='success'>اکسیر چیست؟</Button>
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
  )
}
