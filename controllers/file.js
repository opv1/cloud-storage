import fs from 'fs'
import { v4 as uuidv4 } from 'uuid'
import User from '../models/User.js'
import File from '../models/File.js'
import { fileService } from '../services/file.js'

export const createDir = async (req, res) => {
  try {
    const { name, type, parent } = req.body

    const file = new File({ name, type, parent, user: req.user.id })

    const parentFile = await File.findOne({ _id: parent })

    if (!parentFile) {
      file.path = name

      await fileService.createDir(req, file)
    } else {
      file.path = `${parentFile.path}\\${file.name}`

      await fileService.createDir(req, file)

      parentFile.childs.push(file._id)

      await parentFile.save()
    }

    await file.save()

    return res.json(file)
  } catch (err) {
    console.log(err)
    return res.status(400).json(err)
  }
}

export const uploadFile = async (req, res) => {
  try {
    const { file } = req.files

    const parent = await File.findOne({
      _id: req.body.parent,
      user: req.user.id,
    })

    const user = await User.findOne({ _id: req.user.id })

    if (user.usedSpace + file.size > user.diskSpace) {
      return res.status(400).json({ message: 'There no space on the disk' })
    }

    user.usedSpace = user.usedSpace + file.size

    let path = ''

    if (parent) {
      path = `${req.filePath}\\${user._id}\\${parent.path}\\${file.name}`
    } else {
      path = `${req.filePath}\\${user._id}\\${file.name}`
    }

    if (fs.existsSync(path)) {
      return res.status(400).json({ message: 'File already exist' })
    }

    file.mv(path)

    const type = file.name.split('.').pop()

    let filePath = file.name

    if (parent) {
      filePath = parent.path + '\\' + file.name
    }

    const dbFile = new File({
      name: file.name,
      type,
      size: file.size,
      path: filePath,
      parent: parent ? parent._id : null,
      user: user._id,
    })

    await dbFile.save()

    await user.save()

    return res.json(dbFile)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: 'Upload error' })
  }
}

export const uploadAvatar = async (req, res) => {
  try {
    const file = req.files.file

    const user = await User.findById(req.user.id)

    const avatarName = uuidv4() + '.jpg'

    file.mv(`${req.staticPath}\\${avatarName}`)

    console.log(`${req.staticPath}\\${avatarName}`)

    user.avatar = avatarName

    await user.save()

    return res.json({
      user: {
        id: user.id,
        email: user.email,
        avatar: user.avatar,
        diskSpace: user.diskSpace,
        usedSpace: user.usedSpace,
      },
    })
  } catch (err) {
    console.log(err)
    return res.status(400).json({ message: 'Upload avatar error' })
  }
}

export const getFiles = async (req, res) => {
  try {
    const { sort } = req.query

    let files = []

    switch (sort) {
      case 'name':
        files = await File.find({
          user: req.user.id,
          parent: req.query.parent,
        }).sort({ name: 1 })
        break
      case 'type':
        files = await File.find({
          user: req.user.id,
          parent: req.query.parent,
        }).sort({ type: 1 })
        break
      case 'date':
        files = await File.find({
          user: req.user.id,
          parent: req.query.parent,
        }).sort({ date: 1 })
        break
      default:
        files = await File.find({
          user: req.user.id,
          parent: req.query.parent,
        })
        break
    }

    return res.json(files)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: 'Can not get files' })
  }
}

export const downloadFile = async (req, res) => {
  try {
    const file = await File.findOne({ _id: req.query.id, user: req.user.id })

    const path = fileService.getPath(req, file)

    if (fs.existsSync(path)) {
      return res.download(path, file.name)
    }

    return res.status(400).json({ message: 'Download error' })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: 'Download error' })
  }
}

export const searchFile = async (req, res) => {
  try {
    const searchName = req.query.search

    let files = await File.find({ user: req.user.id })

    files = files.filter((file) => file.name.includes(searchName))

    return res.json(files)
  } catch (err) {
    console.log(err)
    return res.status(400).json({ message: 'Search error' })
  }
}

export const deleteFile = async (req, res) => {
  try {
    const file = await File.findOne({ _id: req.query.id, user: req.user.id })

    if (!file) {
      return res.status(400).json({ message: 'File not found' })
    }

    fileService.deleteFile(req, file)

    await file.remove()

    return res.json({ message: 'File was deleted' })
  } catch (err) {
    console.log(err)
    return res.status(400).json({ message: 'Folder is not empty' })
  }
}

export const deleteAvatar = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)

    fs.unlinkSync(`${req.staticPath}\\${user.avatar}`)

    user.avatar = null

    await user.save()

    return res.json({
      user: {
        id: user.id,
        email: user.email,
        avatar: user.avatar,
        diskSpace: user.diskSpace,
        usedSpace: user.usedSpace,
      },
    })
  } catch (err) {
    console.log(err)
    return res.status(400).json({ message: 'Delete avatar error' })
  }
}
