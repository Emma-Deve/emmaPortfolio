import React from 'react'
import { Box, Typography, Grid, Paper } from '@material-ui/core'
import './Home.scss'
import resumeData from '../../config/resumeData'
import MyTitle from '../../components/MyTitle/MyTitle'

function Information() {
  const aboutMeData = resumeData.about_me || {}
  const skillsData = resumeData.skills || {}
  return (
    <Box component="div" className="home">
      <div className="card">
        <MyTitle title="about me" />
        <div className="card_content">
          {aboutMeData.map((item, index) => (
            <Typography className="card_item" key={index}>
              {item.paragraph}
            </Typography>
          ))}
        </div>
      </div>
      <Grid container className="skills">
        <MyTitle title="Technical Skills" />
        <Grid
          container
          justify="space-around"
          spacing={4}
          className="paper_container"
        >
          {skillsData.map((skill, index) => (
            <Grid item xs={12} md={6} lg={4}>
              <Paper elevation={1} key={index} className="paper">
                <Typography className="paper_title">{skill.title}</Typography>
                {skill.content
                  ? skill.content.map((element, childIndex) => (
                      <Typography key={childIndex} className="paper_item">
                        {element}
                      </Typography>
                    ))
                  : null}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  )
}
export default Information
