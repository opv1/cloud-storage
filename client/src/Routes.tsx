import { Switch, Route, Redirect } from 'react-router-dom'
import { Disk, Profile, Singin, Singup } from 'components/index'

const Routes = (isAuth: boolean): JSX.Element => {
  if (isAuth) {
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
      <Route path='/' exact component={Singin} />
      <Route path='/singup' component={Singup} />
      <Redirect to='/' />
    </Switch>
  )
}

export default Routes
