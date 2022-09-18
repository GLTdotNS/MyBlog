

import {SiGmail , SiFacebook , SiGithub} from "react-icons/si"
import Link from "next/link"
const StickySocialMediaBar = () => {
  return (
    <div className="icon-bar">
    <a href="https://www.facebook.com/canis.lupus.33/" className="facebook"><SiFacebook /></a> 
    <a href="https://github.com/GLTdotNS" className="github"><SiGithub/></a> 
    <Link href="/aboutme#contact" >
    <a  className="google"><SiGmail/></a> 
    </Link>
  </div>
  )
}

export default StickySocialMediaBar
