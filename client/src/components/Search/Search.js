import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import actions from '../../store/actions/index'
import { Input, Button } from '../UI/index'
import './Search.scss'

const Search = () => {
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const handlerChange = (e) => {
    setValue(e.target.value)
  }

  const onSearchFile = () => {
    dispatch(actions.searchFile(value))
  }

  return (
    <div className='search'>
      <Input onChange={handlerChange} value={value} />
      <Button onClick={onSearchFile} name='Search' />
    </div>
  )
}

export default Search
