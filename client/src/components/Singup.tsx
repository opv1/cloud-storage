import React, { useState } from 'react'
import styled from 'styled-components'
import { useTypeSelector } from 'hooks/useTypeSelector'
import { useActions } from 'hooks/useActions'
import { Label, Input, Button } from 'components/UI/index'
import { FormSingupType } from 'types'

const Singup: React.FC = () => {
  const [form, setForm] = useState<FormSingupType>({
    email: '',
    password: '',
    confirmPassword: '',
  })
  const { loading } = useTypeSelector((state) => state.app)
  const { singupUser } = useActions()

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    singupUser(form)
  }

  return (
    <SingupStyles>
      <SingupContainer>
        <SingupTitle>Sing Up Form</SingupTitle>
        <SingupForm onSubmit={handlerSubmit}>
          <SingupBlock>
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
            <Label label='authLabel' htmlFor='password' name='Password' />
            <Input
              input='authInput'
              onChange={handlerChange}
              id='password'
              type='password'
              value={form.password}
              name='password'
              placeholder='******'
            />
            <Label
              label='authLabel'
              htmlFor='confirmPassword'
              name='Confirm password'
            />
            <Input
              input='authInput'
              onChange={handlerChange}
              id='confirmPassword'
              type='password'
              value={form.confirmPassword}
              name='confirmPassword'
              placeholder='******'
            />
          </SingupBlock>
          <Button button='authButton' name='Singup' disabled={loading} />
        </SingupForm>
      </SingupContainer>
    </SingupStyles>
  )
}

export default Singup

const SingupStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);
`

const SingupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 2rem;
  background: #fff;
`

const SingupTitle = styled.span`
  margin-bottom: 1rem;
  font-size: 2rem;
`

const SingupForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SingupBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`
