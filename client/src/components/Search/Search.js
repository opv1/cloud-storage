import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../store/actions/index'
import { Input, Button } from '../UI/index'
import './Search.scss'

const Search = () => {
  const [value, setValue] = useState('')

  const { loading } = useSelector((state) => state.app)

  const dispatch = useDispatch()

  const handlerChange = (e) => {
    setValue(e.target.value)
  }

  const onSearchFile = () => {
    dispatch(actions.searchFile(value))
  }

  return (
    <div className='search'>
      <Input
        className='search__input'
        onChange={handlerChange}
        value={value}
        name='search'
        placeholder='Searching...'
      />
      <Button
        className='search__button'
        onClick={onSearchFile}
        name='Search'
        disabled={loading}
      />
    </div>
  )
}

export default Search
