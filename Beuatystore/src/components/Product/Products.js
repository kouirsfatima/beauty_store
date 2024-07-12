import React from 'react';
import './Products.css';
import { store } from '../../productstore/store'; // Import your store array

const Products = () => {
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
                            <p>{`$${product.price}`}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Products;
