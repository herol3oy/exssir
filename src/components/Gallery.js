import React from 'react'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

export default function Gallery () {
  return (
    <Col lg={8} sm={12} className='d-lg-block d-xl-block d-md-block d-none'>
      {/* <section className='text-center '>
        <h3 className='text-success font-weight-bold'>اکسیر هنر</h3>
        <p>
          گویند روی سرخ تو سعدی چه زرد کرد
          اکسیر عشق بر مسم افتاد و زر شدم
        </p>
      </section> */}
      <Image src='https://source.unsplash.com/1600x900/?art,minimal' fluid />
      <Alert className='d-flex justify-content-between text-right' dir='rtl' variant='success'>
        لطفا برای نمایش آثار خود با ما تماس بگیرید.
        <Button variant='info' type='button' size='sm' className='font-weight-bold'>
          اطلاعات بیشتر
        </Button>
      </Alert>
    </Col>
  )
}
