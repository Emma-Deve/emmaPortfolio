import React, { useState } from 'react'
import {
  Box,
  Grid,
  Typography,
  Tabs,
  Tab,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Grow,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

import './Portfolio.scss'
import resumeData from '../../../config/resumeData'
import MyTitle from '../../../components/MyTitle/MyTitle'

function Portfolio() {
  const [tabValue, setTabValue] = useState('All')
  const portfolioData = resumeData.portfolio
  const [projectDialog, setProjectDialog] = useState(false)

  function openDialog(project) {
    return (
      <Dialog open={projectDialog} onClose={() => setProjectDialog(false)}>
        <DialogTitle onClose={() => setProjectDialog(false)}>
          {projectDialog.title}
        </DialogTitle>
        <DialogActions>
          <Carousel>
            {project.images.map((image, index) => (
              <div key={index}>
                <img src={image.url} />
                <p className="legend">{image.title}</p>
              </div>
            ))}
          </Carousel>
        </DialogActions>
        <DialogContent>{projectDialog.description}</DialogContent>
      </Dialog>
    )
  }

  return (
    <Grid container className="section">
      {/* title */}
      <Grid item className="title">
        <MyTitle title="Portfolio" />
      </Grid>

      {/* tabs */}
      <Grid item>
        <Tabs
          value={tabValue}
          indicatorColor="white"
          className="custom_tabs"
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            label="All"
            value="All"
            className={
              tabValue == 'All' ? 'customTabs_item active' : 'customTabs_item'
            }
          />
          {[...new Set(portfolioData.map((item) => item.tag))].map((tag) => (
            <Tab
              label={tag}
              value={tag}
              className={
                tag == tabValue ? 'customTabs_item active' : 'customTabs_item'
              }
            />
          ))}
        </Tabs>
      </Grid>

      {/* Projects */}
      <Grid item xs={12}>
        <Grid container spacing={8} justify="space-evenly">
          {portfolioData.map((project) => (
            <>
              {tabValue == project.tag || tabValue == 'All' ? (
                <Grid item xs={12} md={6}>
                  <Grow in timeout={1000}>
                    <Card
                      className="card"
                      onClick={() => setProjectDialog(project)}
                    >
                      <CardActionArea>
                        <CardMedia
                          style={{ height: 140 }}
                          className="img"
                          image={project.image}
                          title={project.title}
                        />
                        <CardContent>
                          <Typography gutterBottom className="title">
                            {project.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            className="portfolio_des"
                          >
                            {project.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                  {openDialog(project)}
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}
export default Portfolio
