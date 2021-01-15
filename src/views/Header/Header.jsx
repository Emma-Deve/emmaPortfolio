import React from 'react'
import { Link } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import resumeData from '../../utils/resumeData'

import './Header.scss'
import MyButton from '../../components/MyButton/MyButton'
import HeaderLeftNav from '../../components/HeaderLeftNav/HeaderLeftNav'

function Header() {
  return (
    <div className="header container_shadow">
      <HeaderLeftNav />
      <div className="header_right">
        <div className="icons d-inline-block d-md-none d-xl-inline-block">
          {Object.keys(resumeData.socials).map((key, index) => (
            <Link
              key={index}
              className="icon"
              href={resumeData.socials[key].link}
            >
              {resumeData.socials[key].icon}
            </Link>
          ))}
        </div>
        <MyButton text="hire me" icon={<SendIcon />} />
      </div>
    </div>
  )
}
export default Header
