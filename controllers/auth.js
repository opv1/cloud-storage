import { validationResult } from 'express-validator'
import config from 'config'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import User from '../models/User.js'
import File from '../models/File.js'
import { fileService } from '../services/file.js'

const generateToken = (userId) => {
  return jwt.sign(
    { id: userId },
    process.env.SECRET_KEY || config.get('SECRET_KEY'),
    {
      expiresIn: '1h',
    }
  )
}

export const authSingup = async (req, res) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      if ((errors.array()[0].param = 'confirmPassword')) {
        return res.status(400).json({
          message: errors.array()[0].msg,
        })
      }

      return res.status(400).json({
        errors: errors.array(),
        message: 'Incorrect registration data',
      })
    }

    const { email, password } = req.body

    const candidate = await User.findOne({ email })

    if (candidate) {
      return res.status(400).json({ message: 'This user already exists' })
    }

    const hashedPassword = await bcrypt.hash(password, 8)

    const user = new User({ email, password: hashedPassword })

    await user.save()

    await fileService.createDir(req, new File({ user: user.id, name: '' }))

    return res.status(201).json({ message: 'User created' })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: 'Something went wrong' })
  }
}

export const authLogin = async (req, res) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Invalid login data',
      })
    }

    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json({ message: 'User is not found' })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid password' })
    }

    const token = generateToken(user.id)

    return res.json({
      token,
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
    return res.status(500).json({ message: 'Something went wrong' })
  }
}

export const authCheck = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.id })

    const token = generateToken(user.id)

    return res.json({
      token,
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
    return res.status(500).json({ message: 'Something went wrong' })
  }
}
