import React from 'react'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'

import Main from './pages/main/index'
import About from './pages/about/index'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/' />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes