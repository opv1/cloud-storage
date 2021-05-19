import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { useTypeSelector } from 'hooks/useTypeSelector'
import { useActions } from 'hooks/useActions'
import { useDebounce } from 'hooks/useDebounce'
import { Input } from 'components/UI/index'
import { ISearchProps } from 'interfaces'

const Search: React.FC<ISearchProps> = (props) => {
  const [value, setValue] = useState<string>('')
  const { loading } = useTypeSelector((state) => state.app)
  const { getFiles, searchFile } = useActions()
  const searchDebounce = useDebounce(searchFile, 500)

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)

    if (!event.target.value) getFiles(null, 'date')
    if (!loading) searchDebounce(event.target.value)
  }

  return (
    <SearchStyles {...props}>
      <SearchBlock>
        <Input
          input='searchInput'
          onChange={handlerChange}
          type='text'
          value={value}
          name='search'
          placeholder='Searching...'
        />
      </SearchBlock>
    </SearchStyles>
  )
}

export default Search

const SearchStyles = styled.div<{ search: string }>`
  display: flex;
  align-items: center;

  ${({ search }) =>
    search === 'searchNavbar' &&
    css`
      @media ${({ theme }) => theme.media.tablet} {
        display: none;
      }
    `}

  ${({ search }) =>
    search === 'searchPanel' &&
    css`
      display: none;
      margin: 1rem;

      @media ${({ theme }) => theme.media.tablet} {
        display: flex;
      }
    `}
`

const SearchBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`
