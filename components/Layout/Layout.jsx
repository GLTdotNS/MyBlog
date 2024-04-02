import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { BsFillArrowUpCircleFill } from "react-icons/bs/index";
const Layout = ({ children, posts }) => {
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    let mybutton = document.getElementById("scrollTop");

    window.onscroll = function () {
      scrollFunction();
    };
    function scrollFunction() {
      if (
        document.body.scrollTop > 700 ||
        document.documentElement.scrollTop > 700
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
  }, []);
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <main id="main-container" className="main-container row wrapper">
      <header>
        <Navbar posts={posts} />

        <br />
      </header>
      <button onClick={topFunction} id="scrollTop" title="Go to top">
        <BsFillArrowUpCircleFill color="#f9b22a" />
      </button>
      {children}

      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress, zIndex: 2000 }}
      />
      <Footer />
    </main>
  );
};

export default Layout;
