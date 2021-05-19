import React, { useState } from 'react'
import styled from 'styled-components'
import { useActions } from 'hooks/useActions'
import { Panel, Progress, Storage } from 'components/index'

const Disk: React.FC = () => {
  const [dragEnter, setDragEnter] = useState<boolean>(false)
  const { uploadFile } = useActions()

  const onDragEnter = (event: React.DragEvent) => {
    event.preventDefault()
    event.stopPropagation()
    setDragEnter(true)
  }

  const onDragLeave = (event: React.DragEvent) => {
    event.preventDefault()
    event.stopPropagation()
    setDragEnter(false)
  }

  const onDragOver = (event: React.DragEvent) => {
    event.preventDefault()
    event.stopPropagation()
    setDragEnter(true)
  }

  const onDrop = (event: React.DragEvent) => {
    event.preventDefault()
    event.stopPropagation()

    const files = [...event.dataTransfer.files]
    files.forEach((file) => uploadFile(file))

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
