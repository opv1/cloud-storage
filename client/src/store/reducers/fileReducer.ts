import { FileState, FileAction, FileActionTypes } from 'store/types/file'

const initialState: FileState = {
  currentDir: null,
  stack: [],
  file: {},
  files: [],
}

export const fileReducer = (
  state = initialState,
  action: FileAction
): FileState => {
  switch (action.type) {
    case FileActionTypes.FILE_CURRENT_DIR:
      return {
        ...state,
        currentDir: action.payload,
      }
    case FileActionTypes.FILES_SET:
      return {
        ...state,
        files: action.payload,
      }
    case FileActionTypes.FILE_STACK:
      return {
        ...state,
        stack: action.payload,
      }
    case FileActionTypes.FILE_SET:
      return {
        ...state,
        file: action.payload,
      }
    default:
      return state
  }
}
