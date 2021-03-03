import {
  FILES_CURRENT_DIR,
  FILES_SET,
  FILES_STACK_PUSH,
  FILES_STACK_POP,
  FILE_SET,
  FILE_ADD,
  FILE_DELETE,
} from 'store/constants'

const initialState = {
  currentDir: null,
  stack: [],
  file: {},
  files: [],
}

const fileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FILES_CURRENT_DIR:
      return {
        ...state,
        currentDir: payload,
      }
    case FILES_SET:
      return {
        ...state,
        files: payload,
      }
    case FILES_STACK_PUSH:
      return {
        ...state,
        stack: [...state.stack, payload],
      }
    case FILES_STACK_POP:
      return {
        ...state,
        stack: state.stack.pop(payload),
      }
    case FILE_SET:
      return {
        ...state,
        file: payload,
      }
    case FILE_ADD:
      return {
        ...state,
        files: [...state.files, payload],
      }
    case FILE_DELETE:
      return {
        ...state,
        files: [...state.files.filter((file) => file._id !== payload._id)],
      }
    default:
      return state
  }
}

export default fileReducer
