import React from 'react'
import { useTypeSelector } from 'hooks/useTypeSelector'
import StorageTypeList from 'components/Storage/Internal/StorageTypeList'
import StorageTypeTable from 'components/Storage/Internal/StorageTypeTable'

const Storage: React.FC = () => {
  const { view } = useTypeSelector((state) => state.app)

  if (view === 'table') {
    return <StorageTypeTable />
  } else {
    return <StorageTypeList />
  }
}

export default Storage
