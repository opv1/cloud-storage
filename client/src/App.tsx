import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useTypeSelector } from 'hooks/useTypeSelector'
import { useActions } from 'hooks/useActions'
import Routes from 'Routes'
import { Loader, Alert, Backdrop, Modal, Navbar } from 'components/index'

const App: React.FC = () => {
  const { alert } = useTypeSelector((state) => state.alert)
  const { ready, backdrop, sidedrawer } = useTypeSelector((state) => state.app)
  const { modal } = useTypeSelector((state) => state.modal)
  const { token } = useTypeSelector((state) => state.user)
  const { authUser, closeModal, closeSidedrawer } = useActions()

  const isAuth = !!token
  const routes = Routes(isAuth)

  const handlerClick = (event: React.MouseEvent) => {
    const eventTarget = event.target as HTMLDivElement

    if (eventTarget.getAttribute('data-attr') === 'modalBackdrop') {
      closeModal()
    }

    if (
      eventTarget.getAttribute('data-attr') === 'sidedrawerBackdrop' ||
      eventTarget.getAttribute('data-attr') === 'sidedrawerLink'
    ) {
      closeSidedrawer()
    }
  }

  useEffect(() => {
    authUser()
    // eslint-disable-next-line
  }, [])

  return (
    <AppStyles onClick={handlerClick}>
      {!ready ? (
        <Loader />
      ) : (
        <>
          <Navbar isAuth={isAuth} />
          {routes}
          {alert && <Alert />}
          {backdrop && (
            <Backdrop
              backdrop={
                (modal && 'modalBackdrop') ||
                (sidedrawer && 'sidedrawerBackdrop')
              }
            />
          )}
          {modal && <Modal />}
        </>
      )}
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
