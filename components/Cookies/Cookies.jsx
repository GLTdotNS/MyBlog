import React, { useState } from "react";

const Cookies = () => {
  const [cookie, setCookie] = useState(false);
  return (
    <div
      data-nosnippet=""
      className="jetbrains-cookies-banner jetbrains-cookies-banner--position-right"
    >
      <div className="jetbrains-cookies-banner__body">
        <div className="jetbrains-cookies-banner__paragraph">
          Cookies and IP addresses allow us to deliver and improve our web
          content and to provide you with a personalized experience. Our website
          uses cookies and collects your IP address for these purposes.{" "}
        </div>

        <div className="jetbrains-cookies-banner__paragraph">
          <div className="jetbrains-cookies-banner__pre">
            <div className="jetbrains-cookies-banner__pre-inner">
              {" "}
              JetBrains may use cookies and my IP address to
              <br /> collect individual statistics and to provide me with
              <br /> personalized offers and ads subject to the{" "}
              <a
                className="jetbrains-cookies-banner__link"
                href="https://www.jetbrains.com/company/privacy.html"
              >
                Privacy
                <br /> Policy
              </a>{" "}
              and the{" "}
              <a
                className="jetbrains-cookies-banner__link"
                href="https://www.jetbrains.com/company/useterms.html"
              >
                Terms of Use
              </a>
              . JetBrains may use
              <br />
              <a
                className="jetbrains-cookies-banner__link"
                href="https://www.jetbrains.com/company/privacy.html"
              >
                third-party services
              </a>{" "}
              for this purpose. I can revoke
              <br /> my consent at any time by visiting the{" "}
              <a
                className="jetbrains-cookies-banner__link"
                href="https://www.jetbrains.com/opt-out/"
              >
                Opt-Out page
              </a>
              .<br />
              <br />
              <div className="jetbrains-cookies-banner__buttons ">
                <a
                  className="jetbrains-cookies-banner__choice-link"
                  data-choice="yes"
                >
                  [<b>Y</b>]es, I agree
                </a>
                <a
                  className="jetbrains-cookies-banner__choice-link"
                  data-choice="no"
                >
                  [<b>N</b>]o, thanks
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="jquery-console-inner jquery-console-nofocus">
          <div className="jquery-console-prompt-box">
            <span className="jquery-console-prompt-label">~&nbsp;root# </span>
            <span className="jquery-console-prompt">
              <span className="jquery-console-cursor">&nbsp;</span>
            </span>
          </div>
        </div>
      </div>
      <div className="jetbrains-cookies-banner__close-button">[X]</div>
    </div>
  );
};

export default Cookies;
