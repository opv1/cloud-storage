import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from 'store/actions/index'
import actionCreators from 'store/actions/actionCreators/index'
import FileTypeList from 'components/File/Internal/FileTypeList'
import FileTypeTable from 'components/File/Internal/FileTypeTable'
import 'components/File/File.scss'

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
    dispatch(actionCreators.setModal('confirmDelete'))
  }

  if (view === 'typeList') {
    return (
      <FileTypeList
        file={file}
        onOpenFolder={onOpenFolder}
        onDownloadFile={onDownloadFile}
        onDeleteFile={onDeleteFile}
      />
    )
  }

  if (view === 'typeTable') {
    return (
      <FileTypeTable
        file={file}
        onOpenFolder={onOpenFolder}
        onDownloadFile={onDownloadFile}
        onDeleteFile={onDeleteFile}
      />
    )
  }
}

export default File
