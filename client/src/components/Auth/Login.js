import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import actions from 'store/actions/index'
import { Label, Input, Button } from 'components/UI/index'

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
    <LoginStyles>
      <LoginContainer>
        <LoginTitle>Login Form</LoginTitle>
        <LoginForm>
          <LoginBlock>
            <Label loginLabel htmlFor='email' name='Email' />
            <Input
              authInput
              onChange={handlerChange}
              id='email'
              type='text'
              value={form.email}
              name='email'
              placeholder='example@mail.com'
            />
            <Label loginLabel htmlFor='password' name='Password' />
            <Input
              authInput
              onChange={handlerChange}
              id='password'
              type='password'
              value={form.password}
              name='password'
              placeholder='******'
            />
          </LoginBlock>
          <Button
            secondaryColor
            loginButton
            onClick={(e) => onLoginUser(e, form)}
            name='Login'
            disabled={loading}
          />
        </LoginForm>
      </LoginContainer>
    </LoginStyles>
  )
}

export default Login

const LoginStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);
`

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 2rem;
  background-color: #fff;
`

const LoginTitle = styled.span`
  margin-bottom: 1rem;
  font-size: 2rem;
`

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LoginBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`
