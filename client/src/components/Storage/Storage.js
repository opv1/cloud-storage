import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../store/actions/index'
import actionCreators from '../../store/actions/actionCreators/index'
import { List, Progress, Sort, Search } from '../index'
import { Button, Label, Input } from '../UI/index'
import './Storage.scss'

const Storage = () => {
  const [dragEnter, setDragEnter] = useState(false)
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

  const onDragEnter = (e) => {
    e.preventDefault()
    e.stopPropagation()

    setDragEnter(true)
  }

  const onDragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()

    setDragEnter(false)
  }

  const onDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()

    setDragEnter(true)
  }

  const onDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()

    let files = [...e.dataTransfer.files]

    files.forEach((file) => dispatch(actions.uploadFile(file, currentDir)))

    setDragEnter(false)
  }

  useEffect(() => {
    dispatch(actions.getFiles(currentDir, sortType))
    // eslint-disable-next-line
  }, [currentDir, sortType])

  return (
    <div
      className='storage'
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
    >
      {!dragEnter ? (
        <div className='storage__container'>
          <div className='storage__control'>
            <div className='storage__buttons'>
              <Button onClick={() => onGoBack()} name='Back' />
              <Button
                onClick={() => dispatch(actionCreators.setModal())}
                name='Create folder'
              />
            </div>
            <div className='storage__upload'>
              <Label htmlFor='file' name='Upload file' />
              <Input
                onChange={(e) => onUploadFile(e)}
                id='file'
                type='file'
                name='file'
                multiple={true}
              />
            </div>
            <Sort sortType={sortType} setSortType={setSortType} />
            <Search />
          </div>
          <Progress />
          <List />
        </div>
      ) : (
        <div
          className='storage__drop'
          onDrop={onDrop}
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDragOver={onDragOver}
        >
          Drag and drop
        </div>
      )}
    </div>
  )
}

export default Storage
