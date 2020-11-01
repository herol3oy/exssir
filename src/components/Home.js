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
        <Row className='align-items-start align-items-lg-center h-100'>
          <Gallery />
          <CreateUrlForm />
        </Row>
      </Container>
    </>
  )
}
