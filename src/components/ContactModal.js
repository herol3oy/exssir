import { useState } from 'react'
import emailjs from 'emailjs-com'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Contact (props) {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [emailSent, setEmailSent] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_yg8ddrt', 'template_4w9bufq', e.target, 'user_riyH9rMGJtb7M7y5OKfTx')
      .then((result) => {
        console.log(result.text)
        setEmailSent(true)
      }, (error) => {
        console.log(error.text)
      })
  }

  return (
    <Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Header closeButton>
        <Modal.Title dir='rtl' className='font-weight-bold text-success text-right w-100'>
          تماس با ما
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='text-right'>
        {
          !emailSent ? (
            <Form dir='rtl' className='contact-form' onSubmit={sendEmail}>
              <Form.Group>
                <Row>
                  <Col lg={6} sm={12}>
                    <Form.Label>نام و نام‌خانوادگی*</Form.Label>
                    <Form.Control onChange={(e) => setFullName(e.target.value)} value={fullName} dir='rtl' type='text' name='name' placeholder='نام و نام‌خانوادگی' required />
                  </Col>
                  <Col lg={6} sm={12}>
                    <Form.Label>ایمیل*</Form.Label>
                    <Form.Control onChange={(e) => setEmail(e.target.value)} value={email} dir='rtl' type='email' name='email' placeholder='ایمیل' required />
                  </Col>
                </Row>
                <Form.Label className='mt-2'>متن پیام*</Form.Label>
                <Form.Control onChange={(e) => setMsg(e.target.value)} value={msg} dir='rtl' as='textarea' name='message' rows={3} placeholder='متن پیام' required />

                <Button type='submit' value='ارسال' className='font-weight-bold mt-3'>ارسال</Button>
              </Form.Group>
            </Form>
          )
            : <h5 className='text-success'>.پیام شما با موفقیت ارسال شد</h5>
        }
      </Modal.Body>
    </Modal>
  )
}
