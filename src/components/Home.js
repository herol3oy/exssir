import Nav from './Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import CreateUrlForm from './CreateUrlForm'
import Gallery from './Gallery'

export default function Home() {
  return (
    <>
      <Nav />
      <Container>
        <Row className='d-flex align-self-lg-stretch'>
          <div className='d-flex flex-column flex-lg-row'>
            <Gallery />
            <CreateUrlForm />
          </div>
        </Row>
      </Container>
    </>
  )
}
