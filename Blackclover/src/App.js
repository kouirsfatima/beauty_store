import React from 'react'
import NavBar from './components/Navbar/NavBar'
import HomeBanner from './components/banner/HomeBanner'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='container'>
      <NavBar/>
      <HomeBanner/>
      <Footer/>
    </div>
  )
}

export default App
