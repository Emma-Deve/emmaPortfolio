import React, { useState } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Button, Menu } from '@material-ui/core'
import MenuSharpIcon from '@material-ui/icons/MenuSharp'
import routeList from '../../routeList/routeList'
import HomeIcon from '@material-ui/icons/Home'
import './HeaderLeftNav.scss'

function HeaderLeftNav(props) {
  const refreshPath = props.location.pathname
  const [currentPath, setCurrentPath] = useState(
    refreshPath ? refreshPath : '/home',
  )
  const [anchorEl, setAnchorEl] = React.useState(null)

  function getNavButton(item) {
    return (
      <Button
        className="button"
        onClick={() => {
          setCurrentPath(item.path)
        }}
      >
        {item.name}
      </Button>
    )
  }

  function getMenuButton(item) {
    return (
      <Button
        className="button_menu_item"
        onClick={() => {
          setCurrentPath(item.path)
          setAnchorEl(null)
        }}
      >
        {item.name}
      </Button>
    )
  }

  return (
    <div className="header_nav_bar">
      <NavLink to="/home">
        <Button
          className="button_home"
          endIcon={<HomeIcon />}
          onClick={() => {
            setCurrentPath('/home')
          }}
        ></Button>
      </NavLink>
      {/* Navbar */}
      <div className="d-none d-md-inline-block">
        {routeList.length
          ? routeList.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                // activeClassName={item.path == currentPath ? 'selected' : null}
                className={`nav_link ${
                  item.path == currentPath ? 'active' : null
                }`}
              >
                {item.icon ? null : getNavButton(item)}
              </NavLink>
            ))
          : null}
      </div>
      {/* NaviDrawer */}
      <div className="header_nav_drawer d-inline-block d-md-none">
        <Button
          className="button_anchor"
          onClick={(event) => setAnchorEl(event.currentTarget)}
          endIcon={<MenuSharpIcon />}
        ></Button>
        <Menu
          anchorEl={anchorEl}
          // keepMounted
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
          className="button_menu"
        >
          {routeList.length
            ? routeList.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={`nav_link ${
                    item.path == currentPath ? 'active' : null
                  }`}
                >
                  {item.icon ? null : getMenuButton(item)}
                </NavLink>
              ))
            : null}
        </Menu>
      </div>
    </div>
  )
}

export default withRouter(HeaderLeftNav)
