import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FavoriteBooks from './screens/FavoriteBooks'
import Main from './screens/Main'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/favorites'>
          <FavoriteBooks />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
