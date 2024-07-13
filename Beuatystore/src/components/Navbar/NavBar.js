import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../components/Navbar/nav.css'; // Corrected the import statement

import logo from '../../assets/logo2.png';
import search_icon1 from '../../assets/search-b.png'; // Assuming this is not used
// import search_icon from '../../assets/search-w.png';
import { HiShoppingBag } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";

function NavBar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <img src={logo} alt='Logo' className='logo' />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li> {/* Corrected the route path */}
        <li><Link to="/about">About</Link></li>
      </ul>
      <div className='search-box'>
        <input type='search' placeholder='Search' />
        <img src={search_icon1} alt='Search' />
      </div>

      <div className="social-icons-container">
        <HiShoppingBag size="32px" className="navcart" />
        <FaUserCircle size="32px" className="navcart" />
      </div>
    </div>
  );
}

export default NavBar;
