import React from 'react'
import { File, Loader } from '../../index'

const StorageTypeList = ({ files, loading }) => {
  return (
    <div className='storage storage_list'>
      <div className='storage__header_list'>
        <div className='storage__name_list'>Name</div>
        <div className='storage__date_list'>Date</div>
        <div className='storage__size_list'>Size</div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className='storage__container_list'>
          {files.length !== 0 ? (
            files.map((file) => <File key={file._id} file={file} />)
          ) : (
            <div className='storage__empty_list'>Files not found</div>
          )}
        </div>
      )}
    </div>
  )
}

export default StorageTypeList
