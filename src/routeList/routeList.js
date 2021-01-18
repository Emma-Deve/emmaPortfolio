import Home from '../views/Main/Home/Home'
import Experience from '../views/Main/Experience/Experience'
import Portfolio from '../views/Main/Portfolio/Portfolio'
import Projects from '../views/Main/Projects/Projects'
import Contact from '../views/Main/Contact/Contact'
import HomeIcon from '@material-ui/icons/Home'

const routeList = [
  {
    name: 'home',
    path: '/home',
    exact: true,
    component: Home,
    icon: <HomeIcon />,
  },
  {
    name: 'experience',
    path: '/experience',
    exact: true,
    component: Experience,
  },

  {
    name: 'projects',
    path: '/projects',
    exact: true,
    component: Projects,
  },
  {
    name: 'portfolio',
    path: '/portfolio',
    exact: true,
    component: Portfolio,
  },
  {
    name: 'contact',
    path: '/contact',
    exact: true,
    component: Contact,
  },
]
export default routeList
