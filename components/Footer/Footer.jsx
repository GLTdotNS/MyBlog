import React from "react";
import { SiGmail, SiFacebook, SiGithub } from "react-icons/si";
import { BsHeartFill } from "react-icons/bs";
import { SiNextdotjs } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <div class="footer">
        <div class="footerRow">
          {" "}
          <a href="https://github.com/GLTdotNS" className="github">
            <SiGithub id="footer_github" />
          </a>
        </div>

        <h3>
          Made with <BsHeartFill size={20} color={"red"} />
        </h3>
        <ul>
          <h3>
            {" "}
            Courtesy of <SiNextdotjs size={20} color={"white"} /> and{" "}
          </h3>
          <a href="https://www.sanity.io/" id="sanity">
            Sanity.io
          </a>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
