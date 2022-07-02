

import {SiGmail , SiFacebook , SiGithub} from "react-icons/si"

const StickySocialMediaBar = () => {
  return (
    <div className="icon-bar">
    <a href="https://www.facebook.com/canis.lupus.33/" className="facebook"><SiFacebook /></a> 
    <a href="https://github.com/GLTdotNS" className="github"><SiGithub/></a> 
    <a href="mailto:georgitonkow@gmail.com" className="google"><SiGmail/></a> 
  </div>
  )
}

export default StickySocialMediaBar
