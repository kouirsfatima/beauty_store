import React from 'react';
import imag1 from '../../assets/po2.jpeg';
import imag2 from '../../assets/po4.webp';
import imag3 from '../../assets/po7.jpeg';
import imag5 from '../../assets/pro1.jpeg';
import imag6 from '../../assets/age_treatment_face_serum_b3a29b4b4d034ba1ae55fa21c8b3d80e_grande.webp';
import imag7 from '../../assets/po10.png';
import imag8 from '../../assets/po8.jpeg';
import imag9 from '../../assets/p30.jpg';
import imag10 from '../../assets/OROGOLD-White-Gold-24K-Classic-Hand-and-Body-Cream-Font-1.png';
import imag11 from '../../assets/p40.jpg';
import imag12 from '../../assets/prudui3.png';
import imag13 from '../../assets/product4.png';
import './Products.css';

const Products = () => {
    return (
        <section className="trending-product" id="trending-product">
            <div>
                <p class=" text-4xl lh6 font-semibold text-center mt-16 mb-10"> OUR BEST SELLERS </p>
            </div>
            <div className="products">
                <div className="row">
                    <img src={imag1} alt="Product 1" />
                    <div className="price">
                        <h4>AVACODA CREAM</h4>
                        <p>$99-$129</p>
                    </div>
                </div>
                <div className="row">
                    <img src={imag2} alt="Product 2" />
                    <div className="price">
                        <h4>UBTAN FACEWASH</h4>
                        <p>$79-$109</p>
                    </div>
                </div>
                <div className="row">
                    <img src={imag3} alt="Product 3" />
                    <div className="price">
                        <h4>ANTIOXIDANT FACEMASK</h4>
                        <p>$149-$179</p>
                    </div>
                </div>
                <div className="row">
                    <img src={imag5} alt="Product 4" />
                    <div className="price">
                        <h4>COFFEE BODY WASH</h4>
                        <p>$199-$229</p>
                    </div>
                </div>
                <div className="row">
                    <img src={imag6} alt="Product 5" />
                    <div className="price">
                        <h4>Gold Glow Priming Serum</h4>
                        <p>$179-$209</p>
                    </div>
                </div>
                <div className="row">
                    <img src={imag7} alt="Product 6" />
                    <div className="price">
                        <h4>STRAWBERRY MOISTURISER</h4>
                        <p>$129-$159</p>
                    </div>
                </div>
                <div className="row">
                    <img src={imag8} alt="Product 7" />
                    <div className="price">
                        <h4>BLUEBERRY MOISTURISER</h4>
                        <p>$89-$119</p>
                    </div>
                </div>
                <div className="row">
                    <img src={imag9} alt="Product 8" />
                    <div className="price">
                        <h4>BLUEBERRY MOISTURISER</h4>
                        <p>$69-$99</p>
                    </div>
                </div>
                <div className="row">
                    <img src={imag10} alt="Product 9" />
                    <div className="price">
                        <h4>BLUEBERRY MOISTURISER</h4>
                        <p>$149-$179</p>
                    </div>
                </div>
                <div className="row">
                    <img src={imag11} alt="Product 10" />
                    <div className="price">
                        <h4>BLUEBERRY MOISTURISER</h4>
                        <p>$119-$149</p>
                    </div>
                </div>
                <div className="row">
                    <img src={imag12} alt="Product 11" />
                    <div className="price">
                        <h4>Gold Camellia Beauty Oil</h4>
                        <p>$139-$169</p>
                    </div>
                </div>
                <div className="row">
                    <img src={imag13} alt="Product 12" />
                    <div className="price">
                        <h4>TGold Camellia</h4>
                        <p>$159-$189</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
