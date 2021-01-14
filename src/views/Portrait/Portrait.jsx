import React, { Fragment } from 'react'
import { Box, Typography, Button } from '@material-ui/core'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'

import './Portrait.scss'
import avatar from '../../assets/img/avatar.jpeg'
import CustomerTimeLine from '../../components/CustomerTimeLine/CustomerTimeLine'

function Portrait() {
  return (
    <Box component="div" className="portrait container_shadow">
      <div className="portrait_name">
        <Typography className="name">Meng Li</Typography>
        <Typography className="title">Front-End Developer</Typography>
      </div>
      <img className="portrait_img" src={avatar} alt="Meng Li" />
      <CustomerTimeLine />
      <Button
        variant="contained"
        className="portrait_button"
        startIcon={<CloudDownloadIcon />}
      >
        Upload
      </Button>
    </Box>
  )
}
export default Portrait
