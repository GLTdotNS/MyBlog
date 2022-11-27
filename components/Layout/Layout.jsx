import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import { motion, useViewportScroll } from "framer-motion";
import Cookies from "../Cookies/Cookies";
import Head from "next/head";

const Layout = ({ children }) => {
  const { scrollYProgress } = useViewportScroll();
  const [value, onChange] = useState(new Date());

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  let weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayOfWeek = weekday[today.getDay()];
  today = mm + "/" + dd + "/" + yyyy;

  return (
    <div className="layout">
      <Head>
        <title>NONCREATIVEBLOG</title>
        <meta
          name="description"
          content="portfolio ☝️  This is a dev blog about the projects I'm working on at the moment. 
          The blog includes different kinds of articles related to the projects and links to the projects' Github repositories.
          This is a blog post that I made to share some of my experience with React, React NextJS and a little bit of web development.
          My portfolio  is just a collection of a few of the projects that I've worked on. It showcases the different areas of web development that I enjoy.
          React is one of the most popular JavaScript frameworks for creating web applications. It uses Virtual DOM for memory management and is fully reactive."
          key="desc"
        />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container row">
        {children}

        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
