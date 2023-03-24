import React from "react";
import { useState } from "react";
import { BsGithub, BsFacebook } from "react-icons/bs";
import { TbMessages } from "react-icons/tb";
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
          <h4>За сайтът</h4>

          <p>
            Сайтът е създаден с некомерсиална цел. Не обработваме лични данни ,
            както и не използваме бискитвки.
          </p>
        </div>

        <div className="column">
          <h4>Бързи връзки</h4>

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

            <li>
              <a href="#">
                <i className="fa fa-angle-right"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="column">
          <h4>Свържи се с нас</h4>

          <ul className="social-icons">
            <li>
              <a href="https://github.com/GLTdotNS">
                <BsGithub color="black" size={40} />
              </a>
            </li>

            <li>
              <a href="#">
                <TbMessages size={40} />
              </a>
            </li>

            <li>
              <a href="https://www.facebook.com/canis.lupus.33/">
                <BsFacebook size={40} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="copyright">© 2023 Tonkoff</p>
    </footer>
  );
};

export default Footer;
