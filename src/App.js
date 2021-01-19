import React from 'react'

import './App.css'
import SideBar from './views/SideBar/SideBar'
import Main from './views/Main/Main'
import Header from './views/Header/Header'
import Footer from './views/Footer/Footer'
import Particles from './components/Particles/Particles'

function App() {
  return (
    <div className="app container">
      <Particles />
      <div className="row">
        <div className="app_left col-xl-3 col-lg-4">
          <SideBar />
        </div>
        <div className="app_right col-xl-9 col-lg-8">
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
