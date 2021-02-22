import React from 'react'
import { useSelector } from 'react-redux'
import StorageTypeList from 'components/Storage/Internal/StorageTypeList'
import StorageTypeTable from 'components/Storage/Internal/StorageTypeTable'
import 'components/Storage/Storage.scss'

const Storage = () => {
  const { loading, view } = useSelector((state) => state.app)
  const { files } = useSelector((state) => state.file)

  if (view === 'typeList') {
    return <StorageTypeList files={files} loading={loading} />
  }

  if (view === 'typeTable') {
    return <StorageTypeTable files={files} loading={loading} />
  }
}

export default Storage
