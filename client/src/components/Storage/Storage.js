import React from 'react'
import { useSelector } from 'react-redux'
import { File, Loader } from '../index'
import './Storage.scss'

const Storage = () => {
  const { loading, view } = useSelector((state) => state.app)
  const { files } = useSelector((state) => state.file)

  if (view === 'list') {
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

  if (view === 'table') {
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
}

export default Storage
