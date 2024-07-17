import React, { useContext, useState } from 'react';
import { store } from '../../productstore/store'; // Import your store array
import { CartContext } from '../Cart/CartContext';
import './Product.css';

const Products = () => {
    const { addToCart } = useContext(CartContext);
    const [addedProducts, setAddedProducts] = useState([]);

    const handleAddToCart = (product) => {
        addToCart(product);
        setAddedProducts([...addedProducts, product.id]);
        console.log(`Product added to cart: ${product.name}`);

        setTimeout(() => {
            setAddedProducts((prevAddedProducts) =>
                prevAddedProducts.filter(id => id !== product.id)
            );
        }, 3000);
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
                            <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>ADD TO CART</button>
                            {addedProducts.includes(product.id) && <div className="added-marker">Added to cart</div>}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Products;
