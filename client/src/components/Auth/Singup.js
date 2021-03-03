import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import actions from 'store/actions/index'
import { Label, Input, Button } from 'components/UI/index'

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
    <SingupStyles>
      <SingupContainer>
        <SingupTitle>Singup Form</SingupTitle>
        <SingupForm>
          <SingupBlock>
            <Label singupLabel htmlFor='email' name='Email' />
            <Input
              authInput
              onChange={handlerChange}
              id='email'
              type='text'
              value={form.email}
              name='email'
              placeholder='example@mail.com'
            />
            <Label singupLabel htmlFor='password' name='Password' />
            <Input
              authInput
              onChange={handlerChange}
              id='password'
              type='password'
              value={form.password}
              name='password'
              placeholder='******'
            />
            <Label
              singupLabel
              htmlFor='confirmPassword'
              name='Confirm password'
            />
            <Input
              authInput
              onChange={handlerChange}
              id='confirmPassword'
              type='password'
              value={form.confirmPassword}
              name='confirmPassword'
              placeholder='******'
            />
          </SingupBlock>
          <Button
            singupButton
            onClick={(e) => onSingupUser(e, form)}
            name='Singup'
            disabled={loading}
          />
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
