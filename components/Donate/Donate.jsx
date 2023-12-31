import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { GrPaypal } from "react-icons/gr";

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
            src="https://www.realsimple.com/thmb/BXQ5TqR_M8ubEwyRhB3AXeRNQb0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-years-inspirational-quotes-GettyImages-1678757305-76337765cd0644aaa7169ebd7669a632.jpg"
            alt=""
          />
          <p style={{ width: "70%", textAlign: "left " }}>
            За много години !
            <br />
            <br />
            NONCREATIVEBLOG желае на своите читатели, една прекрасна 2024 година
            изпълнена с прекрасни моменти. Бъдете здрави и успешни !
            {/* <button
              onClick={() => router.push("/post/koleda")}
              style={{
                marginTop: "5%",
              }}
              className="loadmore-btn "
            >
              Прочети статията
            </button> */}
            <br />
            <br />
            <br />
            <em>
              Има само два начина да изживееш живота си. Единият е да живееш
              така, като че ли не съществуват чудеса, а другият – сякаш всяко
              нещо е чудо.
              <br />
              <br />
              <strong>- Алберт Айнщайн</strong>
            </em>
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
