import React from 'react'
import { Icon } from '../../UI/index'

const FileTypeTable = ({
  file,
  onOpenFolder,
  onDownloadFile,
  onDeleteFile,
}) => {
  return (
    <div className='file file_table'>
      <div className='file__image_table' onClick={() => onOpenFolder(file)}>
        {file.type === 'dir' ? (
          <Icon className='fas fa-folder-open' />
        ) : (
          <Icon className='fas fa-file' onClick={(e) => onDownloadFile(e)} />
        )}
      </div>
      <div className='file__block_table'>
        <span className='file__name_table'>{file.name}</span>
        <Icon className='fas fa-trash-alt' onClick={(e) => onDeleteFile(e)} />
      </div>
    </div>
  )
}

export default FileTypeTable
