import React, { useEffect, useState } from "react";
import Skills from "./Hero/Skills";
import Expirience from "./Hero/Expirience";
import Education from "./Hero/Education";
import Hobbies from "./Hero/Hobbies";
import Hero from "./Hero/Hero";
import References from "./Hero/References";
import Contacts from "./Hero/Contacts";
import ProjectsComponent from "../Projects/ProjectsComponent";
import asd from "../../styles/assets/akali.jpg";
import Image from "next/image";
const About = ({ banner, references }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Автобиография - Георги Тонков";
  }, []);

  if (!banner) {
    return <div className="spinner"></div>;
  }

  return (
  
  );
};

export default About;
