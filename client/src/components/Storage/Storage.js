import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../store/actions/index'
import { Panel, Progress, Loader, List } from '../index'
import './Storage.scss'

const Storage = () => {
  const [dragEnter, setDragEnter] = useState(false)

  const { loading } = useSelector((state) => state.app)
  const { currentDir } = useSelector((state) => state.file)

  const dispatch = useDispatch()

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

  return (
    <div
      className='storage'
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
    >
      {!dragEnter ? (
        <div className='storage__container'>
          <Panel />
          <Progress />
          {loading ? <Loader /> : <List />}
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
