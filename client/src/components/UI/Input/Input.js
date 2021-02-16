import React from 'react'
import './Input.scss'

const Input = ({
  className,
  onChange,
  id,
  type = 'text',
  value,
  name,
  placeholder,
  multiple,
  accept,
  minLength,
  maxLength,
}) => {
  const cls = ['input']

  if (className) {
    cls.unshift(className)
  }

  return (
    <input
      className={cls.join(' ')}
      onChange={onChange}
      id={id}
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      multiple={multiple}
      accept={accept}
      minLength={minLength}
      maxLength={maxLength}
    />
  )
}

export default Input
