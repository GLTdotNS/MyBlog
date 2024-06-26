import React from "react";
import { useState } from "react";

import Link from "next/link";

const Footer = () => {
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
    <footer className="footer">
      <div className="footer-left col-md-4 col-sm-6">
        <p className="about">
          <span>Vilkomen! </span> Ár skal rísa, sá er annars vill <br /> fé eða
          fjör hafa;
          <br /> sjaldan liggjandi ulfr <br /> lær of getr né sofandi maðr sigr.
        </p>
        <div className="icons"></div>
      </div>
      <div className="footer-center col-md-4 col-sm-6">
        <form onSubmit={subscribe} className="flex flex-col mb-9 mt-4">
          {!succes ? (
            <input required placeholder="Email address" type="email" />
          ) : (
            <span>Благодаря ! Очаквайте нови статии съвсем скоро !</span>
          )}
          {!succes ? (
            <button
              style={{ backgroundColor: "#212121" }}
              type="submit"
              className="loadmore-btn"
            >
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
      </div>
      <div className="footer-right col-md-4 col-sm-6">
        <h2>
          {" "}
          <span> Noncreativeblog</span>
        </h2>

        <p className="">
          <Link href={"/"} legacyBehavior>
            БЛОГ
          </Link>{" "}
          |{" "}
          <Link href={"/about"} legacyBehavior>
            <a>ЗА САЙТА</a>
          </Link>{" "}
          |{" "}
          <Link href={"/message"} legacyBehavior>
            <a>КОНТАКТИ</a>
          </Link>
          |{" "}
          <Link href={"/privacy"} legacyBehavior>
            <a>ПОВЕРИТЕЛНОСТ</a>
          </Link>{" "}
        </p>
        {/* <iframe
          src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/profile.php?id=100094233162463&tabs=timeline&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&hide_cta=true"
          width="340"
          height="130"
          scrolling="no"
          frameborder="0"
          style={{ display: "flex-box" }}
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe> */}

        <p className="name"> Designed by Canis Lupus &copy; 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
