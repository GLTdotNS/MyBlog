import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import Link from "next/link"
import { motion, AnimatePresence, useViewportScroll } from 'framer-motion';
import { SiFacebook, SiGithub, SiGmail } from 'react-icons/si';



const Navbar = () => {



  const { scrollY } = useViewportScroll();

  const [hidden, setHidden] = useState(false);


  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }

  useEffect(() => {
    return scrollY.onChange(() => update());
  });


  const variants = {
    visible: { opacity: 1, y: 0, backgroundColor: "#0d1117", },
    hidden: { opacity: 0, y: -25 }
  };

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

    <motion.nav
      id='navbar'
      className="app__navbar"
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
    >

      <div className="app__navbar-logo ">
        <Link href="/">
          <a style={{ fontSize: "20px" }}>Tonkoff</a>
        </Link>
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
          <Link href="/projects">
            <a>Projets</a>
          </Link>
        </li>

      </ul>


      <div id='1' className="app__navbar-smallscreen">

        <GiHamburgerMenu color="#fff" cursor={"pointer"}
          fontSize={27} onClick={() => setToggleMenu(true)} />
        <AnimatePresence>

          {toggleMenu && (

            <motion.div className="app__navbar-smallscreen_overlay"

              transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
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
                  onClick={() => setToggleMenu(false)}>

                  <Link href="/">Blog</Link>
                </motion.li>

                <motion.li
                  variants={itemVariants} className="p__opensans"
                  onClick={() => setToggleMenu(false)}>

                  <Link href="/aboutme">About me</Link>
                </motion.li>

                <motion.li
                  variants={itemVariants} className="p__opensans"
                  onClick={() => setToggleMenu(false)}>

                  <Link href="/projects">Projects</Link>
                </motion.li>


              </motion.ul>

              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}>
                <hr />
                <div className="app__navbar-logo nav-social">
                  <Link href="/">
                    <motion.p variants={itemVariants} onClick={() => setToggleMenu(false)}
                      style={{ fontSize: "50px" }}>Tonkoff
                    </motion.p>
                  </Link>
                </div>

                <div className="nav-social">
                  <motion.a variants={itemVariants} href="https://www.facebook.com/" className="facebook"><SiFacebook id='footer_facebook' /></motion.a>
                  <motion.a variants={itemVariants} href="https://github.com/GLTdotNS" className="github"><SiGithub id='footer_github' /></motion.a>
                  <motion.a variants={itemVariants} href="mailto:georgitonkow@gmail.com" className="google"><SiGmail /></motion.a>
                </div>
              </motion.div>
            </motion.div>


          )}

        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar;
