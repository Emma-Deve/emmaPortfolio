import React from 'react'
import { Box, Typography, Button } from '@material-ui/core'
import { Timeline } from '@material-ui/lab'
import PersonIcon from '@material-ui/icons/Person'
import GetAppIcon from '@material-ui/icons/GetApp'

import './SideBar.scss'
import MyTimeLineItem, {
  MyTimeLineHeader,
} from '../../components/MyTimeLine/MyTimeLine'
import resumeData from '../../utils/resumeData'
import MyButton from '../../components/MyButton/MyButton'

function SideBar() {
  const data = resumeData.information

  return (
    <Box component="div" className="portrait container_shadow">
      <div className="portrait_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>
      <img
        className="portrait_img"
        src={resumeData.avatar}
        alt={resumeData.name}
      />
      <Timeline className="timeline">
        <MyTimeLineHeader icon={<PersonIcon />} title={''} text={''} />
        {Object.keys(resumeData.information).map((key, index) => (
          <MyTimeLineItem
            key={index}
            title={
              <Typography className="item_text">
                <span className="item_title">{key}:</span>
                {resumeData.information[key]}
              </Typography>
            }
          />
        ))}
      </Timeline>
      <div className="portrait_button">
        <MyButton icon={<GetAppIcon />} text="Download Cv" />
      </div>
    </Box>
  )
}
export default SideBar
