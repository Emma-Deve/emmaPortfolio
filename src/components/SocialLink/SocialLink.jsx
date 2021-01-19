import React from 'react'
import { Link } from '@material-ui/core'
import resumeData from '../../config/resumeData'

import './SocialLink.scss'

function SocialLink() {
  return (
    <div className="icons d-inline-block d-md-none d-xl-inline-block">
      {Object.keys(resumeData.socials).map((key, index) => (
        <Link key={index} className="icon" href={resumeData.socials[key].link}>
          {resumeData.socials[key].icon}
        </Link>
      ))}
    </div>
  )
}
export default SocialLink
