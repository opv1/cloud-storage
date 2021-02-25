import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { useRoutes } from 'hooks/useRoutes'
import { useLocalStorage } from 'hooks/useLocalStorage'
import actionCreators from 'store/actions/actionCreators/index'
import { Alert, Navbar, Modal } from 'components/index'

const App = () => {
  const { alert } = useSelector((state) => state.alert)
  const { modal } = useSelector((state) => state.modal)
  const { token } = useSelector((state) => state.user)
  const { setStorage, getStorage } = useLocalStorage()
  const dispatch = useDispatch()

  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)

  useEffect(() => {
    const data = getStorage()

    if (data && data.token) {
      setStorage(data)
      dispatch(actionCreators.loginUser(data))
    }
    // eslint-disable-next-line
  }, [])

  return (
    <AppStyles>
      {alert ? <Alert /> : null}
      {modal ? <Modal /> : null}
      <Navbar isAuthenticated={isAuthenticated} />
      {routes}
    </AppStyles>
  )
}

export default App

const AppStyles = styled.div`
  position: relative;
  margin: auto;
  height: 100vh;
  min-width: 320px;
`
