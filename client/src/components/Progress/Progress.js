import React from 'react'
import { useSelector } from 'react-redux'
import './Progress.scss'

const Progress = ({ file }) => {
  const { progress } = useSelector((state) => state.app)

  const styles = {}

  return (
    <div className='progress' style={{ opacity: '0' }}>
      <div className='progress__bar'></div>
      <div className='progress__percent'>50%</div>
    </div>
  )
}

export default Progress
