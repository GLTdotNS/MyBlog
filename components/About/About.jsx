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

const About = ({ banner, references }) => {
  const [github, setGithub] = useState(null);
  const [contributions, setContributions] = useState(null);
  const [show, setShow] = useState(false);

  if (!banner) {
    return <div className="spinner"></div>;
  }

  const showGithub = (e) => {
    const left = document.getElementById("forShowing");

    if (show) {
      setShow(false);
      document.getElementById("forShowing").style.backgroundColor =
        "transparent";
    } else {
      left.style.backgroundColor = "#0d1117";
      document.getElementById("forShowing").style.width = "red";
      setShow(true);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
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
            backgroundColor: " rgb(24, 24, 24)",
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
