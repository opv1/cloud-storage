import React from 'react'
import './Icon.scss'

const Icon = ({ className, onClick, active }) => {
  const name = 'icon'
  const cls = [name]

  if (className) {
    cls.unshift(className)
  }

  if (active) {
    cls.unshift(`${name}_active`)
  }

  return <i className={cls.join(' ')} onClick={onClick}></i>
}

export default Icon
