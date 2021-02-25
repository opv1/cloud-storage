import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled, { css } from 'styled-components'
import actions from 'store/actions/index'
import { Input, Icon } from 'components/UI/index'

const Search = (props) => {
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
    <SearchStyles {...props}>
      <SearchBlock>
        <Input
          searchInput
          onChange={handlerChange}
          type='text'
          value={value}
          name='search'
          placeholder='Searching...'
        />
        {value ? (
          <Icon searchIcon className='fas fa-times' onClick={onResetSearch} />
        ) : null}
      </SearchBlock>
    </SearchStyles>
  )
}

export default Search

const SearchStyles = styled.div`
  display: flex;
  align-items: center;

  @media ${(props) => props.theme.media.mobile} {
    display: none;
  }

  @media ${(props) => props.theme.media.mobile && props.searchPanel} {
    display: flex;
  }

  ${(props) =>
    props.searchPanel &&
    css`
      display: none;
    `}
`

const SearchBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`
