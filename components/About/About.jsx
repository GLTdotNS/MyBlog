import React, { useEffect, useState } from "react";
import Skills from "./Hero/Skills";
import Expirience from "./Hero/Expirience";
import Education from "./Hero/Education";
import Hobbies from "./Hero/Hobbies";
import Hero from "./Hero/Hero";
import References from "./Hero/References";
import Contacts from "./Hero/Contacts";
import ProjectsComponent from "../Projects/ProjectsComponent";

const About = ({ banner, references }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Автобиография - Георги Тонков";
  }, []);

  if (!banner) {
    return <div className="spinner"></div>;
  }

  return (
    <div>
      <div className="aboutme">
        <div
          style={{
            marginTop: "1%",
            padding: "5%",
            backgroundColor: "",
          }}
        ></div>
        <div className="full">
          <div className="left">
            <Hero banner={banner} />
            <Skills />
          </div>

          <div className="right">
            <Expirience />
            <Education />
            <Hobbies />
          </div>
        </div>
        <hr />
        <ProjectsComponent />

        <hr />
        <References references={references} />
        <hr />
        <div id="contact">
          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default About;
