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
      {open && !donateShown ? (
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
              fontSize: "50px",
            }}
            className="siteLogo "
          >
            NONCREATIVEBLOG
          </h1>{" "}
          <br />
          <p>
            {" "}
            Този сайт е създаден с цел да популяризира скандинавската митология.
            В него можете да намерите информация за боговете, богините, героите
            и други персонажи от тази богата и интересна култура.
          </p>
          <br />
          <p>
            За да мога да продължа да развивам сайта, се нуждая от вашата
            подкрепа. Всяко дарение, колкото и да е малко, ще бъде от голяма
            помощ.
          </p>
          <br />
          <p>Парите ще бъдат използвани за:</p>
          <br />
          <ul>
            <li>Добавяне на нови статии и информация</li>
            <li>Поддръжка на сайта</li>
            <li>Развитие на дизайна и функционалността</li>
          </ul>
          <br />
          <p>
            Ако искате да помогнете за развитието на този сайт, можете да
            направите дарение чрез PayPal .
          </p>
          <br />
          <p>
            <Link style={{ color: "#0099ff" }} href={"/donate"}>
              Информационен бюлетин за дарителите.
            </Link>
          </p>
          <br />
          <p id="last-p">
            <strong>Благодаря ви за подкрепата!</strong>
          </p>{" "}
          <button
            className="donate-button"
            onClick={() =>
              window.open(
                "https://www.paypal.com/donate/?hosted_button_id=DSMYWHRGK6VWE"
              )
            }
          >
            <GrPaypal color="white" />
          </button>
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
