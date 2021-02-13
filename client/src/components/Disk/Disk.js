import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../store/actions/index'
import { Panel, Progress, Storage } from '../index'
import './Disk.scss'

const Disk = () => {
  const [dragEnter, setDragEnter] = useState(false)

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
    files.forEach((file) => dispatch(actions.uploadFile(currentDir, file)))

    setDragEnter(false)
  }

  return (
    <div
      className='disk'
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
    >
      {!dragEnter ? (
        <div className='disk__container'>
          <Panel />
          <Progress />
          <Storage />
        </div>
      ) : (
        <div
          className='disk__drop'
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

export default Disk
