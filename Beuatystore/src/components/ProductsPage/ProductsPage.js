import React, { useState } from 'react';
import './ProductsPage.css'; // Assuming this is your CSS file

// Import images correctly
import image1 from '../../assets/po2.jpeg';
import image2 from '../../assets/po4.webp';
import image3 from '../../assets/po7.jpeg';
import image4 from '../../assets/pro1.jpeg';
import image5 from '../../assets/age_treatment_face_serum_b3a29b4b4d034ba1ae55fa21c8b3d80e_grande.webp';

function ProductGallery() {
  const [mainImage, setMainImage] = useState(image1); // Initialize main image state
  const thumbnails = [image1, image2, image3, image4, image5]; // Array of thumbnail images

  const handleThumbnailClick = (index) => {
    setMainImage(thumbnails[index]); // Update main image based on thumbnail click
  };

  return (
    <div className="default gallery">
      <div className="main-img">
        <img className="active" src={mainImage} alt="product-img" />
        {/* You can add additional main images here */}
      </div>
      <div className="thumb-list">
        {thumbnails.map((thumbnail, index) => (
          <div key={index} className={`thumbnail ${index === 0 ? 'active' : ''}`} onClick={() => handleThumbnailClick(index)}>
            <img src={thumbnail} alt={`product-thumbnail-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Lightbox() {
  // Placeholder for lightbox functionality if needed
  return (
    <div className="lightbox">
      {/* Lightbox content */}
    </div>
  );
}

function ProductDetails() {
  return (
    <div className="content">
      <h3>SNEAKER COMPANY</h3>
      <h2 className="product-name">Fall Limited Edition Sneakers</h2>
      <p className="product-desc">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything
        the weather can offer.
      </p>
      <div className="price-info">
        <div className="price">
          <span className="current-price">$125.00</span>
          <span className="discount">50%</span>
        </div>
        <div className="prev-price">$250.00</div>
      </div>
      <div className="add-to-cart-container">
        {/* Add functionality for cart interactions */}
        <div className="counter">
          {/* Add counter functionality */}
        </div>
        <button className="add-to-cart">
          <span>
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              {/* Add SVG content */}
            </svg>
          </span>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
}

function ProductPage() {
  return (
    <div className="container">
      <header>
        {/* Add header content if needed */}
      </header>
      <section className="main">
        <ProductGallery />
        <Lightbox />
        <ProductDetails />
      </section>
    </div>
  );
}

export default ProductPage;
