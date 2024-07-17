import React from 'react';
import newUpdate2 from '../../assets/1.png';
import newUpdate3 from '../../assets/2.png';
import newUpdate1 from '../../assets/3.png';
import './skintips.css'; // Import CSS for styling

function UpdateNews() {
  return (
    <section className="update-news">
      <div className="up-center-text">
        <h2>skincare tips</h2>
      </div>
      <div className="update-cards">
        <div className="update-card">
          <img src={newUpdate2} alt="Update 2" />
          <h4>Begin Your Routine with a Gentle</h4>
          <p>
            Start your skincare routine by choosing a gentle cleanser that is specifically formulated for your skin type. This essential step helps to remove dirt, oil, and impurities without stripping your skin of its natural moisture. Use lukewarm water and avoid harsh scrubbing to prevent irritation and maintain a healthy skin barrier.
          </p>
          <h6>Continue Reading ..</h6>
        </div>
        <div className="update-card">
          <img src={newUpdate3} alt="Update 3" />
          <h4>Maintain Hydration and Skin Health </h4>
          <p>
            Keep your skin hydrated and healthy by applying a suitable moisturizer every day after cleansing. Select a product that aligns with your skin type—whether it's oily, dry, or combination—and contains beneficial ingredients like hyaluronic acid or glycerin. Daily moisturization helps to lock in moisture, leaving your skin feeling soft, supple, and radiant.
          </p>
          <h6>Continue Reading ..</h6>
        </div>
        <div className="update-card">
          <img src={newUpdate1} alt="Update 1" />
          <h4>Protect Your Skin from Harmful UV</h4>
          <p>
            Ensure your skin stays youthful and protected by using a broad-spectrum sunscreen with at least SPF 30 every day. Sun protection is essential, even on cloudy days or when you're indoors, to prevent premature aging and skin damage. Reapply every two hours if you're spending time outdoors, and consider products that combine moisturization with SPF for added convenience and protection.
          </p>
          <h6>Continue Reading ..</h6>
        </div>
      </div>
    </section>
  );
}

export default UpdateNews;
