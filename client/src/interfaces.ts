import { FileType } from 'store/types/file'

export interface IFileProps {
  file: FileType
}

export interface IFileTypeProps {
  file: FileType
  openFolder: any
  deleteFile: any
}

export interface IBackdropProps {
  backdrop: boolean | string
}

export interface INavbarProps {
  isAuth: boolean
}

export interface ISearchProps {
  search: string
}

export interface ISidedrawer {
  isAuth: boolean
}

export interface IButtonProps {
  button: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  name: string
  disabled?: boolean
}

export interface IIconProps {
  icon: string
  activeIcon?: boolean
  className: string
  onClick?: () => void
}

export interface IInputProps {
  input: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  id?: string
  type: string
  value?: string
  name: string
  placeholder?: string
  maxLength?: number
  multiple?: boolean
  accept?: string
}

export interface ILabelProps {
  label: string
  htmlFor: string
  name: string
}
