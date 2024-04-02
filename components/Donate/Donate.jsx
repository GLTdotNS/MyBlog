import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const DonateButton = () => {
  const [open, setOpen] = useState(true);
  const [donateShown, setDonateShown] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const router = useRouter();
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
        <div
          className="donate-popup"
          style={{
            textAlign: "center",
          }}
        >
          <img
            width={"50%"}
            height={"50%"}
            style={{ border: "1px solid #b0903d" }}
            src="https://voluspa.noncreativeblog.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvoluspa.0c3d8755.png&w=2048&q=75"
            alt=""
          />
          <p style={{ width: "70%", textAlign: "left " }}>
            <br />
            <br />
            Предсказанието на Пророчицата“ (Völuspá) е първата едѝческа
            поема-песен, включена в сборника Codex regius (Царска книга) на
            &quot;Старата Ѐда&quot; и втората, която се представя на българския
            читател в двуезична преводна форма от преводачите Яна Чанкова и
            А̀йгир Свѐрисон след &quot;Тъй речени са на Високия словата…&quot;,
            излязла от печат през 2012 г. Кодексът съдържа 10 митологични поеми
            и 19 героически песни, разделени на три цикъла и съставлява т.нар.
            &quot;Стара Ѐда&quot; или &quot;Поетическа Ѐда&quot;.
            <button
              onClick={() =>
                router.push("https://voluspa.noncreativeblog.net/")
              }
              style={{
                marginTop: "5%",
              }}
              className="loadmore-btn "
            >
              Чети онлайн
            </button>
            <br />
            <br />
            <br />
            <strong>
              NONCREATIVEBLOG насърчава четенето на книгите в техния печатен
              вариант, като по този начин изразява признание към интелектуалния
              труд на авторите.
              <br />
              <br />
              <strong>Георги Тонков</strong>
            </strong>
          </p>

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
