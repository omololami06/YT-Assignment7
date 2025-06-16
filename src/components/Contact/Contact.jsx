import React from "react";
import "./Contact.scss";
import lines from "../../assets/images/lines.svg";
const Contact = () => {
  return (
    <div id="Contact">
      <div className="section">
        <div className="info">
          <div className="contact">
            <h3>CONTACT</h3>
          </div>
          <p>
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
            varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
            quis libero viverra facilisis ut ac est.
          </p>
          <div id="seperator">
            <img src={lines} alt="seperator" />
          </div>
          <form>
            <label for="name">ENTER YOUR NAME*</label>
            <br />
            <br />
            <input type="text" id="name" name="name" />
            <br />
            <br />
            <label for="email">ENTER YOUR EMAIL*</label>
            <br />
            <br />
            <input type="text" id="email" name="email" />
            <br />
            <br />
            <label for="number">PHONE NUMBER</label>
            <br />
            <br />
            <input type="number" id="number" name="number" />
            <br />
            <br />
            <label for="message">YOUR MESSAGE*</label>
            <br />
            <br />
            <input type="text" id="message" name="message" />
            <br />
            <br />
            <input type="submit" value="SUBMIT" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
