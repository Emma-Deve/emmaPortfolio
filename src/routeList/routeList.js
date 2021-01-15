import Information from '../views/Main/Information/Information'
import Resume from '../views/Main/Resume/Resume'
import Portfolio from '../views/Main/Portfolio/Portfolio'
import Blog from '../views/Main/Blog/Blog'
import Contact from '../views/Main/Contact/Contact'
import HomeIcon from '@material-ui/icons/Home'

const routeList = [
  {
    name: 'home',
    path: '/home',
    exact: true,
    component: Information,
    icon: <HomeIcon />,
  },
  {
    name: 'resume',
    path: '/resume',
    exact: true,
    component: Resume,
  },
  {
    name: 'portfolio',
    path: '/portfolio',
    exact: true,
    component: Portfolio,
  },
  {
    name: 'blog',
    path: '/blog',
    exact: true,
    component: Blog,
  },
  {
    name: 'contact',
    path: '/contact',
    exact: true,
    component: Contact,
  },
]
export default routeList
