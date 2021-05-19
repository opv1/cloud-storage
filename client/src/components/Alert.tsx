import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useTypeSelector } from 'hooks/useTypeSelector'
import { useActions } from 'hooks/useActions'
import { Icon } from 'components/UI/index'

declare global {
  interface Window {
    timeoutId: any
  }
}

const Alert: React.FC = () => {
  const { alert, message } = useTypeSelector((state) => state.alert)
  const { closeAlert } = useActions()

  useEffect(() => {
    clearTimeout(window.timeoutId)
    window.timeoutId = setTimeout(() => closeAlert(), 3000)

    return () => clearTimeout(window.timeoutId)
    // eslint-disable-next-line
  }, [alert])

  return (
    <AlertStyles>
      <AlertMessage>{message}</AlertMessage>
      <Icon icon='alertIcon' className='fas fa-times' onClick={closeAlert} />
    </AlertStyles>
  )
}

export default Alert

const AlertStyles = styled.div`
  position: absolute;
  right: 10px;
  top: 90px;
  z-index: 100;
  display: flex;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 1rem;
  background: #fff;
`

const AlertMessage = styled.span`
  margin-right: 1rem;
`
