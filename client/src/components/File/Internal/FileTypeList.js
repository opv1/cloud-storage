import React from 'react'
import styled from 'styled-components'
import sizeFormat from 'utils/sizeFormat'
import { Icon } from 'components/UI/index'

const FileTypeList = ({ file, onOpenFolder, onDownloadFile, onDeleteFile }) => {
  return (
    <FileStyles>
      <FileImage>
        {file.type === 'dir' ? (
          <Icon fileIconImageList className='fas fa-folder-open' />
        ) : (
          <Icon fileIconImageList className='fas fa-file' />
        )}
      </FileImage>
      <FileName
        onClick={() => onOpenFolder(file)}
        style={file.type === 'dir' ? { cursor: 'pointer' } : {}}
      >
        {file.name}
      </FileName>
      <FileIcons>
        <Icon
          fileIconIconsList
          className='fas fa-trash-alt'
          onClick={(e) => onDeleteFile(e)}
        />
        {file.type !== 'dir' && (
          <Icon
            fileIconIconsList
            className='fas fa-download'
            onClick={(e) => onDownloadFile(e)}
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

  @media ${(props) => props.theme.media.tablet} {
    grid-template-columns: 1fr 2fr repeat(3, 1fr);
  }

  @media ${(props) => props.theme.media.mobile} {
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

  @media ${(props) => props.theme.media.mobile} {
    display: none;
  }
`

const FileName = styled.div`
  display: flex;
  align-items: center;
  grid-column-start: 2;
  margin: 0.3rem;
  width: 100%;
  height: 100%;

  @media ${(props) => props.theme.media.mobile} {
    grid-column-start: 1;
  }
`

const FileIcons = styled.div`
  display: grid;
  grid-column-start: 4;
  grid-template-columns: repeat(2, 1fr);
  margin: 0.3rem;
  width: 100%;

  @media ${(props) => props.theme.media.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column-start: 3;
  }

  @media ${(props) => props.theme.media.mobile} {
    grid-column-start: 2;
  }
`

const FileDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
  grid-column-start: 5;
  margin: 0.3rem;
  width: 100%;

  @media ${(props) => props.theme.media.tablet} {
    grid-column-start: 4;
  }

  @media ${(props) => props.theme.media.mobile} {
    grid-column-start: 3;
  }
`

const FileSize = styled.div`
  justify-self: center;
  grid-column-start: 6;
  margin: 0.3rem;
  width: 100%;

  @media ${(props) => props.theme.media.tablet} {
    grid-column-start: 5;
  }

  @media ${(props) => props.theme.media.mobile} {
    grid-column-start: 4;
  }
`
