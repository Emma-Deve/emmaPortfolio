import React from 'react'
import './MyTitle.scss'

function MyTitle({ title }) {
  return (
    <div className="my_title">
      <span className="title">{title}</span>
    </div>
  )
}

export default MyTitle
