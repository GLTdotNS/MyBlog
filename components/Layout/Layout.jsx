import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import { motion, useViewportScroll } from "framer-motion";
import Cookies from "../Cookies/Cookies";
import Head from "next/head";

const Layout = ({ children }) => {
  const { scrollYProgress } = useViewportScroll();

  return (
    <div className="layout">
      <header>
        <Navbar />
      </header>
      <main className="main-container row wrapper">
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
