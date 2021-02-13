import express from 'express'
import expressFileupload from 'express-fileupload'
import mongoose from 'mongoose'
import path from 'path'
import config from 'config'
import cors from './middlewares/cors.js'
import filePath from './middlewares/file.js'
import authRoute from './routes/auth.js'
import fileRoute from './routes/file.js'

const app = express()
const __dirname = path.resolve()
const PORT = process.env.PORT || config.get('PORT')

app.use(cors)
app.use(filePath(path.resolve(__dirname, 'files')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(expressFileupload({}))

app.use('/api/auth', authRoute)
app.use('/api/file', fileRoute)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const start = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI || config.get('MONGODB_URI'),
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    )

    app.listen(PORT, () =>
      console.log(`Server has been started on port ${PORT}...`)
    )
  } catch (err) {
    console.log(`Server error: ${err.message}`)
    process.exit(1)
  }
}

start()
