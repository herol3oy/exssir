import Nav from './Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import CreateUrlForm from './CreateUrlForm'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalStyle from '../styles/GlobalStyle'
import { Helmet } from 'react-helmet'
// import Gallery from './Gallery'

export default function Home () {
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <title>
          اکسیر :: کوتاه‌کننده‌لینک و گالری‌آنلاین‌هنری
        </title>
      </Helmet>
      <Nav />
      <Container>
        <Row className='
        vh-100
        d-flex
        justify-content-start
        justify-content-sm-center
        align-items-center
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
