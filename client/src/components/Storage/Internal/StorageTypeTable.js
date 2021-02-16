import React from 'react'
import { Loader, File } from '../../index'

const StorageTypeTable = ({ files, loading }) => {
  return (
    <div className='storage storage_table'>
      {loading ? (
        <Loader />
      ) : (
        <div className='storage__container_table'>
          {files.length !== 0 ? (
            files.map((file) => <File key={file._id} file={file} />)
          ) : (
            <div className='storage__empty_table'>Files not found</div>
          )}
        </div>
      )}
    </div>
  )
}

export default StorageTypeTable
