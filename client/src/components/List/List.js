import React from 'react'
import { useSelector } from 'react-redux'
import { Item } from '../index'
import './List.scss'

const List = () => {
  const { files } = useSelector((state) => state.file)

  const styles = {}

  if (files.length === 0) {
    styles.justifyContent = 'center'
    styles.alignItems = 'center'
  }

  return (
    <div className='list' style={styles}>
      {files.length !== 0 ? (
        files.map((file) => <Item key={file._id} file={file} />)
      ) : (
        <div className='list__empty'>Empty folder</div>
      )}
    </div>
  )
}

export default List
