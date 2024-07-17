import React from "react";
import Banner1 from "../../assets/bar4.png";
import './banner.css'; // Assuming correct path to your CSS file

function Banner() {
  return (
    <React.Fragment>
      <div className="banner">
        <img src={Banner1} className="banner-image" alt="Sale Banner" />
        {/* <div className="banner-content">
          <h2>new collection</h2>
          <p>Light texture, spring aroma.</p>
        </div> */}
      </div>
    </React.Fragment>
  );
}

export default Banner;
