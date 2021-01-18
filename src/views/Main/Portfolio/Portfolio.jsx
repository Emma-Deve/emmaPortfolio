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
import './Portfolio.scss'
import resumeData from '../../../utils/resumeData'
import logistics1 from '../../../assets/img/logistics-1.jpg'
import logistics2 from '../../../assets/img/logistics-2.jpg'

function Portfolio() {
  const [tabValue, setTabValue] = useState('All')
  const portfolioData = resumeData.portfolio
  const [projectDialog, setProjectDialog] = useState(false)

  return (
    <Grid container className="section pb_45 pt_45">
      {/* title */}
      <Grid item className="section_title mb_30">
        <span></span>
        <Typography variant="h6" className="section_title_text">
          Portfolio
        </Typography>
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
                tabValue == 'All' ? 'customTabs_item active' : 'customTabs_item'
              }
            />
          ))}
        </Tabs>
      </Grid>

      {/* Projects */}
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {portfolioData.map((project) => (
            <>
              {tabValue == project.tag || tabValue == 'All' ? (
                <Grid item>
                  <Grow in timeout={1000}>
                    <Card
                      className="portfolio_card"
                      onClick={() => setProjectDialog(project)}
                    >
                      <CardActionArea>
                        <CardMedia
                          style={{ height: 140 }}
                          className="portfolio_img"
                          image={project.image}
                          title={project.title}
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            className="portfolio_title"
                          >
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
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>

      {/* Open ProjectDialog */}
      <Dialog open={projectDialog} onClose={() => setProjectDialog(false)}>
        <DialogTitle onClose={() => setProjectDialog(false)}>
          {projectDialog.title}
        </DialogTitle>
        <img src={logistics1} alt="logistics-1" />
        <img src={logistics2} alt="logistics-2" />
        <DialogContent>{projectDialog.description}</DialogContent>
        <DialogActions>
          {projectDialog?.links?.map((link) => (
            <a href={link.link} target="blank">
              {link.icon}
            </a>
          ))}
        </DialogActions>
      </Dialog>
    </Grid>
  )
}
export default Portfolio
