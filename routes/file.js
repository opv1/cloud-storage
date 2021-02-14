import { Router } from 'express'
import auth from '../middlewares/auth.js'
import {
  createDir,
  uploadFile,
  uploadAvatar,
  getFiles,
  downloadFile,
  searchFile,
  deleteFile,
  deleteAvatar,
} from '../controllers/file.js'

const router = Router()

router.post('/', auth, createDir)
router.post('/upload', auth, uploadFile)
router.post('/avatar', auth, uploadAvatar)
router.get('/', auth, getFiles)
router.get('/download', auth, downloadFile)
router.get('/search', auth, searchFile)
router.delete('/', auth, deleteFile)
router.delete('/avatar', auth, deleteAvatar)

export default router
