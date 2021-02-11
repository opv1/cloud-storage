import fs from 'fs'
import config from 'config'
import File from '../models/File.js'

class FileService {
  createDir(file) {
    const filePath = `${config.get('FILE_PATH')}\\${file.user}\\${file.path}`

    return new Promise((resolve, reject) => {
      try {
        if (!fs.existsSync(filePath)) {
          fs.mkdirSync(filePath)

          return resolve({ message: 'File was created' })
        } else {
          return reject({ message: 'File already exist' })
        }
      } catch (err) {
        return reject({ message: 'File error' })
      }
    })
  }

  getPath(file) {
    return config.get('FILE_PATH') + '\\' + file.user + '\\' + file.path
  }

  deleteFile(file) {
    const path = this.getPath(file)

    if (file.type === 'dir') {
      fs.rmdirSync(path)
    } else {
      fs.unlinkSync(path)
    }
  }
}

export const fileService = new FileService()
