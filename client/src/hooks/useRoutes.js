import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Disk, Profile, Login, Singup } from '../components/index'

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path='/' exact component={Disk} />
        <Route path='/profile' component={Profile} />
        <Redirect to='/' />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path='/' exact component={Login} />
      <Route path='/singup' component={Singup} />
      <Redirect to='/' />
    </Switch>
  )
}
