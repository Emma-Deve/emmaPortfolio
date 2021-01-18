import { Typography, Box } from '@material-ui/core'
import React from 'react'

import './Footer.scss'

function Footer() {
  return (
    <Box component="div" className="footer">
      <Typography className="name">Meng Li.</Typography>
      <Typography className="title">FrontEnd Software Engineer</Typography>
    </Box>
  )
}

export default Footer
