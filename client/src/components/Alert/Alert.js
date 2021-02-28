import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import actionCreators from 'store/actions/actionCreators/index'
import { Icon } from 'components/UI/index'

const Alert = () => {
  const { alert, message } = useSelector((state) => state.alert)
  const dispatch = useDispatch()

  useEffect(() => {
    clearTimeout(window.timeoutId)

    window.timeoutId = setTimeout(() => {
      dispatch(actionCreators.alertHide())
    }, 3000)
    // eslint-disable-next-line
  }, [alert])

  return (
    <AlertStyles>
      <AlertMessage>{message}</AlertMessage>
      <Icon
        alertIcon
        className='fas fa-times'
        onClick={() => dispatch(actionCreators.alertHide())}
      />
    </AlertStyles>
  )
}

export default Alert

const AlertStyles = styled.div`
  position: absolute;
  right: 0;
  top: 60px;
  z-index: 100;
  display: flex;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 1rem;
  background-color: #fff;
`

const AlertMessage = styled.span`
  margin-right: 1rem;
`
