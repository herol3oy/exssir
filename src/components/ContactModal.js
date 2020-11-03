import React from 'react'
import emailjs from 'emailjs-com';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export default function Contact(props) {

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_yg8ddrt', 'template_4w9bufq', e.target, 'user_riyH9rMGJtb7M7y5OKfTx')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Header closeButton>
        <Modal.Title dir='rtl' className='font-weight-bold text-success text-right w-100'>
          تماس با ما
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='text-right'>
        <Form className="contact-form" onSubmit={sendEmail}>
          <Form.Group>

            <Form.Label>نام و نام‌خانوادگی</Form.Label>
            <Form.Control dir='rtl' type="text" name="name" placeholder="نام و نام‌خانوادگی" />

            <Form.Label>ایمیل</Form.Label>
            <Form.Control dir='rtl' type="email" name="email" placeholder="ایمیل" />

            <Form.Label>متن پیام</Form.Label>
            <Form.Control dir='rtl' as="textarea" name="message" rows={3} placeholder="متن پیام" />
            
            <Button type='submit' value='ارسال' className='font-weight-bold'>ارسال</Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  )
}
