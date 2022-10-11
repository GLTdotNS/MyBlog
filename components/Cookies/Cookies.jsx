import React, { useState } from "react";

const Cookies = () => {
  const [cookie, setCookie] = useState(false);
  return (
    <div
      data-nosnippet=""
      class="jetbrains-cookies-banner jetbrains-cookies-banner--position-right"
    >
      <div class="jetbrains-cookies-banner__body">
        <div class="jetbrains-cookies-banner__paragraph">
          Cookies and IP addresses allow us to deliver and improve our web
          content and to provide you with a personalized experience. Our website
          uses cookies and collects your IP address for these purposes.{" "}
        </div>

        <div class="jetbrains-cookies-banner__paragraph">
          <div class="jetbrains-cookies-banner__pre">
            <div class="jetbrains-cookies-banner__pre-inner">
              {" "}
              JetBrains may use cookies and my IP address to
              <br /> collect individual statistics and to provide me with
              <br /> personalized offers and ads subject to the{" "}
              <a
                class="jetbrains-cookies-banner__link"
                href="https://www.jetbrains.com/company/privacy.html"
              >
                Privacy
                <br /> Policy
              </a>{" "}
              and the{" "}
              <a
                class="jetbrains-cookies-banner__link"
                href="https://www.jetbrains.com/company/useterms.html"
              >
                Terms of Use
              </a>
              . JetBrains may use
              <br />
              <a
                class="jetbrains-cookies-banner__link"
                href="https://www.jetbrains.com/company/privacy.html"
              >
                third-party services
              </a>{" "}
              for this purpose. I can revoke
              <br /> my consent at any time by visiting the{" "}
              <a
                class="jetbrains-cookies-banner__link"
                href="https://www.jetbrains.com/opt-out/"
              >
                Opt-Out page
              </a>
              .<br />
              <br />
              <div class="jetbrains-cookies-banner__buttons ">
                <a
                  class="jetbrains-cookies-banner__choice-link"
                  data-choice="yes"
                >
                  [<b>Y</b>]es, I agree
                </a>
                <a
                  class="jetbrains-cookies-banner__choice-link"
                  data-choice="no"
                >
                  [<b>N</b>]o, thanks
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="jquery-console-inner jquery-console-nofocus">
          <div class="jquery-console-prompt-box">
            <span class="jquery-console-prompt-label">~&nbsp;root# </span>
            <span class="jquery-console-prompt">
              <span class="jquery-console-cursor">&nbsp;</span>
            </span>
          </div>
        </div>
      </div>
      <div class="jetbrains-cookies-banner__close-button">[X]</div>
    </div>
  );
};

export default Cookies;
