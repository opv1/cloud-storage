import React from 'react'
import styled from 'styled-components'
import { useActions } from 'hooks/useActions'
import { Icon } from 'components/UI/index'
import { IFileTypeProps } from 'interfaces'

const FileTypeTable: React.FC<IFileTypeProps> = ({
  file,
  openFolder,
  deleteFile,
}) => {
  const { downloadFile } = useActions()

  return (
    <FileStyles>
      <FileImage onClick={() => openFolder(file)}>
        {file.type === 'dir' ? (
          <Icon icon='fileIconImageTable' className='fas fa-folder-open' />
        ) : (
          <Icon
            icon='fileIconImageTable'
            className='fas fa-file'
            onClick={() => downloadFile(file)}
          />
        )}
      </FileImage>
      <FileBlock>
        <FileName>{file.name}</FileName>
        <Icon
          icon='fileIconIconsTable'
          className='fas fa-trash-alt'
          onClick={deleteFile}
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
