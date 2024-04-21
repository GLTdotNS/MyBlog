import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import image from "../../styles/assets/dmytro.webp";
import Image from "next/image";
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
          className="donate-popup "
          style={{
            textAlign: "center",
            fontSize: "15px",
          }}
        >
          <img
            width={300}
            height={300}
            style={{
              width: "60%",
              height: "50%",
              textAlign: "center",
              border: "1px solid #b0903d",
            }}
            src={image.src}
            alt=""
          />
          <p style={{ width: "70%", textAlign: "left " }}>
            <br />
            <br />
            Подкрепете малкия боец Дмитро!{" "}
            <a
              style={{ color: "blue", width: "50%" }}
              href="https://pavelandreev.bg/campaign/pomosht-za-dmytro"
            >
              https://pavelandreev.bg/campaign/pomosht-za-dmytro
            </a>
            {/* <button
              onClick={() =>
                router.push("https://voluspa.noncreativeblog.net/")
              }
              style={{
                marginTop: "5%",
              }}
              className="loadmore-btn "
            >
              Чети онлайн
            </button> */}
            <br />
            <br />
            <br />
            <strong>
              NONCREATIVEBLOG се ангажира с каузата на малкия Дмитро, който
              страда от мултифокална епилепсия и се нуждае от спешна мозъчна
              операция. Моля, помогнете ни да съберем нужните средства за
              неговото лечение. Вашата подкрепа е от съществено значение за
              Дмитро .
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
