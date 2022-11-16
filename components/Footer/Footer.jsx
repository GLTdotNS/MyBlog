import React from "react";
import { SiGmail, SiFacebook, SiGithub } from "react-icons/si";
import { BsHeartFill } from "react-icons/bs";
import { SiNextdotjs } from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer_div">
      <div>
        <footer>
          <hr />

          <div className="row primary">
            <div className="column about">
              <h3>Georgi Tonkov</h3>
              <ul>
                <li>A Bad Day On The Mountain</li>
                <li>Bike Always Beats A Good Day In The Office</li>
              </ul>
            </div>

            <div className="column ">
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
            <div className="social">
              <a href="https://github.com/GLTdotNS" className="github">
                <SiGithub id="footer_github" />
              </a>
              <a href="mailto:georgitonkow@gmail.com" className="google">
                <SiGmail />
              </a>
            </div>
          </div>

          <div className="row copyright">
            <p id="open_source">
              <a href="https://github.com/GLTdotNS/nextjs" className="links">
                Open source system
              </a>{" "}
              <SiGithub size={10} />
            </p>
            <p>Copyright &copy; 2022 Tonkoff</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
