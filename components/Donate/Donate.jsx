import Link from "next/link";
import React, { useState, useEffect } from "react";
import { GrPaypal } from "react-icons/gr";

const DonateButton = () => {
  const [open, setOpen] = useState(true);
  const [donateShown, setDonateShown] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const donateShown = sessionStorage.getItem("donateShown");

    if (!donateShown) {
      setDonateShown(true);
      sessionStorage.setItem("donateShown", "true");
    }
  }, []);
  return (
    <div>
      {open && donateShown ? (
        <div className="donate-popup">
          <h1
            style={{
              textAlign: "center",
              position: "absolute",
              top: "0",
              left: "0px",
              right: "40px",
              color: "#0099ff !important",
              marginTop: "0 ",
              paddingBottom: "5% !important",
              fontSize: "30px",
            }}
            className="siteLogo "
          >
            NONCREATIVEBLOG
          </h1>{" "}
          <br />
          <p>Отчет на даренията за Ноември месец</p>
          <br />
          <p>Обща стойност на дарението - 315лв</p>
          <br />
          <p>Закупени материали:</p>
          <ul>
            <li>Окултна философия - том 1: Природна магия</li>
            <li> Окултна философия - том 2: Небесна магия</li>
            <li>Окултна философия - том 3: Церемониална магия</li>
            <br />
            <p>Обща стойност: 51лв</p>
          </ul>
          <p>Техническа поддръжка:</p>
          <ul>
            <li>Подновен план на хостинг</li>
            <li>Подновен план на хостинг на базата данни</li>
            <br />
            <p>Обща стойност: 240лв</p>
          </ul>
          <br />
          <p>Благодаря на всички дарили !</p>
          <button className="close" onClick={handleClick}>
            Затвори
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DonateButton;
