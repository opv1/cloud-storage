import React from 'react'
import { useSelector } from 'react-redux'
import { Item } from '../index'
import './List.scss'

const List = () => {
  const { files } = useSelector((state) => state.file)

  return (
    <div className='list'>
      {files.length !== 0 ? (
        files.map((file) => <Item key={file._id} file={file} />)
      ) : (
        <div className='list__empty'>Empty folder</div>
      )}
    </div>
  )
}

export default List
