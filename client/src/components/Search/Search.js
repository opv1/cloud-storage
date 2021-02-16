import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import actions from '../../store/actions/index'
import { Input, Icon } from '../UI/index'
import './Search.scss'

const Search = ({ className }) => {
  const [value, setValue] = useState('')
  const [searchTimeout, setSearchTimeout] = useState(false)

  const dispatch = useDispatch()

  const cls = ['search']

  if (className) {
    cls.unshift(className)
  }

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
    <div className={cls.join(' ')}>
      <div className='search__block'>
        <Input
          className='search__input'
          onChange={handlerChange}
          value={value}
          name='search'
          placeholder='Searching...'
        />
        {value ? (
          <Icon className='search__icon fas fa-times' onClick={onResetSearch} />
        ) : null}
      </div>
    </div>
  )
}

export default Search
