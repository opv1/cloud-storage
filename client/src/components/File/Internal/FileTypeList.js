import React from 'react'
import { sizeFormat } from 'utils/index'
import { Icon } from 'components/UI/index'

const FileTypeList = ({ file, onOpenFolder, onDownloadFile, onDeleteFile }) => {
  return (
    <div className='file file_list'>
      <div className='file__image_list'>
        {file.type === 'dir' ? (
          <Icon className='fas fa-folder-open' />
        ) : (
          <Icon className='fas fa-file' />
        )}
      </div>
      <div
        className='file__name_list'
        onClick={() => onOpenFolder(file)}
        style={file.type === 'dir' ? { cursor: 'pointer' } : {}}
      >
        {file.name}
      </div>
      <div className='file__icons_list'>
        <Icon className='fas fa-trash-alt' onClick={(e) => onDeleteFile(e)} />
        {file.type !== 'dir' && (
          <Icon
            className='fas fa-download'
            onClick={(e) => onDownloadFile(e)}
          />
        )}
      </div>
      <div className='file__date_list'>{file.date.slice(0, 10)}</div>
      <div className='file__size_list'>{sizeFormat(file.size)}</div>
    </div>
  )
}

export default FileTypeList
