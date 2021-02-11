import React from 'react'
import './Button.scss'

const Button = ({ className, onClick, name, disabled }) => {
  const cls = ['button']

  if (className) {
    cls.push(className)
  }

  return (
    <button className={cls.join(' ')} onClick={onClick} disabled={disabled}>
      {name}
    </button>
  )
}

export default Button
