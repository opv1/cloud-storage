import React, { useState } from 'react'
import './Sort.scss'

const Sort = ({ sortType, setSortType }) => {
  return (
    <div className='sort'>
      <select
        className='sort__select'
        onChange={(e) => setSortType(e.target.value)}
        value={sortType}
      >
        <option value='type'>Type</option>
        <option value='name'>Name</option>
        <option value='date'>Date</option>
      </select>
    </div>
  )
}

export default Sort
