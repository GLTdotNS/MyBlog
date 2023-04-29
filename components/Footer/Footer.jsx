import React from "react";
import { useState } from "react";
import { BsGithub, BsFacebook } from "react-icons/bs";
import { TbMessages } from "react-icons/tb";
import Link from "next/link";
import Admin from "../Admin/admin";
import Contacts from "../Contacts/contacts";
const Footer = () => {
  const [contact, setContact] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [succes, setsucces] = useState(false);
  const subscribe = async (e) => {
    e.preventDefault();
    setsucces(true);
    // setState(1);
    // setErrorMsg("");

    // try {
    //   const res = await fetch("/api/newsletter", {
    //     method: "PUT",
    //     body: e.target[0].value,
    //   });

    //   const data = await res.json();
    //   if (data.error !== null) {
    //     throw data.error;
    //   }
    //   setState(2);
    // } catch (e) {
    //   setErrorMsg(e);
    //   setState(3);
    // }
  };

  return (
    <footer>
      <div className="row">
        <div className="column">
          <h4>Информация за блога</h4>

          <p>
            Добре дошли в моя блог! Тук ще намерите различни материали за
            митологии от различни култури, поезия и статии свързани с
            технологиите.
          </p>
        </div>

        <div className="column">
          <h4>Fylgja mér</h4>

          <ul>
            <li>
              <form onSubmit={subscribe} className="flex flex-col mb-9 mt-4">
                {!succes ? (
                  <input required placeholder="Email address" type="email" />
                ) : (
                  <span>Благодаря ! Очаквайте нови статии съвсем скоро !</span>
                )}
                {!succes ? (
                  <button type="submit" className="btn">
                    Абонирай се
                  </button>
                ) : (
                  <div className="  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="50"
                      width="50"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <circle
                        style={{ stroke: "#6faaff" }}
                        className="circle"
                        fill="#6faaff"
                        cx="24"
                        cy="24"
                        r="22"
                      />
                      <path
                        className="tick"
                        fill="none"
                        stroke="#FFF"
                        stroke-width="6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        d="M14 27l5.917 4.917L34 17"
                      />
                    </svg>
                  </div>
                )}
              </form>
            </li>
          </ul>
        </div>

        <div className="column">
          <h4>Ако искате да се свържете с мен </h4>

          <ul className="social-icons">
            <li>
              <a href="https://github.com/GLTdotNS">
                <BsGithub color="black" size={40} />
              </a>
            </li>

            <li onClick={() => setContact(true)}>
              <Link href={"/message"}>
                <TbMessages size={40} />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <p className="copyright">
        © 2023 Designed by <span>Canis Lupus</span>
      </p>
    </footer>
  );
};

export default Footer;
