import fs from 'fs'

class FileService {
  getPath(req, file) {
    return req.filePath + '\\' + file.user + '\\' + file.path
  }

  createDir(req, file) {
    const filePath = this.getPath(req, file)

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

  deleteFile(req, file) {
    const path = this.getPath(req, file)

    if (file.type === 'dir') {
      fs.rmdirSync(path)
    } else {
      fs.unlinkSync(path)
    }
  }
}

export const fileService = new FileService()
