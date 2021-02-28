import React from 'react'
import { useSelector } from 'react-redux'
import StorageTypeList from 'components/Storage/Internal/StorageTypeList'
import StorageTypeTable from 'components/Storage/Internal/StorageTypeTable'

const Storage = () => {
  const { loading, view } = useSelector((state) => state.app)
  const { files } = useSelector((state) => state.file)

  if (view === 'list') {
    return <StorageTypeList files={files} loading={loading} />
  }

  if (view === 'table') {
    return <StorageTypeTable files={files} loading={loading} />
  }
}

export default Storage
