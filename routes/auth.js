import { Router } from 'express'
import { check } from 'express-validator'
import { authSingup, authLogin } from '../controllers/auth.js'

const router = Router()

router.post(
  '/singup',
  [
    check('email', 'Incorrect email').isEmail(),
    check('password', 'Minimum password length 6 characters').isLength({
      min: 6,
    }),
  ],
  authSingup
)

router.post(
  '/login',
  [
    check('email', 'Please enter a valid email').normalizeEmail().isEmail(),
    check('password', 'Enter password').exists(),
  ],
  authLogin
)

export default router
