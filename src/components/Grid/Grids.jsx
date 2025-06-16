import React from "react";
import "./Grids.scss";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import img6 from "../../assets/images/img6.png";
import img7 from "../../assets/images/img7.png";
const Grids = () => {
  return (
    <div id="Grid">
      <div className="section">
        <div className="container">
          <img src={img2} alt="A spider web looklalike image" />
        </div>

        <div className="container">
          <img src={img3} alt="A beautiful image" />
          <div className="inner">
            <p>coded, designed</p>
            <h5>eatsome.</h5>
            <p>Restaurant browsing in React.js (Using Yelp API)</p>
            <div className="demo">
              <span>DEMO</span>
              <span>MORE</span>
            </div>
          </div>
        </div>

        <div className="container">
          <img src={img4} alt="A beautiful garden" />
        </div>

        <div className="container">
          <img src={img5} alt="A sun" />
        </div>
        <div className="container">
          <img src={img6} alt="A flower garden" />
        </div>
        <div className="container">
          <img src={img7} alt="A spiderweb lookalike" />
        </div>
      </div>
      <div class="othersp">
        <p>And many more to come</p>
      </div>
    </div>
  );
};

export default Grids;
