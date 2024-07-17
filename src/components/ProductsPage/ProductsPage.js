import React from 'react';
import './ProductsPage.css'; // Adjust the path if necessary
import image1 from '../../assets/po2.jpeg';
import SimilarProducts from '../SimilarProducts/SimilarProducts';

function ProductGallery() {
  return (
    <div className="gallery">
      <div className="main-img">
        <img className="active" src={image1} alt="product-img" />
      </div>
    </div>
  );
}

function ProductDetails() {
  return (
    <div className="content">
      <h2 className="product-name-1">Puffiness Set 60 Eye Pads Contain And Collagen For Aging, Size:One size, White</h2>
      <p className="product-desc-1">
        Eye Pad Eye to dark circles, bags, wrinkles, dark circles and puffiness Set 60 eye pads contain and collagen for -aging Material: Eye Color: as the picture shows, (Due to the difference between different monitors, the picture may have slight color difference. please make sure you do not mind before ordering, Thank you!) Package weight: 150g Package size: 8.1x8.1x4.2cm,(Please allow 1-3mm error due to manual measurement. please make sure you do not mind before ordering.) Size: One Size. Color: White.
      </p>
      <div className="price-info-1">
        <div className="price-1">
          <span className="current-price-1">$125.00</span>
          <span className="discount-1">50%</span>
        </div>
        <button className="add-to-cart-1">
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
}

function ProductsPage() {
  return (
    <div className="container">
      <section className="main">
        <ProductGallery />
        <ProductDetails />
      </section>
      <section className="similar-products-section">
        <SimilarProducts />
      </section>
    </div>
  );
}

export default ProductsPage;
