import React from 'react'
import { useSelector } from 'react-redux'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { File } from '../index'
import './Storage.scss'

const Storage = () => {
  const { view } = useSelector((state) => state.app)
  const { files } = useSelector((state) => state.file)

  if (view === 'list') {
    return (
      <div className='storage storage_list'>
        <div className='storage__header_list'>
          <div className='storage__name_list'>Name</div>
          <div className='storage__date_list'>Date</div>
          <div className='storage__size_list'>Size</div>
        </div>
        <TransitionGroup className='storage__container_list'>
          {files.length !== 0 ? (
            files.map((file) => {
              return <File key={file._id} file={file} />
            })
          ) : (
            <div className='storage__empty_list'>Files not found</div>
          )}
        </TransitionGroup>
      </div>
    )
  }

  if (view === 'table') {
    return (
      <div className='storage storage_table'>
        {files.length !== 0 ? (
          files.map((file) => <File key={file._id} file={file} />)
        ) : (
          <div className='storage__empty_table'>Files not found</div>
        )}
      </div>
    )
  }
}

export default Storage
