import { Typography, Box } from '@material-ui/core'
import React from 'react'

import './Footer.scss'

function Footer() {
  return (
    <Box component="div" className="footer">
      <Typography className="name">Emma Li.</Typography>
      <Typography className="title">React Developer</Typography>
    </Box>
  )
}

export default Footer
