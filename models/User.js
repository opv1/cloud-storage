import mongoose from 'mongoose'

const { Schema, model, Types } = mongoose

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String },
  diskSpace: { type: Number, default: 1024 ** 3 * 5 },
  usedSpace: { type: Number, default: 0 },
  files: [{ type: Types.ObjectId, ref: 'File' }],
})

export default model('User', schema)
