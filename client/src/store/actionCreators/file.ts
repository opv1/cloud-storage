import { FileType, FileAction, FileActionTypes } from 'store/types/file'

export const filesCurrentDir = (currentDir: string | null): FileAction => ({
  type: FileActionTypes.FILE_CURRENT_DIR,
  payload: currentDir,
})

export const filesSetStack = (stack: string[]): FileAction => ({
  type: FileActionTypes.FILE_STACK,
  payload: stack,
})

export const fileSet = (file: FileType): FileAction => ({
  type: FileActionTypes.FILE_SET,
  payload: file,
})

export const filesSet = (files: FileType[]): FileAction => ({
  type: FileActionTypes.FILES_SET,
  payload: files,
})
