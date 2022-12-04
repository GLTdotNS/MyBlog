import Link from "next/link";
import React, { useEffect } from "react";
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
          <div className="pc-window_top-bar">
            <div
              id="w-node-_712c206d-f420-08ca-a2af-4b05406a0873-5fe902a0"
              className="pc-window_top-bar-lines-wrapper"
            >
              <div className="pc-window_top-bar-horizontal-line"></div>
              <div className="pc-window_top-bar-horizontal-line"></div>
              <div className="pc-window_top-bar-horizontal-line"></div>
              <div className="pc-window_top-bar-horizontal-line"></div>
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
              style={{ color: "black", textTransform: "uppercase" }}
            >
              Gravé dans la roche
            </div>
            <div
              id="w-node-_33815bc8-3278-cde7-feee-00d339ed310a-5fe902a0"
              class="pc-window_top-bar-lines-wrapper"
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
            <div className="spacer _1em" style={{ marginTop: "10%" }}></div>
            <div id="demo" className="inner-countdown-intro-text typewriter">
              <h4>Open source</h4>

              <br />
              <h3>Open Mind</h3>
            </div>
            <div className="inner-countdown_typed-text-wrapper">
              <div
                style={{
                  marginTop: "5rem",
                  fontSize: "30px",
                  fontWeight: 500,
                  color: "wheat",
                }}
              >
                MENU
              </div>
            </div>
            <div className="spacer grow is-home"></div>
            <div
              className="inner-countdown_countdown-wrapper"
              style={{ marginTop: "1rem" }}
            >
              <Link href={"/blog"}>
                <p className="landing-page-link">BLOG</p>
              </Link>
              <div
                className="spacer_1em "
                style={{ marginTop: "1rem", color: "white !important" }}
              ></div>
              <Link id="js-clock-hours" href={"/aboutme"}>
                <p className="landing-page-link">WHOAMI</p>
              </Link>
              <div className="countdown-text"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
