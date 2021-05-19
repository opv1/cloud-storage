import React, { useState } from 'react'
import styled from 'styled-components'
import { useTypeSelector } from 'hooks/useTypeSelector'
import { useActions } from 'hooks/useActions'
import { Label, Input, Button } from 'components/UI/index'
import { FormSinginType } from 'types'

const Singin: React.FC = () => {
  const [form, setForm] = useState<FormSinginType>({
    email: '',
    password: '',
  })
  const { loading } = useTypeSelector((state) => state.app)
  const { singinUser } = useActions()

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    singinUser(form)
  }

  return (
    <LoginStyles>
      <LoginContainer>
        <LoginTitle>Sing In Form</LoginTitle>
        <LoginForm onSubmit={handlerSubmit}>
          <LoginBlock>
            <Label label='authLabel' htmlFor='email' name='Email' />
            <Input
              input='authInput'
              onChange={handlerChange}
              id='email'
              type='text'
              value={form.email}
              name='email'
              placeholder='example@mail.com'
            />
            <Label label='loginLabel' htmlFor='password' name='Password' />
            <Input
              input='authInput'
              onChange={handlerChange}
              id='password'
              type='password'
              value={form.password}
              name='password'
              placeholder='******'
            />
          </LoginBlock>
          <Button button='authButton' name='Login' disabled={loading} />
        </LoginForm>
      </LoginContainer>
    </LoginStyles>
  )
}

export default Singin

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
  background: #fff;
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
