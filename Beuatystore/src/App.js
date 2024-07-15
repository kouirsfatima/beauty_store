import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import HomeBanner from './components/banner/HomeBanner';
import Footer from './components/Footer/Footer';
import Products from './components/Product/Product';
import Welcome from './components/Welcome/Welcome';
import ClientCarousel from './components/Client/ClientCarousel';
import Skinteps from './components/skinteps/Skinteps';
import ProductsPage from './components/ProductsPage/ProductsPage';
import About from './components/About/About';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup'; // Corrected import
import Cart from './components/Cart/Cart';

const App = () => {
  return (
    <BrowserRouter>
      <div className='container'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} /> {/* Added Signup route */}

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
