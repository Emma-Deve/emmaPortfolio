import React from 'react'
import { Button, Typography } from '@material-ui/core'
import './MyButton.scss'

function MyButton({ text, icon }) {
  return (
    <Button className="myButton" endIcon={icon}>
      <Typography className="text">{text}</Typography>
    </Button>
  )
}
export default MyButton
