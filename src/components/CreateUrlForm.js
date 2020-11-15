import { useState, useRef, useEffect } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { nanoid } from 'nanoid'
import { db, serverTimestamp } from '../firebase/config'
import { FaRegCopy, FaCheck } from 'react-icons/fa'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Col from 'react-bootstrap/Col'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Badge from 'react-bootstrap/Badge'
import Recaptcha from 'react-google-invisible-recaptcha'
import { FontStyle } from '../styles/GlobalStyle'

export default function CreateUrlForm () {
  const [longURL, setLongURL] = useState('')
  const [urlCreated, setUrlCreated] = useState(false)
  const [urlsArr, setUrlArr] = useState([])
  const [copied, setCopied] = useState(false)
  const [customURL, setCustomURL] = useState('')
  const [customUrlAvailable, setCustomUrlAvailable] = useState(false)
  const recaptcha = useRef()
  const ref = db.collection('urls')

  const onResolved = () => {
    const data = {
      reCaptchaToken: recaptcha.current.getResponse()
    }
    recaptcha.current.reset()
    console.log('data', data)
  }

  useEffect(() => {
    db
      .collection('urls')
      .where('shortId', '==', customURL)
      .onSnapshot((querySnapshot) => {
        setCustomUrlAvailable(!!querySnapshot.docs.length)
      })
  }, [customURL])

  const createUrl = (e) => {
    e.preventDefault()
    recaptcha.current.execute()
    if (longURL !== '' && customURL === '') {
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
    } else {
      ref
        .doc()
        .set({
          longURL,
          shortId: customURL,
          createdAt: serverTimestamp(),
          visits: 0
        })
      setUrlArr((prevState) => [{ longURL, shortId: customURL }, ...prevState])
    }
    setUrlCreated(true)
    setCustomURL('')
    setLongURL('')
  }

  const copyHandleClick = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 900)
  }

  const shortenUrlResults = urlsArr
    ?.slice(0, 3)
    .map((url, i) => (
      <div key={i} className='alert alert-success d-flex align-items-center'>
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
            <Button onClick={copyHandleClick} className='ml-2 font-weight-bold' variant={`${copied ? 'success' : 'primary'}`} size='sm'>
              {copied ? <FaCheck /> : <FaRegCopy />}
            </Button>
          </CopyToClipboard>
        </OverlayTrigger>
      </div>
    ))

  return (
    <Col lg={6} sm={12}>
      <section className='mb-3'>
        <FontStyle className='display-4 text-success text-center'>
          اکسیر
        </FontStyle>
        <h6 dir='rtl' className='text-center text-secondary'>
          کوتاه‌کننده لینک
          <span role='img' aria-label='لینک'>🔗</span> {' '}
           گالری‌ آنلاین هنری
          <span role='img' aria-label='نقاش'>🎨</span>
        </h6>
      </section>
      <Form className=' my-2' onSubmit={createUrl}>
        <InputGroup size='lg'>
          <FormControl
            required
            placeholder='لینک خود را وارد کنید'
            aria-label='لینک خود را وارد کنید'
            aria-describedby='لینک'
            type='url'
            value={longURL}
            onChange={(e) => setLongURL(e.target.value)}
          />
        </InputGroup>

        <InputGroup size='lg' className='my-1'>
          <InputGroup.Prepend>
            <InputGroup.Text className='h-100'>
              https://exss.ir/
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            value={customURL}
            onChange={(e) => setCustomURL(e.target.value)}
            placeholder='آدرس دلخواه'
            aria-label='آدرس دلخواه'
            aria-describedby='آدرس دلخواه'
          />
        </InputGroup>
        <InputGroup>
          <Button disabled={customUrlAvailable} variant='success' type='submit' className='font-weight-bold btn-lg w-100'>
            کوتاه‌کن
          </Button>
        </InputGroup>
      </Form>
      <Recaptcha
        ref={recaptcha}
        sitekey='6Ldrod4ZAAAAAI-DLI85XIkAbvuHHiZ0hSqy6jTo'
        render='explicit'
        onResolved={onResolved}
      />
      {!urlCreated ? (
        <div className='d-flex flex-wrap justify-content-center'>
          <Badge className='badge rounded-pill bg-secondary' variant='secondary mr-1'>همیشه پایدار</Badge>
          <Badge className='badge rounded-pill bg-secondary' variant='secondary mr-1'>پرسرعت</Badge>
          <Badge className='badge rounded-pill bg-secondary' variant='secondary mr-1'>بدون نیاز به ثبت‌نام</Badge>
          <Badge className='badge rounded-pill bg-secondary' variant='secondary mr-1'>لینک‌ دایمی</Badge>
          <Badge className='badge rounded-pill bg-secondary' variant='secondary mr-1'>نامحدود</Badge>
          <Badge className='badge rounded-pill bg-success' variant='success mt-1 mt-xl-0 mt-lg-0 mt-md-0 mt-sm-0'>میزبانی توسط گوگل‌کلود</Badge>
        </div>
      ) : null}
      {urlCreated ? shortenUrlResults : null}
    </Col>
  )
}
