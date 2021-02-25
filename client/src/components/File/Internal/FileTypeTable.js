import React from 'react'
import styled from 'styled-components'
import { Icon } from 'components/UI/index'

const FileTypeTable = ({
  file,
  onOpenFolder,
  onDownloadFile,
  onDeleteFile,
}) => {
  return (
    <FileStyles>
      <FileImage onClick={() => onOpenFolder(file)}>
        {file.type === 'dir' ? (
          <Icon fileIconImageTable className='fas fa-folder-open' />
        ) : (
          <Icon
            fileIconImageTable
            className='fas fa-file'
            onClick={(e) => onDownloadFile(e)}
          />
        )}
      </FileImage>
      <FileBlock>
        <FileName>{file.name}</FileName>
        <Icon
          fileIconIconsTable
          className='fas fa-trash-alt'
          onClick={(e) => onDeleteFile(e)}
        />
      </FileBlock>
    </FileStyles>
  )
}

export default FileTypeTable

const FileStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  width: 200px;
  height: 200px;

  &:hover {
    .fa-trash-alt {
      opacity: 0.5;
    }
  }
`

const FileImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const FileBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem;

  .fa-trash-alt {
    margin: 0.5rem;
    font-size: 1.5rem;
    opacity: 0;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
`

const FileName = styled.span`
  overflow: hidden;
  font-size: 1.2rem;
  text-align: center;
  text-overflow: ellipsis;
`
