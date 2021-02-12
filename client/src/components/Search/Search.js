import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import actions from '../../store/actions/index'
import { Input } from '../UI/index'
import './Search.scss'

const Search = () => {
  const [value, setValue] = useState('')
  const [searchTimeout, setSearchTimeout] = useState(false)

  const dispatch = useDispatch()

  const handlerChange = (e) => {
    setValue(e.target.value)

    if (searchTimeout) {
      clearTimeout(searchTimeout)
    }

    if (e.target.value) {
      setSearchTimeout(
        setTimeout(() => {
          dispatch(actions.searchFile(value))
        }, 500)
      )
    } else {
      dispatch(actions.getFiles())
    }
  }

  const onResetSearch = () => {
    setValue('')
    dispatch(actions.getFiles())
  }

  return (
    <div className='search'>
      <div className='search__block'>
        <Input
          className='search__input'
          onChange={handlerChange}
          value={value}
          name='search'
          placeholder='Searching...'
        />
        {value ? (
          <i className='fas fa-times' onClick={onResetSearch}></i>
        ) : null}
      </div>
    </div>
  )
}

export default Search
