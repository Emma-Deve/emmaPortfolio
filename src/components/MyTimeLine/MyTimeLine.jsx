import React from 'react'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@material-ui/lab'
import { Typography } from '@material-ui/core'
import './MyTimeLine.scss'

export function MyTimeLineHeader({ title, icon, text }) {
  return (
    <TimelineItem className="timeline_header">
      <TimelineSeparator>
        <TimelineDot className="timeline_header_dot">{icon}</TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent className="timeline_header_content">
        <Typography
          className="timeline_header_title"
          variant="h6"
          component="h1"
        >
          {title}
        </Typography>
        <Typography className="timeline_header_text">{text}</Typography>
      </TimelineContent>
    </TimelineItem>
  )
}

export default function MyTimeLineItem({ title, subtitle, text }) {
  return (
    <TimelineItem className="timeline_item">
      <TimelineSeparator>
        <TimelineConnector className="timeline_item_line" />
        <TimelineDot className="timeline_item_dot" />
      </TimelineSeparator>
      <TimelineContent className="timeline_item_content">
        <Typography className="timeline_item_title">{title}</Typography>
        <Typography className="timeline_item_subtitle">{subtitle}</Typography>
        <Typography className="timeline_item_text">{text}</Typography>
      </TimelineContent>
    </TimelineItem>
  )
}
