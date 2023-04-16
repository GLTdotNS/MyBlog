import React from "react";
import { useState } from "react";
import { BsGithub, BsFacebook } from "react-icons/bs";
import { TbMessages } from "react-icons/tb";
import Link from "next/link";
const Footer = () => {
  const [state, setState] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const subscribe = async (e) => {
    e.preventDefault();

    setState(1);
    setErrorMsg("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "PUT",
        body: e.target[0].value,
      });

      const data = await res.json();
      if (data.error !== null) {
        throw data.error;
      }
      setState(2);
    } catch (e) {
      setErrorMsg(e);
      setState(3);
    }
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
              {state == 2 ? (
                <p className="font-medium mt-4 text-xl text-green-800">
                  Благодарим за интереса. Проверете пощата си за нови известия.
                </p>
              ) : (
                <form onSubmit={subscribe} className="flex flex-col mb-9 mt-4">
                  <input required placeholder="Email address" type="email" />
                  <button type="submit" className="btn">
                    Абонирай се
                  </button>
                  {state === 3 ? (
                    <p className="text-red-500 mt-3">{errorMsg}</p>
                  ) : (
                    ""
                  )}
                </form>
              )}
            </li>
          </ul>
        </div>

        <div className="column">
          <h4>Ако скате да се свържете с мен </h4>

          <ul className="social-icons">
            <li>
              <a href="https://github.com/GLTdotNS">
                <BsGithub color="black" size={40} />
              </a>
            </li>

            <li>
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
