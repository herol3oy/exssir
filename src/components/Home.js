import Nav from './Nav'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'

export default function Home () {
  return (
    <>
      <Nav />
      <Container>
        <Row>
          <Col lg={10}>
            <Image src='https://source.unsplash.com/1600x900/?art,minimal' fluid />
            <Alert className='text-right' variant='success'>
              لطفا برای خرید این اثر هنری بر روی عکس کلیک کنید
            </Alert>
          </Col>
        </Row>
      </Container>
    </>
  )
}
