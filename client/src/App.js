import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { useRoutes } from 'hooks/useRoutes'
import actions from 'store/actions/index'
import { Loader, Alert, Backdrop, Modal, Navbar } from 'components/index'

const App = () => {
  const { alert } = useSelector((state) => state.alert)
  const { ready, backdrop, sidedrawer } = useSelector((state) => state.app)
  const { modal } = useSelector((state) => state.modal)
  const { token } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)

  useEffect(() => {
    dispatch(actions.authUser())
    // eslint-disable-next-line
  }, [])

  if (!ready) {
    return (
      <AppStyles>
        <Loader />
      </AppStyles>
    )
  }

  return (
    <AppStyles>
      {alert ? <Alert /> : null}
      {backdrop ? (
        <Backdrop
          modal={modal && 'modalBackdrop'}
          sidedrawer={sidedrawer && 'sidedrawerBackdrop'}
        />
      ) : null}
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
