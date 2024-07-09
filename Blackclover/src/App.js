import React from 'react'
import NavBar from './components/Navbar/NavBar'
import HomeBanner from './components/banner/HomeBanner'
import Footer from './components/Footer/Footer'
import Header from './components/header/Header'

const App = () => {
  return (
    <div className='container'>
      <NavBar/>
      <HomeBanner/>
      <Header/>
      <Footer/>
    </div>
  )
}

export default App
