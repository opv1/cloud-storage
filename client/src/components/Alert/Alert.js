import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actionCreators from '../../store/actions/actionCreators/index'
import { Icon } from '../UI/index'
import './Alert.scss'

const Alert = () => {
  const { alert, message } = useSelector((state) => state.alert)

  const dispatch = useDispatch()

  useEffect(() => {
    clearTimeout(window.timeoutId)

    window.timeoutId = setTimeout(() => {
      dispatch(actionCreators.hideAlert())
    }, 3000)
    // eslint-disable-next-line
  }, [alert])

  return (
    <div className='alert'>
      <span className='alert__message'>{message}</span>
      <Icon
        className='fas fa-times'
        onClick={() => dispatch(actionCreators.hideAlert())}
      />
    </div>
  )
}

export default Alert
