import React from 'react'
import styled from 'styled-components'
import { useTypeSelector } from 'hooks/useTypeSelector'
import { Loader, File } from 'components/index'
import { FileType } from 'store/types/file'

const StorageTypeList: React.FC = () => {
  const { loading } = useTypeSelector((state) => state.app)
  const { files } = useTypeSelector((state) => state.file)

  return (
    <StorageStyles>
      <StorageHeader>
        <StorageName>Name</StorageName>
        <StorageDate>Date</StorageDate>
        <StorageSize>Size</StorageSize>
      </StorageHeader>
      {loading ? (
        <Loader />
      ) : (
        <StorageContainer>
          {files.length !== 0 ? (
            files.map((file: FileType) => <File key={file._id} file={file} />)
          ) : (
            <StorageEmpty>Files not found</StorageEmpty>
          )}
        </StorageContainer>
      )}
    </StorageStyles>
  )
}

export default StorageTypeList

const StorageStyles = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const StorageHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr repeat(4, 1fr);

  @media ${({ theme }) => theme.media.tablet} {
    grid-template-columns: 1fr 2fr repeat(3, 1fr);
  }

  @media ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 2fr repeat(3, 1fr);
  }
`

const StorageName = styled.div`
  grid-column-start: 2;

  @media ${({ theme }) => theme.media.tablet} {
    grid-column-start: 2;
  }

  @media ${({ theme }) => theme.media.mobile} {
    justify-self: center;
    grid-column-start: 1;
  }
`

const StorageDate = styled.div`
  justify-self: center;
  grid-column-start: 5;

  @media ${({ theme }) => theme.media.tablet} {
    grid-column-start: 4;
  }

  @media ${({ theme }) => theme.media.mobile} {
    grid-column-start: 3;
  }
`

const StorageSize = styled.div`
  justify-self: center;
  grid-column-start: 6;

  @media ${({ theme }) => theme.media.tablet} {
    grid-column-start: 5;
  }

  @media ${({ theme }) => theme.media.mobile} {
    grid-column-start: 4;
  }
`

const StorageContainer = styled.div`
  height: 100%;
`

const StorageEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 2rem;
  text-align: center;
`
