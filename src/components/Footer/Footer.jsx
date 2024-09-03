import React from "react";
import "./footer.scss";
import arrow from "../../assets/images/arrow.svg";
import fb from "../../assets/images/fb.svg";
import linkedinfooter from "../../assets/images/linkedinfooter.svg";
import insta from "../../assets/images/insta.svg";
import email from "../../assets/images/email.svg";
const Footer = () => {
  return (
    <div id="Footer">
      <div className="section">
        <div className="footer">
          <footer>
            <div id="arrow">
              <img src={arrow} alt="arrow up" />
            </div>

            <p>
              <a onClick={() => topFunction()} href="">
                BACK TO TOP
              </a>
            </p>

            <div id="footer-logo">
              <div>
                <img src={fb} alt="facebook logo" />
              </div>
              <div>
                <img src={linkedinfooter} alt="linkedin logo" />
              </div>
              <div>
                <img src={insta} alt="instagram logo" />
              </div>
              <div>
                <img src={email} alt="mail logo" />
              </div>
            </div>
            <p>@2020 Tomasz Gajda All Rights Reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
