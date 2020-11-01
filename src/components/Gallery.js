import React from 'react'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'

export default function Gallery () {
  return (
    <Col lg={8} className='d-none d-xl-block d-lg-block d-md-block'>
      <Image src='https://source.unsplash.com/1600x900/?art,minimal' fluid />
      <Alert className='text-right' variant='success'>
        لطفا برای خرید این اثر هنری بر روی عکس کلیک کنید
      </Alert>
    </Col>
  )
}
