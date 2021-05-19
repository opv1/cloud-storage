import React from 'react'
import styled from 'styled-components'
import { useActions } from 'hooks/useActions'
import { Icon } from 'components/UI/index'
import sizeFormat from 'utils/sizeFormat'
import { IFileTypeProps } from 'interfaces'

const FileTypeList: React.FC<IFileTypeProps> = ({
  file,
  openFolder,
  deleteFile,
}) => {
  const { downloadFile } = useActions()

  return (
    <FileStyles>
      <FileImage>
        {file.type === 'dir' ? (
          <Icon icon='fileIconImageList' className='fas fa-folder-open' />
        ) : (
          <Icon icon='fileIconImageList' className='fas fa-file' />
        )}
      </FileImage>
      <FileName
        onClick={() => openFolder(file)}
        style={file.type === 'dir' ? { cursor: 'pointer' } : {}}
      >
        {file.name}
      </FileName>
      <FileIcons>
        <Icon
          icon='fileIconIconsList'
          className='fas fa-trash-alt'
          onClick={deleteFile}
        />
        {file.type !== 'dir' && (
          <Icon
            icon='fileIconIconsList'
            className='fas fa-download'
            onClick={() => downloadFile(file)}
          />
        )}
      </FileIcons>
      <FileDate>
        {new Intl.DateTimeFormat().format(new Date(file.date))}
      </FileDate>
      <FileSize>{sizeFormat(file.size)}</FileSize>
    </FileStyles>
  )
}

export default FileTypeList

const FileStyles = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 4fr repeat(4, 1fr);
  border-bottom: 1px solid #696969;
  transition: 0.2s;

  &:hover {
    transform: scale(1.02);
  }

  @media ${({ theme }) => theme.media.tablet} {
    grid-template-columns: 1fr 2fr repeat(3, 1fr);
  }

  @media ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 2fr repeat(3, 1fr);
    height: 70px;
  }
`

const FileImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
  grid-column-start: 1;
  width: 100%;
  min-width: 80px;
  font-size: 3rem;

  @media ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`

const FileName = styled.div`
  display: flex;
  align-items: center;
  grid-column-start: 2;
  overflow: hidden;
  width: 100%;
  height: 100%;

  @media ${({ theme }) => theme.media.mobile} {
    grid-column-start: 1;
  }
`

const FileIcons = styled.div`
  display: grid;
  grid-column-start: 4;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  text-align: center;

  @media ${({ theme }) => theme.media.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column-start: 3;
  }

  @media ${({ theme }) => theme.media.mobile} {
    grid-column-start: 3;
  }
`

const FileDate = styled.div`
  justify-self: center;
  grid-column-start: 5;
  width: 100%;
  text-align: center;

  @media ${({ theme }) => theme.media.tablet} {
    grid-column-start: 4;
  }

  @media ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`

const FileSize = styled.div`
  justify-self: center;
  grid-column-start: 6;
  width: 100%;
  text-align: center;

  @media ${({ theme }) => theme.media.tablet} {
    grid-column-start: 5;
  }

  @media ${({ theme }) => theme.media.mobile} {
    grid-column-start: 4;
  }
`
