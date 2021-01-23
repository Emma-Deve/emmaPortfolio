import React from 'react'
import { Button, Typography } from '@material-ui/core'
import './MyButton.scss'

function MyButton({ href, text, icon }) {
  return (
    <a
      className="link"
      href={href}
      rel="noreferrer"
      target="_blank"
      download="Meng Li-Frontend Software Engineer.pdf"
    >
      <Button className="myButton" endIcon={icon}>
        <Typography className="text">{text}</Typography>
      </Button>
    </a>
  )
}
export default MyButton
