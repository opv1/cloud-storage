import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../store/actions/index'
import actionCreators from '../../store/actions/actionCreators/index'
import { Button, Label, Input, Icon } from '../UI/index'
import './Panel.scss'

const Panel = () => {
  const [sortType, setSortType] = useState('date')

  const { view } = useSelector((state) => state.app)
  const { currentDir, stack } = useSelector((state) => state.file)

  const dispatch = useDispatch()

  const onGoBack = () => {
    const backDir = stack.pop()
    dispatch(actionCreators.setCurrentDir(backDir))
  }

  const onUploadFile = (e) => {
    const files = [...e.target.files]
    files.forEach((file) => dispatch(actions.uploadFile(currentDir, file)))
  }

  useEffect(() => {
    dispatch(actions.getFiles(currentDir, sortType))
    // eslint-disable-next-line
  }, [currentDir, sortType])

  return (
    <div className='panel'>
      <div className='panel__buttons'>
        <Button
          className='panel__button'
          onClick={() => onGoBack()}
          name='Back'
          disabled={!currentDir}
        />
        <Button
          className='panel__button'
          onClick={() => dispatch(actionCreators.setModal('create'))}
          name='Create folder'
        />
      </div>
      <div className='panel__upload'>
        <Label className='panel__label' htmlFor='file' name='Upload file(s)' />
        <Input
          className='panel__input'
          onChange={(e) => onUploadFile(e)}
          id='file'
          type='file'
          name='file'
          multiple={true}
        />
      </div>
      <div className='panel__options'>
        <div className='panel__sort'>
          <span>Sorting files:</span>
          <select
            onChange={(e) => setSortType(e.target.value)}
            value={sortType}
          >
            <option value='date'>Date</option>
            <option value='type'>Type</option>
            <option value='name'>Name</option>
          </select>
        </div>
        <div className='panel__views'>
          <span>View files:</span>
          <div className='panel__icons'>
            <Icon
              className='fas fa-list'
              onClick={() => dispatch(actionCreators.setView('list'))}
              active={view === 'list'}
            />
            <Icon
              className='fas fa-table'
              onClick={() => dispatch(actionCreators.setView('table'))}
              active={view === 'table'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Panel
