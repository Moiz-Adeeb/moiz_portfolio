import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img2.png";
import resume from '../../assets/resume2.pdf'
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} />
      <h1>
        <span>I'm Moiz Adeeb,</span> Frontend Developer Based in Pakistan.
      </h1>
      <p>I'm a Fronted Developer from Multan, Pakistan</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <button className="hero-resume"><a href={resume} download='resume'>My Resume</a></button>
      </div>
    </div>
  );
};

export default Hero;
