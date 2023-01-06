import React from 'react';
import teamPic from '../../../Assets/kid.jpeg';
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";
const About = () => {
    // function myFunction() {
    //   window.open("https://www.mozilla.org/", "mozillaTab");
    // }
    return (
      <section className="about overflow-hidden py-5">
        <div className="row w-100">
          <div className="row col-md-11 mx-auto ">
            <div className="col-md-6 img">
              <Fade duration={2000} left>
                <img src={`${teamPic}`} alt="" className="img-fluid" />
              </Fade>
            </div>
            <div className="col-md-6 ps-2">
              <Fade duration={2000} right>
                <p className="miniTitle">IF NOT IF</p>
                <h1 className="headerTitle">
                  LETS HAVE A TEST{" "}
                  <span className="headerHighlight">TO SEE</span> YOUR GOAL
                </h1>
                <p className="headerContent">
                  If you are not sure what you want to do, then you can do give
                  this test. We will give you a idea so that you can do in
                  future
                </p>
                <Link to="/testing">
                  <button className="branBtn">Test Here</button>
                </Link>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    );
};

export default About;