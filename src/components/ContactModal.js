import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function Contact(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title dir='rtl' className='font-weight-bold text-success text-right w-100' id='contained-modal-title-vcenter'>
          تماس با ما
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='text-right'>
        تماس
      </Modal.Body>
      <Modal.Footer>
        <Button className='font-weight-bold' onClick={props.onHide}>خروج</Button>
      </Modal.Footer>
    </Modal>
  )
}
