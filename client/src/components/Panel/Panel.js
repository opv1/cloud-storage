import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../store/actions/index'
import actionCreators from '../../store/actions/actionCreators/index'
import { Sort } from '../index'
import { Button, Label, Input } from '../UI/index'
import './Panel.scss'

const Panel = () => {
  const [sortType, setSortType] = useState('type')

  const { currentDir, stack } = useSelector((state) => state.file)

  const dispatch = useDispatch()

  const onGoBack = () => {
    const backDir = stack.pop()
    dispatch(actionCreators.setCurrentDir(backDir))
  }

  const onUploadFile = (e) => {
    const files = [...e.target.files]
    files.forEach((file) => dispatch(actions.uploadFile(file, currentDir)))
  }

  useEffect(() => {
    dispatch(actions.getFiles(currentDir, sortType))
    // eslint-disable-next-line
  }, [currentDir, sortType])

  return (
    <div className='panel'>
      <div className='panel__container'>
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
        <Sort sortType={sortType} setSortType={setSortType} />
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
    </div>
  )
}

export default Panel
