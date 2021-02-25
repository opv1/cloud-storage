import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import actions from 'store/actions/index'
import { Panel, Progress, Storage } from 'components/index'

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
    <DiskStyles
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
    >
      {!dragEnter ? (
        <DiskContainer>
          <Panel />
          <Progress />
          <Storage />
        </DiskContainer>
      ) : (
        <DiskDrop
          onDrop={onDrop}
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDragOver={onDragOver}
        >
          Drag and drop
        </DiskDrop>
      )}
    </DiskStyles>
  )
}

export default Disk

const DiskStyles = styled.div`
  display: flex;
  margin: 0 2rem;
  height: calc(100vh - 60px);
`

const DiskContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  width: 100%;
`

const DiskDrop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  border: 2px dashed #696969;
  width: 100%;
  height: calc(100vh - 90px);
  font-size: 3rem;
  color: #696969;
`
