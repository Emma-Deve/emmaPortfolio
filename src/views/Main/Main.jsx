import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Box } from '@material-ui/core'
import './Main.scss'

import routeList from '../../routeList/routeList'

function Main() {
  return (
    <Box component="div" className="Main">
      <Switch>
        {routeList.length
          ? routeList.map((item, index) => (
              <Route
                key={index}
                exact={item.exact}
                path={item.path}
                component={item.component}
              />
            ))
          : null}
        <Route exact render={() => <Redirect to="/home" />} />
      </Switch>
    </Box>
  )
}
export default Main
