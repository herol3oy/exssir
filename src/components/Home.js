import Nav from './Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import CreateUrlForm from './CreateUrlForm'
// import Gallery from './Gallery'

export default function Home () {
  return (
    <>
      <Nav />
      <Container>
        <Row className='
        vh-100
        d-flex
        justify-content-start
        justify-content-sm-center
        align-items-start
        align-items-lg-center
        align-items-sm-center
        '
        >
          {/* <div className='
          d-flex
          flex-lg-row
          flex-column
          align-items-center
          '
          > */}
          {/* <Gallery /> */}
          <CreateUrlForm />
          {/* </div> */}
        </Row>
      </Container>
    </>
  )
}
