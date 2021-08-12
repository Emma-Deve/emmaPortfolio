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

import alekt_admin_1 from '../assets/img/alekt-admin-1.png'
import alekt_admin_2 from '../assets/img/alekt-admin-4.png'
import alekt_admin_3 from '../assets/img/alekt-admin-5.png'
import alekt_admin_4 from '../assets/img/alekt-admin-6.png'

import alekt_web_1 from '../assets/img/alekt-web-1.png'
import alekt_web_2 from '../assets/img/alekt-web-2.png'
import alekt_web_3 from '../assets/img/alekt-web-3.png'
import alekt_web_4 from '../assets/img/alekt-web-4.png'

import alekt_mobile_1 from '../assets/img/alekt-mobile-1.png'
import alekt_mobile_2 from '../assets/img/alekt-mobile-2.png'
import alekt_mobile_3 from '../assets/img/alekt-mobile-3.png'

export default {
  /* Portrait */
  name: 'Emma Li',
  title: 'React Developer',
  avatar: avatar,

  /* Side Bar Information */
  sidebar: {
    name: 'Emma Li',
    experience: '4 years',
    job: 'React Developer',
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
        '4 years of experience in front-end applications development. ',
    },
    {
      paragraph:
        'Proficient in designing and developing dynamic, interactive, reusable and fast web applications with React.js.',
    },
    {
      paragraph:
        'Expertise in modern web architecture using various advanced JavaScript frameworks and libraries like React.js/Redux, React Native(RN), Bootstrap, Responsive web design (RWD).',
    },
    {
      paragraph:
        'Experience in creating Single Page Application (SPA) with MVC pattern.',
    },
    {
      paragraph:
        'Experience in the using of Redux and middlewares such as Redux-Thunk, Redux-Saga.',
    },
    {
      paragraph: 'Interactive Front-End engineering experience with Bootstrap.',
    },
    {
      paragraph: 'Solid knowledge of CSS preprocessors such as SASS and LESS.',
    },
    {
      paragraph:
        'Experience in debugging and troubleshooting using debugging tools like Chrome.',
    },
    {
      paragraph:
        'Familiarity with software development life cycle (SDLC), work as part of Agile team to manage properties, deadlines and deliverables.',
    },
    {
      paragraph:
        'Work effectively independently and collaboratively in a diverse and fast-paced environment.',
    },
    {
      paragraph:
        'Good Team player and also have ability to work independently.',
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
      title: 'UI libraries',
      content: ['Material-UI', 'Ant-Design', 'Bootstrap 4'],
    },
    {
      title: 'Development Tools',
      content: [
        'Axios',
        'Jest',
        'Webpack',
        'Git',
        'Postman',
        'Styled-Components',
      ],
    },
    {
      title: 'UI Tools',
      content: ['Photoshop', 'Cutterman', 'Snipaste', 'Fireworks'],
    },
    {
      title: 'Backend',
      content: ['NodeJs', 'Express', 'MongoDB', 'MySQL', 'graphql'],
    },
  ],

  /* Experience */
  experience: [
    {
      employer: 'Credit Asset Management Ltd',
      title: 'Front-End Engineer',
      time: 'July 2020 - Aug 2021',
      description:
        'Responsible for the front end development and maintenance of Customer Relationship Management System which used to manage products, customers information and orders.',
      responsibilities: [
        'responsible for the maintenance and the development the Custom Relationship Management System.',
        'finished the development of Order modules including Pre-loan management, business investigation and loan repayment management',
        'finished the development of a series of configuration pages for new products, including basic, product supply channel, fee, transaction and so on.',
      ],
    },
    {
      employer: 'Fulu Network Technology',
      title: 'Front-End Software Engineer',
      time: 'Mar 2017-Dec 2019',
      description:
        "Responsible for the front end development and maintenance of company's Open Platform which provides commercial partners with virtual goods related services and value-added services.",
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
  ],

  /* Projects */
  projects: [
    {
      project:
        'Custom Relationship Management System Development and Maintenance',
      des:
        'Responsible for CRMS development of Product Management Module, Orders Management Module and. Responsible for maintenance of this CRMS.',
      activities: [
        'Responsible for creating web-based applications using JavaScript (ECMAScript 6), React JS and Redux workflow',
        'Maintained Cross Browser compatibility & implement Responsive Web Design using Bootstrap, HTML5, CSS3',
        'Built a single page application using the building blocks pure components, carousels, forms, routers, etc.',
        'Used React developer tools plugin for debugging',
        'Built single page application with modules, reusable components, forms using React JS',
        'Knowledge of modern authorization mechanisms, such as JSON Web Token',
        'Implemented server-side CSS preprocessors using SASS',
        'Responsible to create responsive web application using Rest API',
        'Committed code change into repository by using version control tool Git.',
      ],
      tech_stacks:
        'React, React-router, React-Hooks, Redux, Redux-saga, ES6, HTML, CSS/SASS,   Styled-Components,  Axios,  GIt,  Material-UI',
    },
    {
      project: 'Alekt Online Education web & Admin Application',
      des:
        'Responsible for the development of Teachers management, courses management, students management and statistics analysis.',
      activities: [
        'Skilled in leading frameworks as React.js to build high-quality, scalable and reusable components and Front-end solution.',
        'Used React.js library functions for the logical implementation part for all the application.',
        'Maintained states in the stores and dispatched the actions using redux.',
        'Used various properties, parameters in ES6.',
        'Used React-Router to turn application into Single Page Application',
        'Called the Restful web services calls for POST, PUT, DELETE and GET methods.',
        'Developed and applied application wide, cross platform Validation and Exception Handling policies.',
      ],
      tech_stacks:
        'React, React-router, React-Hooks, Redux, Redux-saga, ES6, HTML, CSS/SASS,   Styled-Components,  Axios,  GIt,  Material-UI',
    },

    // {
    //   project: 'Alekt Online Education Mobile Application',
    //   des:
    //     'Responsible for the development of Course Module, Exercise module, Assessment Module and Study Center Module.',
    //   activities: [
    //     'Developed hybrid mobile platform for automotive applications using JS and React-Native, resulting in 88% code share between iOS and Android while reducing development time by 33%.',
    //     'Managed state values by using Redux',
    //     'Built pages layout by using React-Native-Element UI library',
    //     'Responsible for design and development of various components such as tab bars, map view, image picker, document picker, push notifications, sign-in/out features, profile management and navigation using react -native.',
    //     'Engineered login front end functionality - including RESTful service calls, keychain, credential storage, routing, token verification, and error notifications',
    //     'Involved in developing the UI for the app using TextViews, Buttons, Check boxes, Alert dialogs, Actionbar and spinners for various layouts.',
    //   ],
    //   tech_stacks:
    //     'React-Native, React-Navigation, Redux, ES6, HTML, CSS/SASS, React-Native-Element, Axios, Android Studio',
    // },

    {
      project: 'Fulu Open Platform Reconstruction',
      des:
        'Fulu Open Platform is a system which provides commercial partners with virtual goods related services and value-added services. Participated in the development of Sale-Activities Management System, Logistics Status Management System and Selected Recharge APIs Management System.',
      activities: [
        'Worked in Agile environment, had biweekly sprints and daily scrum.',
        'Used JIRA as the bug tracking system to track and maintain the history of bugs/issues on everyday basis.',
        'Used Git for version control of the source code along with the maintenance of the builds and the relevant documents of the same.',
        'Designed front-end route, built route with React-Router to realize page transformation',
        'Fetched data from the backend asynchronously by using Redux-Saga and Axios.',
        'Sent Ajax requests to RESTful APIs by using Axios ',
        'Made customized components by Styled-Components',
        'Performed the System Testing, Regression Testing for Complete UI after fixing the Issues which are reported by Testing Team.',
      ],
      tech_stacks:
        'React, React-router, React-Hooks, Redux, ES6, HTML, CSS/SASS, Redux-actions, Redux-thunk,  Sytled-Components,  Axios,  Ant-Design, EasyMock',
    },
    // {
    //   project: 'Fulu Fast Recharge Mobile APP',
    //   des:
    //     'It is a mobile application that contains the selected recharge APIs like phone balance and data, in which customers can register and purchase quickly.',
    //   activities: [
    //     'Participated in application modules development of Products and Orders',
    //     'Developed mobile application with React-Native under the environments of iOS and Android',
    //     'Realized page transformation by using React-Navigation',
    //     'Used React-Native-Debugger for development debugging',
    //     'Managed state values using Redux, and sent Ajax requests using Axios',
    //     'Built pages layout by using React-Native-Element UI library',
    //   ],
    //   tech_stacks:
    //     'React-Native, React-Navigation, Redux, ES6, HTML, CSS/SASS, React-Native-Element, Axios',
    // },
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
    /* Alekt website */
    {
      tag: 'React',
      title: 'Alekt website application',
      image: alekt_web_2,
      caption: 'React + Redux +  Axios + bootstrap + Ant-Design',
      description:
        'Responsible for the web application development of Course Modules, Exercise module, Assessment Module and Online Test Module.',
      images: [
        {
          title: 'authorization',
          url: alekt_web_1,
        },
        {
          title: 'courses',
          url: alekt_web_2,
        },
        {
          title: 'courses',
          url: alekt_web_3,
        },
        {
          title: 'custom center',
          url: alekt_web_4,
        },
      ],
    },
    /* Alekt admin */
    {
      tag: 'React',
      title: 'Alekt admin application',
      image: alekt_admin_2,
      caption: 'React + Redux +  Axios + Ant-Design',
      description:
        'Responsible for the development of Teachers management, courses management, students management and statistics analysis.',
      images: [
        {
          title: 'authorization',
          url: alekt_admin_1,
        },
        {
          title: 'courses',
          url: alekt_admin_2,
        },
        {
          title: 'courses',
          url: alekt_admin_3,
        },
        {
          title: 'statistic analysis',
          url: alekt_admin_4,
        },
      ],
    },

    /* Alekt mobile app */
    // {
    //   tag: 'ReactNative',
    //   title: 'AIKT mobile application',
    //   image: alekt_admin_2,
    //   caption: 'ReactNative + Redux +  ReactNativeElement',
    //   description:
    //     'Responsible for the development of Course Module, Exercise module, Assessment Module and custom Center Module.',
    //   images: [
    //     {
    //       title: 'courses',
    //       url: alekt_mobile_1,
    //     },
    //     {
    //       title: 'courses',
    //       url: alekt_mobile_2,
    //     },
    //     {
    //       title: 'custom center',
    //       url: alekt_mobile_3,
    //     },
    //   ],
    // },

    /* Fulu open platform */
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

    /* Fulu fast recharge app */
    // {
    //   tag: 'ReactNative',
    //   title: 'Fulu Fast Recharge APP',
    //   image: app_recharge_api,
    //   caption: 'ReactNative + Redux + React-Native-Element',
    //   description:
    //     'It is a mobile application that contains the selected recharge APIs like phone balance and data, in which customers can register and purchase quickly.',
    //   images: [
    //     {
    //       title: 'app selected recharge Apis',
    //       url: app_recharge_api,
    //     },
    //     {
    //       title: 'app orders',
    //       url: app_orders,
    //     },
    //     {
    //       title: 'app vouchers',
    //       url: app_vouchers,
    //     },
    //     {
    //       title: 'app voucherList',
    //       url: app_voucherList,
    //     },
    //   ],
    // },

    /* my portfolio */
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
