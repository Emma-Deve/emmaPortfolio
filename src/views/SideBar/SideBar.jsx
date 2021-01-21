import React from 'react'
import { Box, Typography, Button } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import GetAppIcon from '@material-ui/icons/GetApp'

import './SideBar.scss'
import MyTimeLineItem, {
  MyTimeLineHeader,
} from '../../components/MyTimeLine/MyTimeLine'
import resumeData from '../../config/resumeData'
import MyButton from '../../components/MyButton/MyButton'

function SideBar() {
  const sidebarData = resumeData.sidebar || {}

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
      <div className="timeline">
        <MyTimeLineHeader icon={<PersonIcon />} title={''} text={''} />
        {Object.keys(sidebarData).map((key, index) => (
          <MyTimeLineItem
            key={index}
            isLastItem={
              index === Object.keys(sidebarData).length - 1 ? true : false
            }
            title={
              <Typography className="item_text">
                <span className="item_title">{key}:</span>
                {sidebarData[key]}
              </Typography>
            }
          />
        ))}
      </div>
      <div className="portrait_button">
        <MyButton
          icon={<GetAppIcon />}
          text="Download Cv"
          href="https://myportforlio.s3-ap-southeast-2.amazonaws.com/MengLi.pdf"
        />
      </div>
    </Box>
  )
}
export default SideBar
