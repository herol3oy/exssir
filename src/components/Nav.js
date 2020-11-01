import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <Navbar>
      <ButtonGroup size="sm">
        <Button variant="success">Left</Button>
        <Button variant="success">Middle</Button>
        <Button variant="success">Right</Button>
      </ButtonGroup>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Brand>
          <Link to='/'>🧪</Link>
        </Navbar.Brand>
      </Navbar.Collapse>
    </Navbar>
  )
}
