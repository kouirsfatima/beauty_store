import React from 'react';
import './SimilarProducts.css';
import { productpage } from '../../productstore/productspage';

function SimilarProducts() {

  const handleAddToCart = (productId) => {
    // Logic to handle adding the product to the cart
    console.log(`Product with ID ${productId} added to cart`);
  };

  return (
    <div className="similar-products">
      <h3>Similar Products</h3>
      <div className="similar-products-list">
        {productpage.map((product) => (
          <div key={product.id} className="similar-product">
            <img src={product.similerImage} alt={product.name} />
            <h4>{product.name}</h4>
            <p>${product.price}</p>
            <button className="btn btn-primary2" onClick={() => handleAddToCart(product.id)}>ADD TO CART</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimilarProducts;
