import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
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
  const [urlCreated, setUrlCreated] = useState(true)

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
    <Col lg={4} sm={12}>
      <Form onSubmit={createUrl}>
        <InputGroup size='lg' className='mb-3'>
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
      <section className='d-flex align-items-center'>
        <small className='mr-auto'>https://youtube...</small>
        <a href='https://exss.ir/7Sj2_' >
          <small>
            https://exss.ir/7Sj2_
          </small>
        </a>
        <CopyToClipboard text={`https://exss.ir/${shortId}`}>
          <Button className='ml-1' variant='primary' size="sm">کپی</Button>
        </CopyToClipboard>
      </section>
      {shortId}
      {urlCreated}
    </Col>
  )
}
