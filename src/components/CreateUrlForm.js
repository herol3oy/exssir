import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { nanoid } from 'nanoid'
import { db, serverTimestamp } from '../containers/Firebase'
import { motion } from 'framer-motion'
import { FaRegCopy, FaLink } from 'react-icons/fa'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Badge from 'react-bootstrap/Badge'

export default function CreateUrlForm () {
  const [longURL, setLongURL] = useState('')
  const [urlCreated, setUrlCreated] = useState(false)
  const [urlsArr, setUrlArr] = useState([])

  const ref = db.collection('urls')

  const createUrl = (e) => {
    e.preventDefault()
    if (longURL !== '') {
      const shortId = nanoid(5)
      ref
        .doc()
        .set({
          longURL,
          shortId,
          createdAt: serverTimestamp(),
          visits: 0
        })
      setUrlArr((prevState) => [{ longURL, shortId }, ...prevState])
      setUrlCreated(true)
      setLongURL('')
    }
  }

  const shortenUrlResults = urlsArr
    ?.slice(0, 3)
    .map((url) => (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        key={nanoid(3)}
      >
        <Alert variant='success' className='d-flex align-items-center'>
          <small className='mr-auto text-dark'>
            {`${url.longURL.slice(0, 20)}..`}
          </small>
          <a href={`https://exss.ir/${url.shortId}`} target='_blank' rel='noopener noreferrer'>
            <h6 className='font-weight-bold text-success m-0'>
              {`exss.ir/${url.shortId}`}
            </h6>
          </a>
          <OverlayTrigger
            placement='right'
            overlay={<Tooltip id='tooltip-disabled' style={{ fontFamily: 'Vazir, sans-serif', fontWeight: 700 }}>کپی‌</Tooltip>}
          >
            <CopyToClipboard text={`exss.ir/${url.shortId}`}>
              <Button className='ml-2 font-weight-bold' variant='primary' size='sm'>
                <FaRegCopy />
              </Button>
            </CopyToClipboard>
          </OverlayTrigger>
        </Alert>
      </motion.div>
    ))

  return (
    <Col lg={4} sm={12}>
      <section className='mb-3'>
        <h1 className='site-title display-4 text-success text-center'>اکسیر</h1>
        <h6 className='text-center text-secondary'>
          کوتاه‌کننده لینک
          <FaLink className='mx-1 text-success' />
           گالری‌ آنلاین هنری
        </h6>
      </section>
      <Form className='shadow-lg' onSubmit={createUrl}>
        <InputGroup size='lg' className='mb-3'>
          <FormControl
            placeholder='لینک خود را وارد کنید'
            aria-label='لینک خود را وارد کنید'
            aria-describedby='لینک'
            type='url'
            value={longURL}
            onChange={(e) => setLongURL(e.target.value)}
          />
          <InputGroup.Append>
            <Button variant='success' type='submit' className='font-weight-bold'>
              کوتاه‌کن
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
      {!urlCreated ? (
        <div className='d-flex flex-wrap align-content-between justify-content-center'>
          <Badge variant='secondary mr-1'>نامحدود</Badge>
          <Badge variant='secondary mr-1'>همیشه پایدار</Badge>
          <Badge variant='secondary mr-1'>پرسرعت</Badge>
          <Badge variant='secondary mr-1'>بدون نیاز به ثبت‌نام</Badge>
          <Badge variant='success mt-0 mt-lg-1 mt-md-1 mt-sm-1 mr-1'>میزبانی برروی سرورهای گوگل‌کلود</Badge>
        </div>
      ) : null}
      {urlCreated ? shortenUrlResults : null}
    </Col>
  )
}
