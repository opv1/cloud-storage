import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actionCreators from '../../store/actions/actionCreators/index'
import './Alert.scss'

const Alert = () => {
  const { message } = useSelector((state) => state.alert)

  const dispatch = useDispatch()

  return (
    <div className='alert'>
      <span className='alert__message'>{message}</span>
      <i
        className='fas fa-times'
        onClick={() => dispatch(actionCreators.alertHide())}
      ></i>
    </div>
  )
}

export default Alert
