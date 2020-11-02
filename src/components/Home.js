import Nav from './Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import CreateUrlForm from './CreateUrlForm'
import Gallery from './Gallery'

export default function Home () {
  return (
    <>
      <Nav />
      <Container>
        <Row
          className='d-flex justify-content-center align-items-center'
        >
          <div className='tri d-flex flex-lg-row flex-column'>
            <Gallery />
            <CreateUrlForm />
          </div>
        </Row>
      </Container>
    </>
  )
}
