import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm a budding frontend developer passionate about crafting
              engaging and user-friendly web experiences. With a solid grasp of
              HTML, CSS, and JavaScript, I love bringing designs to life and
              creating intuitive interfaces. I'm excited to continue learning
              and growing in this ever-evolving field, always striving to build
              impactful and visually appealing websites.
            </p>
            <p>
              My passion for Frontend development is not only in my work but
              also through my collaborations with other Frontend developers in
              my field
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>Next JS</p>
              <hr style={{ width: "25%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
