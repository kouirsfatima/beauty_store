import React from 'react';
import './ClientCarousel.css'; // Import CSS styles for Client component
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import testimonial1 from '../../assets/testimonial-1.jpg';
import testimonial2 from '../../assets/testimonial-2.jpg';
import testimonial3 from '../../assets/testimonial-3.jpg';
import testimonial4 from '../../assets/testimonial-4.jpg';

function Client() {
  const testimonials = [
    {
      image: testimonial1,
      text: 'Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quis suscip justo dictum.',
      name: 'Santa Claus',
      profession: 'Christmas Enthusiast'
    },
    {
      image: testimonial2,
      text: 'Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quis suscip justo dictum.',
      name: 'Santa Claus',
      profession: 'Christmas Enthusiast'
    },
    {
      image: testimonial3,
      text: 'Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quis suscip justo dictum.',
      name: 'Santa Claus',
      profession: 'Christmas Enthusiast'
    },
    {
      image: testimonial4,
      text: 'Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quis suscip justo dictum.',
      name: 'Santa Claus',
      profession: 'Christmas Enthusiast'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display three testimonials per slide
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: dots => (
      <div>
        <ul className="slick-dots">
          {dots.map((dot, index) => (
            <li key={index}>
              {dot}
            </li>
          ))}
        </ul>
      </div>
    ),
    customPaging: () => (
      <button className="custom-dot"></button>
    )
  };

  return (
    <div className="testimonial wow fadeInUp" data-wow-delay="0.0s">
      <div className="container">
        <div className="section-header text-center">
          <h2>Our Clients Say!</h2>
        </div>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <div className="testimonial-img">
                <img src={testimonial.image} alt={`Customer ${index + 1}`} />
              </div>
              <div className="testimonial-text">
                <p>{testimonial.text}</p>
                <h3>{testimonial.name}</h3>
                <h4>{testimonial.profession}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Client;
