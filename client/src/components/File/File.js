import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../store/actions/index'
import actionCreators from '../../store/actions/actionCreators/index'
import sizeFormat from '../../utils/sizeFormat'
import './File.scss'

const File = ({ file }) => {
  const { view } = useSelector((state) => state.app)
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

  if (view === 'list') {
    return (
      <div className='file file_list' onClick={() => onOpenFolder(file)}>
        <div className='file__image_list'>
          {file.type === 'dir' ? (
            <i className='fas fa-folder-open'></i>
          ) : (
            <i className='fas fa-file'></i>
          )}
        </div>
        <div className='file__name_list'>{file.name}</div>
        <div className='file__date_list'>{file.date.slice(0, 10)}</div>
        <div className='file__size_list'>{sizeFormat(file.size)}</div>
      </div>
    )
  }

  if (view === 'table') {
    return (
      <div className='file file_table'>
        <div className='file__image_table' onClick={() => onOpenFolder(file)}>
          {file.type === 'dir' ? (
            <i className='fas fa-folder-open'></i>
          ) : (
            <i className='fas fa-file' onClick={(e) => onDownloadFile(e)}></i>
          )}
        </div>
        <div className='file__block_table'>
          <span className='file__name_table'>{file.name}</span>
          <i className='fas fa-trash-alt' onClick={(e) => onDeleteFile(e)}></i>
        </div>
      </div>
    )
  }
}

export default File
