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
          <p>Благодаря на всички дарили ! Със събраните пари успях:</p>
          <br />
          <ul>
            <li>Да подновя домейна..</li>
            <li>Да ъпгрейдна хостинг плана си.</li>
            <li>Да закупя допълнителни материали.</li>
          </ul>
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
