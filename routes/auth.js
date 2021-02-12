import { Router } from 'express'
import { check } from 'express-validator'
import { authSingup, authLogin } from '../controllers/auth.js'

const router = Router()

router.post(
  '/singup',
  [
    check('email', 'Incorrect email').isEmail(),
    check('confirmPassword', 'Minimum password length 6 characters')
      .trim()
      .isLength({
        min: 6,
      })
      .custom(async (confirmPassword, { req }) => {
        const { password } = req.body

        if (password !== confirmPassword) {
          throw new Error('Passwords must be same')
        }
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
