import React from 'react'
import './Label.scss'

const Label = ({ className, htmlFor, name }) => {
  const cls = ['label']

  if (className) {
    cls.push(className)
  }

  return (
    <label className={cls.join(' ')} htmlFor={htmlFor}>
      {name}
    </label>
  )
}

export default Label
