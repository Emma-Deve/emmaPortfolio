import React from 'react'
import { Box, Grid, TextField, Typography } from '@material-ui/core'
import './Contact.scss'
import MyButton from '../../../components/MyButton/MyButton'
import ContactMailSharpIcon from '@material-ui/icons/ContactMailSharp'
import MyTitle from '../../../components/MyTitle/MyTitle'
import SocialLink from '../../../components/SocialLink/SocialLink'
import resumeData from '../../../config/resumeData'

function Contact() {
  const contactData = resumeData.sidebar || {}
  return (
    <Grid container className="contact" justify="space-between">
      {/* Contact Form */}
      <Grid item container xs={12} sm={6} spacing={4} className="form">
        <Grid item xs={12} className="title">
          <MyTitle title="contact form" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth name="name" label="Name" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth name="email" label="Email" />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth name="message" label="Message" rows={3} />
        </Grid>
        <Grid item xs={12} className="button">
          <MyButton
            text="Contact"
            icon={<ContactMailSharpIcon />}
            href="mailto:limeng19917@gmail.com"
          />
        </Grid>
      </Grid>

      {/* Contact Information */}
      <Grid item container xs={12} sm={6} spacing={1} className="information">
        <Grid item xs={12} className="title">
          <MyTitle title="contact information" />
        </Grid>
        <Grid item xs={12}>
          {
            <Box component="div">
              <Typography className="item">
                <span className="item_title">Address: </span>
                {contactData.address}
              </Typography>
              <Typography className="item">
                <span className="item_title">Phone: </span>
                {contactData.phone}
              </Typography>
              <Typography className="item">
                <span className="item_title">Job: </span>
                {contactData.job}
              </Typography>
              <Typography className="item">
                <span className="item_title">E-mail: </span>
                {contactData.email}
              </Typography>
              <SocialLink />
            </Box>
          }
        </Grid>
      </Grid>
    </Grid>
  )
}
export default Contact
