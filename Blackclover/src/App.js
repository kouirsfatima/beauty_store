import React from 'react'
import NavBar from './components/Navbar/NavBar'
import HomeBanner from './components/banner/HomeBanner'
import Footer from './components/Footer/Footer'
import Products from './components/Product/Products'
import Welcome from './components/Welcome/Welcome'
import ClientCarousel from './components/Client/ClientCarousel';
import Update from './components/update/Update'


const App = () => {
  return (
    <div className='container'>
      <NavBar/>
      <HomeBanner/>
      <Welcome/>
      <Products/>
      <ClientCarousel/>
       <Update/>
      <Footer/>
    </div>
  )
}

export default App
