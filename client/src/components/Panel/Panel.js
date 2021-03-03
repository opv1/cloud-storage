import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import actions from 'store/actions/index'
import actionCreators from 'store/actions/actionCreators/index'
import { Search } from 'components/index'
import { Button, Label, Input, Icon } from 'components/UI/index'

const Panel = () => {
  const [sortType, setSortType] = useState('date')
  const { view } = useSelector((state) => state.app)
  const { currentDir, stack } = useSelector((state) => state.file)
  const dispatch = useDispatch()

  const onGoBack = () => {
    const backDir = stack.pop()
    dispatch(actionCreators.filesCurrentDir(backDir))
  }

  const onCreateFolder = () => {
    dispatch(actionCreators.appBackdrop())
    dispatch(actionCreators.modalOpen('createFolder'))
  }

  const onUploadFiles = (e) => {
    const files = [...e.target.files]
    files.forEach((file) => dispatch(actions.uploadFile(currentDir, file)))
  }

  useEffect(() => {
    dispatch(actions.getFiles(currentDir, sortType))
    // eslint-disable-next-line
  }, [currentDir, sortType])

  return (
    <PanelStyles>
      <Search searchPanel />
      <PanelButtons>
        <Button
          panelButton
          onClick={() => onGoBack()}
          name='Back'
          disabled={!currentDir}
        />
        <Button panelButton onClick={onCreateFolder} name='Create folder' />
      </PanelButtons>
      <PanelUpload>
        <Label panelLabel htmlFor='file' name='Upload file(s):' />
        <Input
          panelInput
          onChange={(e) => onUploadFiles(e)}
          id='file'
          type='file'
          name='file'
          multiple={true}
        />
      </PanelUpload>
      <PanelOptions>
        <PanelSort>
          <span>Sorting files:</span>
          <select
            onChange={(e) => setSortType(e.target.value)}
            value={sortType}
          >
            <option value='date'>Date</option>
            <option value='type'>Type</option>
            <option value='name'>Name</option>
          </select>
        </PanelSort>
        <PanelView>
          <span>View files:</span>
          <PanelIcons>
            <Icon
              panelIcon
              activeIcon={view === 'list'}
              className='fas fa-list'
              onClick={() => dispatch(actionCreators.appView('list'))}
            />
            <Icon
              panelIcon
              activeIcon={view === 'table'}
              className='fas fa-table'
              onClick={() => dispatch(actionCreators.appView('table'))}
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
  align-items: center;
  justify-content: center;
  margin: 1rem;
`

const PanelUpload = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  border: 1px solid #696969;
  border-radius: 3px;
  padding: 1rem;
  max-width: 300px;
`

const PanelOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 1rem;
`

const PanelSort = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem;

  span {
    margin-right: 1rem;
  }
`

const PanelView = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem;

  span {
    margin-right: 1rem;
  }
`

const PanelIcons = styled.div`
  display: flex;
  align-items: center;
`
