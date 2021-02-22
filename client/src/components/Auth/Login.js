import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from 'store/actions/index'
import { Label, Input, Button } from 'components/UI/index'
import 'components/Auth/Auth.scss'

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

  const onLoginUser = (e, form) => {
    e.preventDefault()
    dispatch(actions.loginUser(form))
  }

  return (
    <div className='auth'>
      <div className='auth__container'>
        <span className='auth__title'>Login Form</span>
        <form className='auth__form'>
          <div className='auth__block'>
            <Label className='auth__label' htmlFor='email' name='Email' />
            <Input
              className='auth__input'
              onChange={handlerChange}
              id='email'
              value={form.email}
              name='email'
              placeholder='example@mail.com'
            />
            <Label className='auth__label' htmlFor='password' name='Password' />
            <Input
              className='auth__input'
              onChange={handlerChange}
              id='password'
              type='password'
              value={form.password}
              name='password'
              placeholder='******'
            />
          </div>
          <Button
            className='auth__button'
            onClick={(e) => onLoginUser(e, form)}
            name='Login'
            disabled={loading}
          />
        </form>
      </div>
    </div>
  )
}

export default Login
