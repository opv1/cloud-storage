import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useTypeSelector } from 'hooks/useTypeSelector'
import { useActions } from 'hooks/useActions'
import { Search } from 'components/index'
import { Button, Label, Input, Icon } from 'components/UI/index'

const Panel: React.FC = () => {
  const [sortType, setSortType] = useState<string>('date')
  const { view } = useTypeSelector((state) => state.app)
  const { currentDir } = useTypeSelector((state) => state.file)
  const { getFiles, backDir, uploadFile, openModal, setView } = useActions()

  const uploadFiles = (event: React.ChangeEvent) => {
    const eventTarget = event.target as HTMLInputElement

    if (eventTarget.files) {
      const files = [...eventTarget.files]
      files.forEach((file) => uploadFile(file))
    }
  }

  useEffect(() => {
    getFiles(currentDir, sortType)
    // eslint-disable-next-line
  }, [currentDir, sortType])

  return (
    <PanelStyles>
      <Search search='searchPanel' />
      <PanelButtons>
        <Button
          button='panelButton'
          onClick={() => backDir()}
          name='Back'
          disabled={!currentDir}
        />
        <Button
          button='panelButton'
          onClick={() => openModal('createFolder')}
          name='Create folder'
        />
        <Label label='panelLabel' htmlFor='file' name='Upload files' />
        <Input
          input='panelInput'
          onChange={uploadFiles}
          id='file'
          type='file'
          name='file'
          multiple={true}
        />
      </PanelButtons>
      <PanelOptions>
        <PanelSort>
          <PanelTitle>Sorting files:</PanelTitle>
          <select
            onChange={(event) => setSortType(event.target.value)}
            value={sortType}
          >
            <option value='date'>Date</option>
            <option value='type'>Type</option>
            <option value='name'>Name</option>
          </select>
        </PanelSort>
        <PanelView>
          <PanelTitle>View files:</PanelTitle>
          <PanelIcons>
            <Icon
              icon='panelIcon'
              activeIcon={view === 'list'}
              className='fas fa-list'
              onClick={() => setView('list')}
            />
            <Icon
              icon='panelIcon'
              activeIcon={view === 'table'}
              className='fas fa-table'
              onClick={() => setView('table')}
            />
          </PanelIcons>
        </PanelView>
      </PanelOptions>
    </PanelStyles>
  )
}

export default Panel

const PanelStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const PanelButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`

const PanelOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 1rem;
`

const PanelSort = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem;
`

const PanelTitle = styled.span`
  margin: 1rem;
`

const PanelView = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem;
`

const PanelIcons = styled.div`
  display: flex;
  align-items: center;
`
