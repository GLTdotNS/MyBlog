import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import { motion, useViewportScroll } from "framer-motion";

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
