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
            src="https://luciferadams5.files.wordpress.com/2013/07/085cf3003fabfdd0407fdfe7fc792a414867bbf034ef0bc609b08add.jpeg"
            alt=""
          />
          <p style={{ width: "70%", textAlign: "left " }}>
            Честита Коледа, българи! Коледните празници са били винаги част от
            нашето битие. Повод да седнем около трапезата с любимите хора, повод
            да разменим дарове помежду си. За католиците Рождество Христово е
            най-големият празник, за православните е Великден, а за нас –
            българите, е Коледа. Какво е Коледа? Думата произлиза от частиците
            кол (колело) и ента (еда), което означава край на годината. Този
            празник има много древен езически произход, който се е запазил и до
            ден днешен. За нас българите той няма общо с Иисус Христос, въпреки
            че така бива почитан днес. За нас този празник се свързва със
            започването на Нова година или Млада година, която според българския
            календар е между 21 и 22 декември.
            <button
              onClick={() => router.push("/post/koleda")}
              style={{
                marginTop: "5%",
              }}
              className="loadmore-btn "
            >
              Прочети статията
            </button>
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
