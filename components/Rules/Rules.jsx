import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../styles/assets/grayscale_transparent.png";
import { useStateContext } from "../../Context/stateContext";
import Link from "next/link";
const Rules = () => {
  const { isPopupOpen, setPopupOpen } = useStateContext();
  const handleClose = () => {
    setPopupOpen(false);
  };

  return (
    <>
      {isPopupOpen && (
        <div className="user-popup " style={{ color: "white" }}>
          <div className="">
            <Image src={logo} width={"100%"} alt="Noncreativeblog" />

            <h4 style={{ textAlign: "center" }}>Правила за коментиране</h4>
            <ol className="rules">
              <li>
                Език. <p>Писането на кирилица е задължително.</p>
              </li>
              <li>
                Запазете уважение.{" "}
                <p>
                  Придържайте се към уважителния тон, дори ако не сте съгласни с
                  чуждото мнение.
                </p>
              </li>
              <li>
                Не използвайте нецензурни думи.
                <p>Изразявайте се по учтив начин, избягвайки вулгарен език.</p>
              </li>
              <li>
                Бъдете конструктивни.{" "}
                <p>
                  Коментирайте с цел изразяване на мнение по темата. Ако не сте
                  съгласни с мнението на авторите или коментиращите,
                  критикувайте градивно.
                </p>
              </li>
              <li>
                Не нападайте лично.{" "}
                <p>
                  NONCREATIVEBLOG не толерира нападки към личността, независимо
                  от това дали е автор на статията или читател.
                </p>
              </li>
              <li>
                Поддържайте ясен и разбираем език.{" "}
                <p>
                  Изказвайте се максимално ясно. Подбирайте думите си
                  внимателно, за да бъдете разбрани от всеки.
                </p>
              </li>
              <li>
                Проверявайте фактите.{" "}
                <p>
                  Погледнете към точка 4. Преди да изложите своята теза -
                  проверете истинността на думите си. Посочвайте източници или
                  имена на автори в своята теза. NONCREATIVEBLOG позволява
                  публикуването на външни линкове.
                </p>
              </li>
              <li>
                Спазването на правилата е задължително.{" "}
                <p>
                  Коментарът ще бъде публикуван, ако всички правила са спазени.
                </p>
              </li>
            </ol>
            <div style={{ marginTop: "5%", color: "wheat" }}>
              {" "}
              <Link href={"/message"}> Връзка с администратор.</Link>
            </div>
            <button
              style={{ marginTop: "4%", marginBottom: "10% !important" }}
              className="loadmore-btn close"
              onClick={handleClose}
            >
              Затвори
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Rules;
