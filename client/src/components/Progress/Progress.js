import React from 'react'
import './Progress.scss'

const Progress = ({ file }) => {
  const styles = {}

  return (
    <div className='progress' style={{ opacity: '1' }}>
      <div className='progress__bar'></div>
      <div className='progress__percent'>50%</div>
    </div>
  )
}

export default Progress
