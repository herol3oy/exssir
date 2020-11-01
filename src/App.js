import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './components/Home'
import DirectingPage from './components/DirectingPage'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/layout.scss'

export default function App () {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/:name' component={DirectingPage} />
      </Switch>
    </Router>
  )
}
