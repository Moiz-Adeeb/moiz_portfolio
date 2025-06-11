import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} />
      <h1><span>I'm Moiz Adeeb,</span> Frontend Developer Based in Pakistan.</h1>
      <p>I'm a Fronted Developer from Multan, Pakistan</p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
