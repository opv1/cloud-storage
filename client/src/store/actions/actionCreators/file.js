import {
  SET_CURRENT_DIR,
  PUSH_STACK,
  POP_STACK,
  SET_FILE,
  ADD_FILE,
  DELETE_FILE,
  SET_FILES,
} from 'store/constants'

export const setCurrentDir = (currentDir) => ({
  type: SET_CURRENT_DIR,
  payload: currentDir,
})

export const pushStack = (dir) => ({
  type: PUSH_STACK,
  payload: dir,
})

export const popStack = (dir) => ({
  type: POP_STACK,
  payload: dir,
})

export const setFile = (file) => ({
  type: SET_FILE,
  payload: file,
})

export const addFile = (file) => ({
  type: ADD_FILE,
  payload: file,
})

export const deleteFile = (fileId) => ({
  type: DELETE_FILE,
  payload: fileId,
})

export const setFiles = (files) => ({
  type: SET_FILES,
  payload: files,
})
