import React from "react";
import "./About.scss";
import design from "../../assets/images/design.svg";
import development from "../../assets/images/development.svg";
import maintenance from "../../assets/images/maintenance.svg";
import lines from "../../assets/images/lines.svg";
import html from "../../assets/images/html.svg";
import css from "../../assets/images/css.svg";
import sass from "../../assets/images/sass.svg";
import js from "../../assets/images/js.svg";
import react from "../../assets/images/react.svg";
import bootstrap from "../../assets/images/bootstrap.svg";
import git from "../../assets/images/git.svg";
import figma from "../../assets/images/figma.svg";
import nodes from "../../assets/images/nodes.svg";
import sql from "../../assets/images/sql.svg";
import mongodb from "../../assets/images/mongodb.svg";
import tp from "../../assets/images/tp.svg";
import angieliski from "../../assets/images/angieliski.svg";
import hispanski from "../../assets/images/hispanski.svg";
import cplus from "../../assets/images/cplus.svg";
import c from "../../assets/images/c.svg";
import line from "../../assets/images/line.svg";

const About = () => {
  function handleClick() {
    window.open("https://github.com/dashboard");
  }
  return (
    <div id="About">
      <div className="section">
        <div className="main">
          <div className="ME">
            <a href="">ABOUT ME</a>
          </div>

          <div className="para">
            <p className="p1">
              Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
              varius finibus. Sed ornare sit amet lorem <br />
              sed viverra. In vel urna quis libero viverra facilisis ut ac est.
            </p>
            <p className="p2">
              My name is Tomasz Gajda, I'm a third year Applied Computer Science
              student at the AGH University of Science and Technology in Krakow.
              I have been learning Front-End technologies for a year and this
              time was just enough for me to make sure that this is my place in
              the industry. Membership in the science club developed my design
              skills, which quickly turned into a new hobby. I am fluent in
              English (spoken and written) and intermediate Spanish. Apart from
              designing and programming websites, my passion is all kinds of
              motorsport - from rallies to the very king of motorsport - formula
              1.
            </p>
            <div>
              <button onClick={() => handleClick()}>EXPLORE</button>
            </div>
            <div>
              <img id="image" src={line} alt="Seperator" />
            </div>
          </div>
          <div className="first">
            <div className="design">
              <div className="div1">
                <div className="images">
                  <img src={design} alt="Cross pencil and ruler image" />
                  <h6 className="h6">DESIGN</h6>
                </div>
                <p>
                  I can design the site based on your needs and suggestions. I
                  can also design the site from scratch and consult you during
                  the job.
                </p>
              </div>

              <div className="div2">
                <div className="images">
                  <img src={development} alt="cross spanner and chisel image" />
                  <h6 className="h6">DEVELOPMENT</h6>
                </div>
                <p>
                  I can design the site based on your needs and suggestions. I
                  can also design the site from scratch and consult you during
                  the job.
                </p>
              </div>
            </div>

            <div className="div3">
              <div className="images">
                <img src={maintenance} alt="maintenance image" />
                <h6 className="h6">MAINTENANCE</h6>
              </div>
              <p>
                I can design the site based on your needs and suggestions. I can
                also design the site from scratch and consult you during the
                job.
              </p>
            </div>
          </div>

          <div className="lines">
            <img src={lines} alt="lines" />
          </div>

          <div className="skill">
            <h6>SKILLS</h6>
          </div>

          <div className="second">
            <div>
              <h5>USING NOW:</h5>
            </div>
            <div className="learning">
              <div className="use">
                <img src={html} alt="html logo" />
                <p>HTML5</p>
              </div>
              <div className="use">
                <img src={css} alt="css3 logo" />
                <p>CSS3</p>
              </div>
              <div className="use">
                <img src={sass} alt="sass logo" />
                <p>SASS</p>
              </div>
              <div className="use">
                <img src={js} alt="js logo" />
                <p>JAVASCRIPT</p>
              </div>
            </div>

            <div className="learning">
              <div className="use">
                <img src={react} alt="react logo" />
                <p>REACT</p>
              </div>
              <div className="use">
                <img src={bootstrap} alt="bootstrap logo" />
                <p>BOOTSTRAP</p>
              </div>
              <div className="use">
                <img src={git} alt="git logo" />
                <p>GIT</p>
              </div>
              <div className="use">
                <img src={figma} alt="figma logo" />
                <p>FIGMA</p>
              </div>
            </div>

            <div>
              <div>
                <h5>LEARNING:</h5>
              </div>
              <div className="learning">
                <div className="use">
                  <img src={nodes} alt="nodejs logo" />
                  <p>NODEJS</p>
                </div>
                <div className="use">
                  <img src={sql} alt="mysql logo" />
                  <p>MySQL</p>
                </div>
                <div className="use">
                  <img src={mongodb} alt="mongodb logo" />
                  <p>MONGODB</p>
                </div>
                <div className="use">
                  <img src={tp} alt="typescript logo" />
                  <p>TYPESCRIPT</p>
                </div>
              </div>

              <div>
                <h5>OTHER SKILLS:</h5>
              </div>
              <div className="learning">
                <div className="use">
                  <img src={angieliski} alt="angieliski logo" />
                  <p>ANGIELSKI C1/C2</p>
                </div>
                <div className="use">
                  <img src={hispanski} alt="hiszpanski logo" />
                  <p>HISZPAŃSKI B1/B2</p>
                </div>
                <div className="use">
                  <img src={cplus} alt="c++ logo" />
                  <p>C++</p>
                </div>
                <div className="use">
                  <img src={c} alt="c logo" />
                  <p>C</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
