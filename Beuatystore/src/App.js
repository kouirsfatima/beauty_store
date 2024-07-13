import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import HomeBanner from './components/banner/HomeBanner';
import Footer from './components/Footer/Footer';
import Products from './components/Product/Products';
import Welcome from './components/Welcome/Welcome';
import ClientCarousel from './components/Client/ClientCarousel';
import Skinteps from './components/skinteps/Skinteps';
import ProductsPage from './components/ProductsPage/ProductsPage';
import About from './components/About/About';

const App = () => {
  return (
    <BrowserRouter>
      <div className='container'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

const Home = () => (
  <>
    <HomeBanner />
    <Welcome />
    <Products />
    <ClientCarousel />
    <Skinteps />
  </>
);

const AboutPage = () => (
  <>
    <About />
  </>
);

export default App;
