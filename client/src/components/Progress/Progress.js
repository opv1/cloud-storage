import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Progress = () => {
  const { percentage } = useSelector((state) => state.app)

  return (
    <ProgressStyles>
      <ProgressBar />
      <ProgressPercent>{`${percentage}%`}</ProgressPercent>
    </ProgressStyles>
  )
}

export default Progress

const ProgressStyles = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  border-radius: 5px;
  width: 100%;
  height: 1.5rem;
  background-color: #696969;
  opacity: 0;
`

const ProgressBar = styled.div`
  border-radius: 5px;
  height: 100%;
  background-color: #f1404b;
`

const ProgressPercent = styled.div`
  position: absolute;
  left: 50%;
  font-size: 1.5rem;
  color: #fff;
`
