import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../store/actions/index'
import actionCreators from '../../store/actions/actionCreators/index'
import './Item.scss'

const File = ({ file }) => {
  const { currentDir } = useSelector((state) => state.file)

  const dispatch = useDispatch()

  const onOpenFolder = (file) => {
    if (file.type === 'dir') {
      dispatch(actionCreators.pushStack(currentDir))
      dispatch(actionCreators.setCurrentDir(file._id))
    }
  }

  const onDownloadFile = (e) => {
    e.stopPropagation()
    dispatch(actions.downloadFile(file))
  }

  const onDeleteFile = (e) => {
    e.stopPropagation()
    dispatch(actionCreators.setFile(file))
    dispatch(actionCreators.setModal('confirm'))
  }

  return (
    <div className='item'>
      <div className='item__image' onClick={() => onOpenFolder(file)}>
        {file.type === 'dir' ? (
          <i className='fas fa-folder-open'></i>
        ) : (
          <i className='fas fa-file' onClick={(e) => onDownloadFile(e)}></i>
        )}
      </div>
      <div className='item__block'>
        <span className='item__name'>{file.name}</span>
        <i className='fas fa-trash-alt' onClick={(e) => onDeleteFile(e)}></i>
      </div>
    </div>
  )
}

export default File
