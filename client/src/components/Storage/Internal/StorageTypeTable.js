import React from 'react'
import styled from 'styled-components'
import { Loader, File } from 'components/index'

const StorageTypeTable = ({ files, loading }) => {
  return (
    <StorageStyles>
      {loading ? (
        <Loader />
      ) : (
        <StorageContainer>
          {files.length !== 0 ? (
            files.map((file) => <File key={file._id} file={file} />)
          ) : (
            <StorageEmpty>Files not found</StorageEmpty>
          )}
        </StorageContainer>
      )}
    </StorageStyles>
  )
}

export default StorageTypeTable

const StorageStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  height: 100%;
`

const StorageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 100%;
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
