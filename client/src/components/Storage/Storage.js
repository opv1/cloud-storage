import React from 'react'
import { useSelector } from 'react-redux'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { File } from '../index'
import './Storage.scss'

const Storage = () => {
  const { view } = useSelector((state) => state.app)
  const { files } = useSelector((state) => state.file)

  const cls = ['storage']
  const styles = {}

  if (view === 'list') {
    cls.push('storage_list')
  }

  if (view === 'table') {
    cls.push('storage_table')
  }

  if (files.length === 0) {
    styles.justifyContent = 'center'
    styles.alignItems = 'center'
  }

  if (view === 'list') {
    return (
      <div className={cls.join(' ')} style={styles}>
        <div className='storage__header'>
          <div className='storage__name'>Name</div>
          <div className='storage__date'>Date</div>
          <div className='storage__size'>Size</div>
        </div>
        <TransitionGroup className='storage__container'>
          {files.length !== 0 ? (
            files.map((file) => {
              return <File key={file._id} file={file} />
            })
          ) : (
            <div className='storage__empty'>Files not found</div>
          )}
        </TransitionGroup>
      </div>
    )
  }

  if (view === 'table') {
    return (
      <div className={cls.join(' ')} style={styles}>
        {files.length !== 0 ? (
          files.map((file) => <File key={file._id} file={file} />)
        ) : (
          <div className='storage__empty'>Files not found</div>
        )}
      </div>
    )
  }
}

export default Storage
