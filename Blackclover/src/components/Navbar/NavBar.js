import React from 'react';
import '../../components/Navbar/nav.css'; // Corrected the import statement

import logo from '../../assets/logo2.png';
import search_icon1 from '../../assets/search-b.png'; // Assuming this is not used
// import search_icon from '../../assets/search-w.png';
import { HiShoppingBag } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";



function NavBar() {
  return (
    <div className='navbar'>
      <img src={logo} alt='Logo' className='logo' />
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
      </ul>
      <div className='search-box'>
        <input type='text' placeholder='Search' />
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
