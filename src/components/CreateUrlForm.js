import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import { db, serverTimestamp } from '../containers/Firebase'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Col from 'react-bootstrap/Col'

export default function CreateUrlForm () {

  const [input, setInput] = useState('')
  const [shortId, setShortId] = useState('')
  const [urlCreated, setUrlCreated] = useState(false)

  const ref = db.collection('urls')

  const createUrl = (e) => {
    e.preventDefault()
    if (input !== '') {
      const newShortId = nanoid(5)
      setShortId(newShortId)
      ref
        .doc()
        .set({
          url: input,
          shortId: newShortId,
          createdAt: serverTimestamp(),
          visits: 0
        })
      setUrlCreated(true)
      setInput('')
    }
  }

  return (
    <Col lg={4}>
      <Form onSubmit={createUrl}>
        <InputGroup className='mb-3'>
          <FormControl
            placeholder='لینک خود را وارد کنید'
            aria-label='لینک خود را وارد کنید'
            aria-describedby='لینک'
            type='url'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <InputGroup.Append>
            <Button variant='success' type='submit' className='font-weight-bold'>کوتاه‌کن</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
      {shortId}
      {urlCreated}
    </Col>
  )
}
