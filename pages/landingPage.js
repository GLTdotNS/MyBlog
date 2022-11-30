import Link from "next/link";
import React from "react";
import Image from "next/image";
import landingImage from "../styles/assets/landingImage.png";
const Landing = () => {
  return (
    <div className="landingPage">
      <div
        id="w-node-_712c206d-f420-08ca-a2af-4b05406a0870-5fe902a0"
        className="pc-window_component is-home-main"
      >
        <div className="pc-window_top-wrapper">
          <div clclassNameass="pc-window_top-bar">
            <div
              id="w-node-_712c206d-f420-08ca-a2af-4b05406a0873-5fe902a0"
              className="pc-window_top-bar-lines-wrapper"
            >
              <div className="pc-window_top-bar-horizontal-line"></div>
              <div className="pc-window_top-bar-horizontal-line"></div>
              <div className="pc-window_top-bar-horizontal-line"></div>
              <div classNames="pc-window_top-bar-horizontal-line"></div>
              <div className="pc-window_top-bar-horizontal-line"></div>
            </div>
            <div
              id="w-node-_712c206d-f420-08ca-a2af-4b05406a0879-5fe902a0"
              className="pc-window_top-bar-square"
            ></div>
            <div
              id="w-node-_712c206d-f420-08ca-a2af-4b05406a087a-5fe902a0"
              className="pc-window_top-bar-lines-wrapper"
            >
              <div className="pc-window_top-bar-horizontal-line"></div>
              <div className="pc-window_top-bar-horizontal-line"></div>
              <div className="pc-window_top-bar-horizontal-line"></div>
              <div className="pc-window_top-bar-horizontal-line"></div>
            </div>
            <div
              id="w-node-_423c0a09-2ab8-fed4-8e73-d86b76be509e-5fe902a0"
              className="pc-window_top-bar-text"
              style={{ color: "black" }}
            >
              OPEN SOURCE OPEN MIND
            </div>
            <div
              id="w-node-_33815bc8-3278-cde7-feee-00d339ed310a-5fe902a0"
              className="pc-window_top-bar-lines-wrapper"
            >
              <div className="pc-window_top-bar-horizontal-line"></div>
              <div className="pc-window_top-bar-horizontal-line"></div>
              <div className="pc-window_top-bar-horizontal-line"></div>
              <div className="pc-window_top-bar-horizontal-line"></div>
              <div className="pc-window_top-bar-horizontal-line"></div>
            </div>
            <div
              id="w-node-_712c206d-f420-08ca-a2af-4b05406a0880-5fe902a0"
              className="pc-window_top-bar-square"
            >
              <img
                src="https://uploads-ssl.webflow.com/62781264fb6e62279063d828/62781264fb6e6242f363d868_Cross%20Icon.svg"
                loading="eager"
                alt=""
                className="pc-window_top-bar-cross-icon"
              />
            </div>
          </div>
          <div className="pc-window_inner-countdown">
            <Image src={landingImage} />
            <div className="spacer _1em"></div>
            <div className="inner-countdown-intro-text">
              GROWTH STRATEGY &amp;
              <br />
              BUSINESS DEVELOPMENT For
            </div>
            <div className="inner-countdown_typed-text-wrapper">
              <div
                data-w-id="f9b9187f-cb55-3cbb-463c-e0f043edf02f"
                style={{ opacity: "0.76187", willChange: "opacity" }}
                className="typed-text-cursor"
              >
                <div className="spacer_4em"></div>
              </div>
              <div
                id="typed-text"
                style={{ marginTop: "5rem", fontSize: "30px", color: "red" }}
                className="typed-text"
              >
                MENU
              </div>
            </div>
            <div className="spacer grow is-home"></div>
            <div
              className="inner-countdown_countdown-wrapper"
              style={{ marginTop: "1rem" }}
            >
              <Link href={"/MainBlogPage"}>BLOG</Link>
              <div
                className="spacer_1em "
                style={{ marginTop: "1rem", color: "white !important" }}
              ></div>
              <Link
                id="js-clock-hours"
                href={"/aboutme"}
                className="countdown-text"
              >
                WHOAMI
              </Link>
              <div className="countdown-text"></div>
            </div>

            <div className="spacer _4em"></div>
          </div>
        </div>
        <div className="pc-window_double-lines-bar"></div>
        <div className="pc-window_bottom-bar">
          <div className="bottom-bar-texture"></div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
