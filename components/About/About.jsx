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
    <></>;
  }

  return (
    <div style={{ backgroundColor: "#000330" }}>
      <section class="home">
        <div class="hero-content">
          <h1 class="hero-heading">
            <span class="highlight">hi, </span>i am john
          </h1>
          <p class="profession">web developer</p>
          <p class="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            odit in laudantium suscipit blanditiis asperiores.
          </p>
          <a href="#contact-section" class="btn">
            contact
          </a>
        </div>
        <Image src={asd} class="image" width={300} height={300} alt="" />
      </section>

      <section class="about " id="about-section">
        <h2 class="heading">
          about <span class="highlight">me</span>
        </h2>
        <p class="sub-heading">Lorem ipsum dolor sit amet consectetur. </p>
        <div class="seperator"></div>

        <div class="about-me-container">
          <div class="left-col">
            <Image
              src={asd}
              class="about-image"
              width={300}
              height={300}
              alt=""
            />
          </div>
          <div class="right-col">
            <p class="about-para">{banner.description}</p>
            <button class="btn">download cv</button>
          </div>
        </div>
      </section>

      <section class="project" id="project-section">
        <h2 class="heading">Skills</h2>
        <div class="seperator"></div>

        <div class="filters">
          <button class="filter-btn active" id="all">
            github
          </button>
          <button class="filter-btn" id="javascript">
            javaScript
          </button>
          <button class="filter-btn" id="ui">
            CSS
          </button>
          <button class="filter-btn" id="backend">
            HTML
          </button>
          <button class="filter-btn" id="fullstack">
            Python
          </button>
        </div>
      </section>
      <section class="about" id="about-section">
        <h2 class="heading">Portfolio</h2>
        <div class="seperator"></div>
        <div class="skill-container">
          <div class="skill-card">
            <p class="skill">Problem solved</p>

            <div className="btn-container">
              <button
                className="btn"
                onClick={() =>
                  window.open("https://github.com/GLTdotNS/mtb-world-shop")
                }
              >
                Code
              </button>
            </div>
          </div>

          <div class="skill-card">
            <p class="skill">GMAIL BOT</p>
            <div className="btn-container">
              <button
                className="btn"
                onClick={() =>
                  window.open("https://github.com/GLTdotNS/MailBot")
                }
              >
                Code
              </button>
            </div>
          </div>
          <div class="skill-card large">
            <p class="skill">E-commerce app</p>
            <div className="">
              <div className="btn-container">
                <button
                  className="btn"
                  onClick={() =>
                    window.open("https://mtb-world-shop.vercel.app/")
                  }
                >
                  Demo
                </button>
                <button
                  className="btn"
                  onClick={() =>
                    window.open("https://github.com/GLTdotNS/mtb-world-shop")
                  }
                >
                  Code
                </button>
              </div>
            </div>
          </div>
          <div class="skill-card large">
            <p class="skill">My blog system</p>

            <div className="btn-container">
              <button
                className="btn"
                onClick={() =>
                  window.open("https://mtb-world-shop.vercel.app/")
                }
              >
                Demo
              </button>
              <button
                className="btn"
                onClick={() =>
                  window.open("https://github.com/GLTdotNS/mtb-world-shop")
                }
              >
                Code
              </button>
            </div>
          </div>
          <div class="skill-card large">
            <p class="skill">Network app</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="heading">Contacts</h2>
        <Contacts />
      </section>
    </div>
  );
};

export default About;
