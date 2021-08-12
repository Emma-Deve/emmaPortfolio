import React from 'react'

import './App.css'
import SideBar from './components/SideBar/SideBar'
import Main from './views/Main/Main'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Particles from './components/Particles/Particles'

function App() {
  return (
    <div className="app container">
      <Particles />
      <div className="row">
        <div className="side-bar col-xl-3 col-lg-4">
          <SideBar />
        </div>
        <div className="app_right  col-xl-9 col-lg-8">
          <div className="header container_shadow">
            <Header />
          </div>
          <div className="main container_shadow">
            <Main />
          </div>
          <div className="footer container_shadow">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
