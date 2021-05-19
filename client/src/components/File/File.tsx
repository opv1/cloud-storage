import React from 'react'
import { useTypeSelector } from 'hooks/useTypeSelector'
import { useActions } from 'hooks/useActions'
import FileTypeList from 'components/File/Internal/FileTypeList'
import FileTypeTable from 'components/File/Internal/FileTypeTable'
import { FileType } from 'store/types/file'
import { IFileProps } from 'interfaces'

const File: React.FC<IFileProps> = ({ file }) => {
  const { view } = useTypeSelector((state) => state.app)
  const { setFile, openDir, openModal } = useActions()

  const openFolder = (file: FileType) => {
    if (file.type === 'dir') openDir(file._id)
  }

  const deleteFile = () => {
    setFile(file)
    openModal('confirmDelete')
  }

  if (view === 'table') {
    return (
      <FileTypeTable
        file={file}
        openFolder={openFolder}
        deleteFile={deleteFile}
      />
    )
  } else {
    return (
      <FileTypeList
        file={file}
        openFolder={openFolder}
        deleteFile={deleteFile}
      />
    )
  }
}

export default File
