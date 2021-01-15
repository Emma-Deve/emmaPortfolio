import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

import avatar from '../assets/img/avatar.jpeg'

export default {
  name: 'Meng Li',
  title: 'FrontEnd Software Engineer',
  avatar: avatar,

  information: {
    name: 'Meng Li',
    experience: '3+ years',
    job: 'FrontEnd Software Engineer',
    phone: '0466 818 861',
    email: 'limeng19917@gmail.com',
    address: 'Ashfeild, Sydney, NSW',
  },

  socials: {
    linkedIn: {
      link: 'https://www.linkedin.com/in/meng-li-577b84203/',
      text: 'MyLinkedIn',
      icon: <LinkedInIcon />,
    },
    github: {
      link: 'https://github.com/Emma-Deve',
      text: 'MyGitHub',
      icon: <GitHubIcon />,
    },
  },
}
