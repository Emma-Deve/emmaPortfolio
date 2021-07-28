import React from 'react'
import { Box, Typography } from '@material-ui/core'
import './Experience.scss'
import resumeData from '../../../config/resumeData'
import MyTitle from '../../../components/MyTitle/MyTitle'
import MyTimeLineItem from '../../../components/MyTimeLine/MyTimeLine'

function Information() {
  const workData = resumeData.experience || []
  return (
    <Box component="div" className="experience">
      <MyTitle title="Working History" className="title" />
      {workData.map((item, index) => (
        <Box key={index} component="div" className="card">
          <div className="card_content">
            <div className="title">
              <span className="job">{item.title}</span>
              <span className="employer">{item.employer}</span>
              <span className="time">{item.time}</span>
              <Typography className="des">{item.description}</Typography>
            </div>
            <div className="timeline">
              <Typography className="resp">Job responsibilities:</Typography>
              {item.responsibilities.map((subItem, subIndex) => (
                <MyTimeLineItem
                  key={subIndex}
                  isLastItem={
                    subIndex === item.responsibilities.length - 1 ? true : false
                  }
                  subtitle={
                    <Typography className="resp_item">{subItem}</Typography>
                  }
                />
              ))}
            </div>
          </div>
        </Box>
      ))}
    </Box>
  )
}
export default Information
