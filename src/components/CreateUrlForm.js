import React from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Col from 'react-bootstrap/Col'

export default function CreateUrlForm () {
  return (
    <Col lg={4}>
      <Form>
        <InputGroup className='mb-3'>
          <FormControl
            placeholder='لینک خود را وارد کنید'
            aria-label='لینک خود را وارد کنید'
            aria-describedby='لینک'
          />
          <InputGroup.Append>
            <Button variant='success' className='font-weight-bold'>کوتاه‌کن</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    </Col>
  )
}
