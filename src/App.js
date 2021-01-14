import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import './App.css'
import Resume from './views/Resume/Resume'
import Blog from './views/Blog/Blog'
import Contact from './views/Contact/Contact'
import Portfolio from './views/Portfolio/Portfolio'
import Portrait from './views/Portrait/Portrait'
import Particles from './components/Particles/Particles'

function App() {
  return (
    <Container>
      {/* <Particles /> */}
      <Grid container style={{ marginTop: '30px' }}>
        <Grid item xs={false} sm={1} lg={2} />
        <Grid item container xs={12} sm={10} lg={8} spacing={2}>
          <Grid item xs={12} sm={3}>
            <Portrait />
          </Grid>
          <Grid item xs={12} sm={9}>
            <Router>
              <Switch>
                <Route exact path="/resume" component={Resume} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/contact" component={Contact} />
                <Route exact render={() => <Redirect to="/resume" />} />
              </Switch>
            </Router>
          </Grid>
        </Grid>
        <Grid item xs={false} sm={1} lg={2} />
      </Grid>
    </Container>
  )
}

export default App
