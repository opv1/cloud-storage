import React from 'react'
import 'components/UI/Button/Button.scss'

const Button = ({ className, onClick, name, disabled }) => {
  const cls = ['button']

  if (className) {
    cls.unshift(className)
  }

  return (
    <button className={cls.join(' ')} onClick={onClick} disabled={disabled}>
      {name}
    </button>
  )
}

export default Button
