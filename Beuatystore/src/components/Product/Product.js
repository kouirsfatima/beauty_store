import React from 'react';
import { store } from '../../productstore/store'; // Import your store array
import './Product.css';

const Products = () => {
    const handleBuyNow = (productId) => {
        // Implement your buy now logic here, e.g., redirect to checkout or add to cart
        console.log(`Buy Now clicked for product with id ${productId}`);
    };

    return (
        <section className="trending-product" id="trending-product">
            <div>
                <p className="text-4xl lh6 font-semibold text-center mt-16 mb-10">OUR BEST SELLERS</p>
            </div>
            <div className="products">
                {store.map((product) => (
                    <div className="row" key={product.id}>
                        <img src={product.primaryImage} alt={product.name} />
                        <div className="price">
                            <h4>{product.name}</h4>
                            <p>${product.price}</p>
                            <button className="btn btn-primary" onClick={() => handleBuyNow(product.id)}>ADD TO CART</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Products;



