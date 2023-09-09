import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import { motion, useViewportScroll } from "framer-motion";
import Head from "next/head";

const Layout = ({ children, posts }) => {
  const { scrollYProgress } = useViewportScroll();

  return (
    <main id="main-container" className="main-container row wrapper">
      <header>
        <Navbar posts={posts} />

        <br />
      </header>
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
