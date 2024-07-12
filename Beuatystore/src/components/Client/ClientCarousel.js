import React from 'react';
import './ClientCarousel.css'; // Import CSS styles for Client component
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import testimonial1 from '../../assets/testimonial-1.jpg';
import testimonial2 from '../../assets/mn2.jpg';
import testimonial3 from '../../assets/testimonial-3.jpg';
import testimonial4 from '../../assets/mn3.jpg';
import testimonial5 from '../../assets/mn4.jpg';

function Client() {
  const testimonials = [
    {
      image: testimonial1,
      text: 'It blends seamlessly into my skin and provides a flawless finish that lasts all day. The coverage is buildable, so I can get a natural look during the day.',
      name: 'Amanda L',
      profession: 'Makeup Artist'
    },
    {
      image: testimonial2,
      text: 'This foundation is very good but not perfect. It provides good coverage and has a nice finish, but it tends to feel a bit heavy on my skin after a few hours.',
      name: 'Rita',
      profession: 'Beauty Blogger'
    },
    {
      image: testimonial3,
      text: 'I really like this foundation! It has a lightweight formula that feels comfortable on my skin, and gives me a dewy, radiant finish.',
      name: 'Clara M',
      profession: 'Skincare Specialist'
    },
    {
      image: testimonial4,
      text: 'I had high hopes for this foundation, but it didn\'t work out for me. The coverage is too sheer for my liking, and it didn\'t cover my blemishes well.',
      name: 'Dana B',
      profession: 'Beauty Enthusiast'
    },
    {
      image: testimonial5,
      text: 'This foundation exceeded my expectations! It provides excellent coverage without feeling heavy, and it stays put all day long.',
      name: 'Sophia K',
      profession: 'Makeup Artist'
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
          <h2>Our Client Say!</h2>
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
