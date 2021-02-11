import {
  SET_CURRENT_DIR,
  SET_FILES,
  ADD_FILE,
  DELETE_FILE,
  PUSH_STACK,
  POP_STACK,
} from '../constants'

const initialState = {
  currentDir: null,
  files: [],
  stack: [],
}

const fileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_DIR:
      return {
        ...state,
        currentDir: payload,
      }
    case SET_FILES:
      return {
        ...state,
        files: payload,
      }
    case ADD_FILE:
      return {
        ...state,
        files: [...state.files, payload],
      }
    case DELETE_FILE:
      return {
        ...state,
        files: [...state.files.filter((file) => file._id !== payload)],
      }
    case PUSH_STACK:
      return {
        ...state,
        stack: [...state.stack, payload],
      }
    case POP_STACK:
      return {
        ...state,
        stack: state.stack.pop(payload),
      }
    default:
      return state
  }
}

export default fileReducer
