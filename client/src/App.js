import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRoutes } from 'hooks/useRoutes'
import { useStorage } from 'hooks/useStorage'
import actionCreators from 'store/actions/actionCreators/index'
import { Alert, Navbar, Modal } from 'components/index'
import 'App.scss'

const App = () => {
  const { alert } = useSelector((state) => state.alert)
  const { modal } = useSelector((state) => state.modal)
  const { token } = useSelector((state) => state.user)

  const dispatch = useDispatch()

  const { getItem } = useStorage()

  const isAuthenticated = !!token

  const routes = useRoutes(isAuthenticated)

  useEffect(() => {
    const data = getItem('cloudStorage')

    if (data && data.token) {
      dispatch(actionCreators.loginUser(data))
    }
    // eslint-disable-next-line
  }, [])

  return (
    <div className='app'>
      {alert ? <Alert /> : null}
      {modal ? <Modal /> : null}
      <Navbar isAuthenticated={isAuthenticated} />
      {routes}
    </div>
  )
}

export default App
