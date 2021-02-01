import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

import avatar from '../assets/img/avatar.jpg'
import cms_RechargeApi from '../assets/img/recharge-API.jpg'
import cms_service from '../assets/img/service.jpg'
import cms_logistics from '../assets/img/logistics.jpg'
import cms_activities from '../assets/img/activities.jpg'

import app_recharge_api from '../assets/img/recharge_api.jpg'
import app_orders from '../assets/img/orders.jpg'
import app_vouchers from '../assets/img/vouchers.jpg'
import app_voucherList from '../assets/img/voucher_list.jpg'

import web_website_1 from '../assets/img/website_1.jpg'
import web_website_2 from '../assets/img/website_2.jpg'
import web_website_3 from '../assets/img/website_3.jpg'

import port_1 from '../assets/img/port_2.jpg'
import port_2 from '../assets/img/port_3.jpg'
import port_3 from '../assets/img/port_5.jpg'

export default {
  /* Portrait */
  name: 'Meng Li',
  title: 'Front-End Software Engineer',
  avatar: avatar,

  /* Side Bar Information */
  sidebar: {
    name: 'Meng Li',
    experience: 'About 4 years',
    job: 'FrontEnd Developer',
    phone: '0466 818 861',
    email: 'limeng19917@gmail.com',
    address: 'Ashfeild, Sydney, NSW',
  },

  /* Social links */
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

  /*  about_me */
  about_me: [
    {
      paragraph:
        'I am a front-end developer with about 4 years of experience. My main tech stacks are React, Redux, JavaScript. ',
    },
    {
      paragraph:
        'In my previous job, I focused on the developments of CMS(content management system) with React for data visualization and modification.',
    },
    {
      paragraph:
        'I developed mobile Apps under the environment of iOS with React-Native.',
    },
    {
      paragraph:
        'I used Bootstrap and UI library likes material-UI to realize responsive layout and to restore UI-design by 100%.',
    },
    {
      paragraph: 'I also have some understanding of RESTful and SQL.',
    },
  ],

  /* Skills */
  skills: [
    {
      title: 'Languages',
      content: ['JavaScript(ES6)', 'HTML5', 'CSS3(SASS)', 'SQL'],
    },
    {
      title: 'Framework',
      content: ['React', 'Redux'],
    },
    {
      title: 'Mobile Framework',
      content: ['React-Native'],
    },
    {
      title: 'UI libraries',
      content: ['Ant-Design', 'Bootstrap', 'Material-UI', 'RN-element'],
    },
    {
      title: 'Development Tools',
      content: [
        'Axios',
        'Webpack',
        'EasyMock',
        'Git',
        'ESLint',
        'Styled-Components',
      ],
    },
    {
      title: 'UI Tools',
      content: ['Photoshop', 'Cutterman', 'Snipaste', 'Fireworks'],
    },
  ],

  /* Experience */
  experience: {
    employer: 'Fulu Network Technology',
    title: 'Front-End Software Engineer',
    time: 'Mar 2017-Dec 2020',
    description:
      'Fulu network Technology is an excellent provider of virtual products and services in China. It provides customers virtual goods related services and IT consultant services.',
    responsibilities: [
      "Participated in the development of the company's internal systems and applications",
      'Developed new pages and features',
      'Designed the interactive effects following by the UI design',
      'Developed reusable and maintainable components',
      'Collaborated with back-end engineers on APIs’ definition and integration',
      'Cooperated with the product manager to adjust the projects',
      'Fixed bugs according to the test reports from the test engineer',
    ],
  },

  /* Projects */
  projects: [
    {
      project: 'Fulu Open Platform Reconstruction',
      des:
        'Fulu Open Platform is a system which provides commercial partners with virtual goods related services and value-added services. Participated in the development of Sale-Activities Management System, Logistics Status Management System and Selected Recharge APIs Management System.',
      activities: [
        'Participated in the development of Sale-Activities Management System, Logistics Status Management System and Selected Recharge APIs Management System',
        'Split components according to their function, designed the relationship between components',
        'Designed front-end route, built route with React-Router to realize page transformation',
        'Managed the transfer of state values between components by using Redux',
        'Sent Ajax requests to RESTful APIs by using Axios',
        'Built pages layout by using Ant-Design UI library',
        'Made customized components by Styled-Components',
        'Mocked REST  APIs by using EasyMock',
        'Defined styles by using SASS pre-processor',
        'Used ESLint and Prettier to standardize code writing',
      ],
      tech_stacks:
        'React, React-router, React-Hooks, Redux, ES6, HTML, CSS/SASS, Redux-actions, Redux-thunk,  Sytled-Components,  Axios,  Ant-Design, EasyMock',
    },
    {
      project: 'Fulu Fast Recharge Mobile APP',
      des:
        'It is a mobile application that contains the selected recharge APIs like phone balance and data, in which customers can register and purchase quickly.',
      activities: [
        'Participated in application modules development of Products and Orders',
        'Developed mobile application with React-Native under the environments of iOS and Android',
        'Realized page transformation by using React-Navigation',
        'Used React-Native-Debugger for development debugging',
        'Managed state values using Redux, and sent Ajax requests using Axios',
        'Built pages layout by using React-Native-Element UI library',
      ],
      tech_stacks:
        'React-Native, React-Navigation, Redux, ES6, HTML, CSS/SASS, React-Native-Element, Axios',
    },
    {
      project: 'Fulu Network Technology Website',
      des:
        'It is the company official website of Fulu Network Technology, which needed to be modified according to company’s businesses changes.',
      activities: [
        'Participated in modifying and maintaining of the company web pages',
        'Designed responsive layout by using Bootstrap',
        'Built web pages accurately by using HTML5 and CSS3 according to UI design',
      ],
      tech_stacks:
        'HTML, CSS, Bootstrap, Photoshop, Cutterman, Snipaste, Fireworks',
    },
    {
      project: 'My Portfolio (Personal Project)',
      des: 'It is a personal responsive web application of My Portfolio',
      activities: [
        'Built the whole application',
        'Deployed the project by using AWS amplify',
        "Realized responsive layout with Bootstrap's",
        'Realized UI design Material-UI library',
        'Realized page transformation by using React-Router ',
        'Used ESLint and Prettier to standardize code writing',
      ],
      tech_stacks:
        'React, Hooks, Bootstrap, Material-UI, JSX, CSS/SASS, ESLint, Prettier',
    },
  ],

  /* Portfolio */
  portfolio: [
    {
      tag: 'React',
      title: 'Fulu Open Platform',
      image: cms_RechargeApi,
      caption: 'React + Redux +  Axios + Ant-Design',
      description:
        'Participated in the development of application modules including Sale-Activities Management, Logistics Status Management and Selected Recharge APIs Management',
      images: [
        {
          title: 'cmsRecharge Apis',
          url: cms_RechargeApi,
        },
        {
          title: 'cms selected service',
          url: cms_service,
        },
        {
          title: 'cms logistics status',
          url: cms_logistics,
        },
        {
          title: 'cms sales activities',
          url: cms_activities,
        },
      ],
    },
    {
      tag: 'ReactNative',
      title: 'Fulu Fast Recharge APP',
      image: app_recharge_api,
      caption: 'ReactNative + Redux + React-Native-Element',
      description:
        'It is a mobile application that contains the selected recharge APIs like phone balance and data, in which customers can register and purchase quickly.',
      images: [
        {
          title: 'app selected recharge Apis',
          url: app_recharge_api,
        },
        {
          title: 'app orders',
          url: app_orders,
        },
        {
          title: 'app vouchers',
          url: app_vouchers,
        },
        {
          title: 'app voucherList',
          url: app_voucherList,
        },
      ],
    },
    {
      tag: 'jQuery',
      title: 'Fulu Network Technology Website',
      image: web_website_1,
      caption: 'jQuery + Bootstrap + HTML + CSS',
      description:
        'It is the company official website of Fulu Network Technology, which needed to be modified according to company’s businesses changes.',
      images: [
        {
          title: 'web website 1',
          url: web_website_1,
        },
        {
          title: 'web website 2',
          url: web_website_2,
        },
        {
          title: 'web website 3',
          url: web_website_3,
        },
      ],
    },
    {
      tag: 'React',
      title: 'My Portfolio (Personal Project)',
      image: port_1,
      caption: 'React + Material-UI + Bootstrap',
      description:
        'It is a personal responsive web application of My Portfolio.',
      images: [
        {
          title: 'port 1',
          url: port_1,
        },
        {
          title: 'port 2',
          url: port_2,
        },
        {
          title: 'port 3',
          url: port_3,
        },
      ],
    },
  ],
}
