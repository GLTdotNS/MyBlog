import React from 'react';
import { SiGmail, SiFacebook, SiGithub } from "react-icons/si"
import { BsHeartFill } from 'react-icons/bs'
import { FaReact } from "react-icons/fa"

const Footer = () => {



  return (
    <div className='footer_div'>
      <footer>
        <hr />

        <div className="row primary">
          <div className="column about">
            <h3>Georgi Tonkov</h3>
            <ul>
              <li>
                <p>
                  A Bad Day On The Mountain Bike Always Beats A Good Day In The Office
                </p>
              </li>
            </ul>


          </div>

          <div className="column links">
            <h3>Privacy and Policy</h3>

            <ul>

              <li>
                <a id='open_source' >Open source system <SiGithub size={10} /></a>
              </li>
              <li>
                <a href="mailto:georgitonkow@gmail.com">Report bug</a>
              </li>
            </ul>

          </div>

          <div className='column '>
            <h3>Made with <BsHeartFill size={20} color={"red"} /></h3>
            <ul>

              <h3> Courtesy of <FaReact size={20} color={"blue"} /> and </h3>
              <a href='https://www.sanity.io/' id="sanity">Sanity.io</a>



            </ul>
          </div>
          <div className="social">
            <a href='https://www.facebook.com/canis.lupus.33/' className="facebook"><SiFacebook id='footer_facebook' /></a>
            <a href='https://github.com/GLTdotNS' className="github"><SiGithub id='footer_github' /></a>
            <a href="mailto:georgitonkow@gmail.com" className="google"><SiGmail /></a>
          </div>

        </div>

        <div className="row copyright">
          <p>Copyright &copy; 2022 Tonkoff</p>

        </div>
      </footer>
    </div>
  )
}

export default Footer
