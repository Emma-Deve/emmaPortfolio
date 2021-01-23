import React from 'react'
import { Box, Typography } from '@material-ui/core'
import './Experience.scss'
import resumeData from '../../../config/resumeData'
import MyTitle from '../../../components/MyTitle/MyTitle'
import MyTimeLineItem from '../../../components/MyTimeLine/MyTimeLine'

function Information() {
  const workData = resumeData.experience || {}
  return (
    <Box component="div" className="card">
      <MyTitle title="Working History" />
      <div className="card_content">
        <div className="title">
          <span className="job">{workData.title}</span>
          <span className="employer">{workData.employer}</span>
          <span className="time">{workData.time}</span>
          <Typography className="des">{workData.description}</Typography>
        </div>
        <div className="timeline">
          <Typography className="resp">Job responsibilities:</Typography>
          {workData.responsibilities.map((item, index) => (
            <MyTimeLineItem
              key={index}
              isLastItem={
                index === workData.responsibilities.length - 1 ? true : false
              }
              subtitle={<Typography className="resp_item">{item}</Typography>}
            />
          ))}
        </div>
      </div>
    </Box>
  )
}
export default Information
