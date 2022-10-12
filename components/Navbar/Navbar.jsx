import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { SiGmail, SiFacebook, SiGithub } from "react-icons/si";
import { RiMenuUnfoldFill, RiMenuFoldFill } from "react-icons/ri";
import code from "../../styles/assets/code.jpg";
import Image from "next/image";
const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const update = () => {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 1 && scrollY?.current > scrollY?.prev) {
      if (toggleMenu) {
        return;
      }
      setHidden(true);
    }
  };

  useEffect(() => {
    return scrollY.onChange(() => update());
  });

  const variants = {
    visible: { opacity: 1, y: 0, backgroundColor: "#282828" },
    hidden: { opacity: 0, y: -25 },
  };

  return (
    <motion.nav
      id="navbar"
      className="app__navbar"
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
    >
      {!toggleMenu ? (
        <RiMenuUnfoldFill
          color="#fff"
          cursor={"pointer"}
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
      ) : (
        <RiMenuFoldFill
          fontSize={27}
          className="overlay__close"
          onClick={() => setToggleMenu(false)}
        />
      )}

      <Link href="/">
        <div className="app__navbar-logo " onClick={() => setToggleMenu(false)}>
          <Image
            src={code}
            width={40}
            height={40}
            style={{ borderRadius: "50px" }}
          />
        </div>
      </Link>

      <div className="app__navbar-smallscreen">
        <AnimatePresence>
          {toggleMenu && (
            <div className="app__navbar-overylay_background">
              <motion.div
                className="app__navbar-smallscreen_overlay"
                animate={{
                  width: "285px",
                }}
              >
                <ul className="app__navbar-smallscreen_links">
                  <li
                    className="p__opensans"
                    onClick={() => setToggleMenu(false)}
                  >
                    <Link href="/">Writing...</Link>
                  </li>

                  <li
                    className="p__opensans"
                    onClick={() => setToggleMenu(false)}
                  >
                    <Link href="/aboutme">whoAmI</Link>
                  </li>
                </ul>

                <hr />
              </motion.div>
              <div className="icon-bar" onClick={() => setToggleMenu(false)}>
                <a href="https://github.com/GLTdotNS" className="github">
                  <SiGithub />
                </a>
                <Link href="/aboutme#contact">
                  <a className="google">
                    <SiGmail />
                  </a>
                </Link>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
