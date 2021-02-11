import {
  SET_CURRENT_DIR,
  SET_FILES,
  ADD_FILE,
  DELETE_FILE,
  PUSH_STACK,
  POP_STACK,
} from '../../constants'

export const setCurrentDir = (currentDir) => ({
  type: SET_CURRENT_DIR,
  payload: currentDir,
})

export const setFiles = (files) => ({
  type: SET_FILES,
  payload: files,
})

export const addFile = (file) => ({
  type: ADD_FILE,
  payload: file,
})

export const deleteFile = (fileId) => ({
  type: DELETE_FILE,
  payload: fileId,
})

export const pushStack = (dir) => ({
  type: PUSH_STACK,
  payload: dir,
})

export const popStack = (dir) => ({
  type: POP_STACK,
  payload: dir,
})
