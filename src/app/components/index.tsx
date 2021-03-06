import React from 'react'

import { Helmet } from 'react-helmet'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Global from './global'

import * as Routes from './routes'

const AppComponent: React.FC = () => {
  return (
    <Router>
      <Global />
      <Helmet defaultTitle='YCC slot' titleTemplate='%s · YCC slot' />
      <Switch>
        <Route
          exact={true}
          path={`/`}
          component={Routes.Home}
        />

        <Route exact={true} component={Routes.NotFound} />
      </Switch>
    </Router>
  )
}

export default AppComponent