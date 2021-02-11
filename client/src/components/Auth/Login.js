import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../store/actions/index'
import actionCreators from '../../store/actions/actionCreators/index'
import { Input, Label, Button } from '../UI/index'
import './Auth.scss'

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const { loading } = useSelector((state) => state.app)

  const dispatch = useDispatch()

  const handlerChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onLogin = (e, form) => {
    e.preventDefault()

    dispatch(actionCreators.setLoading())
    dispatch(actions.loginUser(form))
  }

  return (
    <div className='auth'>
      <div className='auth__container'>
        <span className='auth__brand'>Login Form</span>
        <form className='auth__form'>
          <div className='auth__block'>
            <Label htmlFor='email' name='Email' />
            <Input
              onChange={handlerChange}
              id='email'
              value={form.email}
              name='email'
              placeholder='example@mail.com'
            />
            <Label htmlFor='password' name='Password' />
            <Input
              onChange={handlerChange}
              id='password'
              type='password'
              value={form.password}
              name='password'
              placeholder='******'
            />
          </div>
          <Button
            onClick={(e) => onLogin(e, form)}
            name='Login'
            disabled={loading}
          />
        </form>
      </div>
    </div>
  )
}

export default Login
