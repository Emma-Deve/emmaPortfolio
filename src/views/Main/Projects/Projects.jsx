import React from 'react'
import { Box, Typography } from '@material-ui/core'
import LaptopMacSharpIcon from '@material-ui/icons/LaptopMacSharp'
import './Projects.scss'
import resumeData from '../../../utils/resumeData'
import MyTitle from '../../../components/MyTitle/MyTitle'
import MyTimeLineItem, {
  MyTimeLineHeader,
} from '../../../components/MyTimeLine/MyTimeLine'

function Information() {
  const ProjectsData = resumeData.projects || {}
  return (
    <Box component="div" className="timeline">
      <MyTimeLineHeader
        className="timeline_header"
        icon={<LaptopMacSharpIcon />}
        title={<MyTitle title="projects" />}
        text={''}
      />
      {ProjectsData.map((item, index) => (
        <MyTimeLineItem
          key={index}
          isLastItem={index === ProjectsData.length - 1 ? true : false}
          title={
            <Typography className="item_title">
              {item.project}
              <a href={item.website} className="item_website">
                {item.website}
              </a>
            </Typography>
          }
          subtitle={
            <Typography className="item_subtitle">{item.des}</Typography>
          }
          text={
            <div className="pro_text">
              <ul className="pro_activities_ul">
                Project Activities:
                {item.activities.map((subItem, subIndex) => (
                  <li className="pro_activities_li" key={subIndex}>
                    {subItem}
                  </li>
                ))}
              </ul>
              <Typography className="pro_tech">Tech Stacks:</Typography>
              <Typography className="pro_stack">{item.tech_stacks}</Typography>
            </div>
          }
        />
      ))}
    </Box>
  )
}
export default Information
