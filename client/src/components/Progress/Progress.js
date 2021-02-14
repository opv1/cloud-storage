import React from 'react'
import { useSelector } from 'react-redux'
import './Progress.scss'

const Progress = () => {
  const { progress, percentage } = useSelector((state) => state.app)

  const styles = {}

  if (progress) {
    styles.opacity = '1'
  }

  return (
    <div className='progress' style={styles}>
      <div className='progress__bar' style={{ width: `${percentage}%` }}></div>
      <div className='progress__percent'>{`${percentage}%`}</div>
    </div>
  )
}

export default Progress
