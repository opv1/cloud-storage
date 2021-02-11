import mongoose from 'mongoose'

const { Schema, model, Types } = mongoose

const schema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  date: { type: Date, default: Date.now() },
  path: { type: String, default: '' },
  size: { type: Number, default: 0 },
  accessLink: { type: String },
  user: { type: Types.ObjectId, ref: 'User' },
  parent: { type: Types.ObjectId, ref: 'File' },
  childs: [{ type: Types.ObjectId, ref: 'File' }],
})

export default model('File', schema)
