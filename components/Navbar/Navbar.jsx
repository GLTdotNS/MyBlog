import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import Link from "next/link"
import { scrollFunction } from '../../animations/navBarAnimation';
import { motion, AnimatePresence } from 'framer-motion';
import { SiFacebook, SiGithub, SiGmail } from 'react-icons/si';



const Navbar = () => {



  useEffect(() => {
    const body = document.querySelector("body");

    body.onscroll = () => {
      scrollFunction();
    }
  }, [])
  const itemVariants = {
    closed: {
      opacity: 0
    },
    open: { opacity: 1 }
  };
  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0,
        staggerDirection: -1,

      }
    },
    open: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: 1,

      }
    }
  };



  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav id='navbar' className="app__navbar">
      <div className="app__navbar-logo ">
        <a style={{ fontSize: "20px" }}>Tonkoff</a>
      </div>
      <ul className="app__navbar-links">

        <li className="p__opensans">
          <Link href="/">
            <a>Blog</a>
          </Link>
        </li>
        <li className="p__opensans">
          <Link href="/aboutme">
            <a>About me</a>
          </Link>
        </li>
        <li className="p__opensans">
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>

      </ul>


      <div id='1' className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" cursor={"pointer"}
          fontSize={27} onClick={() => setToggleMenu(true)} />
        <AnimatePresence>

          {toggleMenu && (

            <motion.div className="app__navbar-smallscreen_overlay"

              animate={{
                width: "100%",
                transition: { duration: 0.2 }
              }}
              exit={{
                width: 0,
                transition: { delay: 0.1, duration: 0.3 }
              }}
            >
              <AiOutlineClose fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
              <motion.ul className="app__navbar-smallscreen_links"

                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}
              >

                <motion.li

                  variants={itemVariants}
                  className="p__opensans"
                  onClick={() => setToggleMenu(false)}><Link href="/blog">Blog</Link></motion.li>

                <motion.li

                  variants={itemVariants} className="p__opensans"
                  onClick={() => setToggleMenu(false)}><Link href="/aboutme">About me</Link></motion.li>
                <motion.li

                  variants={itemVariants} className="p__opensans"
                  onClick={() => setToggleMenu(false)}><Link href="/projects">Projects</Link></motion.li>


              </motion.ul>

              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}>
                <hr />
                <div className="app__navbar-logo nav-social">
                  <motion.p variants={itemVariants} style={{ fontSize: "50px" }}>Tonkoff</motion.p>
                </div>

                <div className="nav-social">
                  <motion.a variants={itemVariants} href="#dragan" className="facebook"><SiFacebook id='footer_facebook' /></motion.a>
                  <motion.a variants={itemVariants} href="#petkan" className="github"><SiGithub id='footer_github' /></motion.a>
                  <motion.a variants={itemVariants} href="mailto:georgitonkow@gmail.com" className="google"><SiGmail /></motion.a>
                </div>
              </motion.div>
            </motion.div>


          )}

        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar;
