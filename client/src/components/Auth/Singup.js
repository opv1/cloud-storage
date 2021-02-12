import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../store/actions/index'
import { Input, Label, Button } from '../UI/index'
import './Auth.scss'

const Singup = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const { loading } = useSelector((state) => state.app)

  const dispatch = useDispatch()

  const handlerChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onSingupUser = (e, form) => {
    e.preventDefault()
    dispatch(actions.singupUser(form))
  }

  return (
    <div className='auth'>
      <div className='auth__container'>
        <span className='auth__title'>Singup Form</span>
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
            <Label htmlFor='confirmPassword' name='Confirm password' />
            <Input
              onChange={handlerChange}
              id='confirmPassword'
              type='password'
              value={form.confirmPassword}
              name='confirmPassword'
              placeholder='******'
            />
          </div>
          <Button
            className='auth__button'
            onClick={(e) => onSingupUser(e, form)}
            name='Singup'
            disabled={loading}
          />
        </form>
      </div>
    </div>
  )
}

export default Singup
