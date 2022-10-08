import React, { useEffect, useState } from "react";
import Skills from "./Hero/Skills";
import { SiGithub } from "react-icons/si";
import GitHub from "../Blog/BlogPageComponents/GitHub";
import Expirience from "./Hero/Expirience";
import Education from "./Hero/Education";
import Hobbies from "./Hero/Hobbies";
import Hero from "./Hero/Hero";
import References from "./Hero/References";
import Contacts from "./Hero/Contacts";
import ProjectsComponent from "../Projects/ProjectsComponent";

const About = ({ banner, references }) => {
  const [github, setGithub] = useState(null);
  const [contributions, setContributions] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 1);
    document.title = "Автобиография - Георги Тонков";
  }, []);

  useEffect(() => {
    fetch(`/api/getGitHubInfo`)
      .then((response) => response.json())
      .then((response) => {
        setGithub(response.name);
      });
  }, []);

  useEffect(() => {
    const url = `/api/getContributions`;

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setContributions(
          response.data.data.viewer.contributionsCollection.contributionCalendar
            .totalContributions
        );
      });
  }, []);

  if (!banner) {
    return <div className="spinner"></div>;
  }

  const showGithub = (e) => {
    const left = document.getElementById("forShowing");

    if (show) {
      setShow(false);
      left.style.width = "15%";
    } else {
      left.style.width = "15%";
      setShow(true);
    }
  };

  return (
    <div>
      <div className="leftcolumn" id="forShowing">
        {!show ? (
          <button className="buttonGit" onClick={(e) => showGithub(e)}>
            <SiGithub size={30} />
          </button>
        ) : (
          <button
            style={{
              backgroundColor: "#333",
              color: "white",
              borderRadius: "100%",
              borderColor: "transparent",
            }}
            className="buttonGit"
            onClick={(e) => showGithub(e)}
          >
            X
          </button>
        )}

        {show && <GitHub github={github} contributions={contributions} />}
      </div>
      <div className="aboutme">
        <div
          style={{
            marginTop: "1%",
            padding: "5%",
            backgroundColor: " #181818",
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
