import React from 'react'
import './Icon.scss'

const Icon = ({ className, onClick, active }) => {
  const name = 'icon'
  const cls = [name]

  if (className) {
    cls.push(className)
  }

  if (active) {
    cls.push(`${name}_active`)
  }

  return <i className={cls.join(' ')} onClick={onClick}></i>
}

export default Icon
