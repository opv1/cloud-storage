import {
  FILES_CURRENT_DIR,
  FILES_SET,
  FILES_STACK_PUSH,
  FILES_STACK_POP,
  FILE_SET,
  FILE_ADD,
  FILE_DELETE,
} from 'store/constants'

export const filesCurrentDir = (currentDir) => ({
  type: FILES_CURRENT_DIR,
  payload: currentDir,
})

export const filesSet = (files) => ({
  type: FILES_SET,
  payload: files,
})

export const filesStackPush = (dir) => ({
  type: FILES_STACK_PUSH,
  payload: dir,
})

export const filesStackPop = (dir) => ({
  type: FILES_STACK_POP,
  payload: dir,
})

export const fileSet = (file) => ({
  type: FILE_SET,
  payload: file,
})

export const fileAdd = (file) => ({
  type: FILE_ADD,
  payload: file,
})

export const fileDelete = (file) => ({
  type: FILE_DELETE,
  payload: file,
})
