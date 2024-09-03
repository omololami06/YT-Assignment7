import React from "react";
import "./profile.scss";
import logo from "../../assets/logo.svg";
import hamburger from "../../assets/images/hamburger.svg";
import mSeparator from "../../assets/images/mSeparator.svg";
import mAt from "../../assets/images/mAt.svg";
import mobileGit from "../../assets/images/mobileGit.svg";
import mLinkedIn from "../../assets/images/mLinkedIn.svg";
import at from "../../assets/images/at.svg";
import github from "../../assets/images/github.svg";
import linkedin from "../../assets/images/linkedin.svg";
import image from "../../assets/images/image.png";
import moviewlogo from "../../assets/images/moviewlogo.svg";

const Profile = () => {
  return (
    <div id="Profile">
      <div className="section">
        <nav>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="links">
            <a href="">About me</a>
            <a href="">Skills</a>
            <a href="">Portfolio</a>
            <a id="contact-me" href="">
              CONTACT ME
            </a>
          </div>
        </nav>

        <div className="hero">
          <div className="upper">
            <h2 id="hi">Hi, I am</h2>
            <h3 id="name">Tomasz Gajda</h3>
            <p id="front">Front-end Developer / UI Designer</p>

            <div className="icons">
              <img src={at} alt="@ icon" />
              <img src={github} alt="github icon" />
              <img src={linkedin} alt="linkedin icon" />
            </div>
          </div>
          <div className="photo">
            <img src={image} alt="A young man" />
          </div>
        </div>

        <div className="links-two">
          <div>
            <span>
              <img src={moviewlogo} alt="Menu" />
            </span>
          </div>

          <div>
            <span>
              <img src={hamburger} alt="Menu" />
            </span>
          </div>
        </div>

        <div className="view">
          <h4>my name is Thomas</h4>
          <h3>I’M A DEVELOPER</h3>
          <div>
            <img src={mSeparator} alt="seperator" />
          </div>
          <div className="icon">
            <img src={mAt} alt="@ icon" />
            <img src={mobileGit} alt="github icon" />
            <img src={mLinkedIn} alt="linkedin icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
