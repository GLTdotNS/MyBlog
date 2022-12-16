import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { RiMenuUnfoldFill, RiMenuFoldFill } from "react-icons/ri";
import code from "../../styles/assets/code.jpg";
import Image from "next/image";
const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showMenu, setshowMenu] = useState(false);
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
  setTimeout(() => {
    if (toggleMenu) {
      setshowMenu(true);
    } else {
      setshowMenu(false);
    }
  }, 190);
  useEffect(() => {
    return scrollY.onChange(() => update());
  });

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      backgroundColor: "#121212",
    },
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
          className=""
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
      ) : (
        <RiMenuFoldFill
          fontSize={27}
          className="overlay__close slideMenu"
          onClick={() => setToggleMenu(false)}
          color={"#fff"}
        />
      )}

      <div className="app__navbar-logo ">
        <Link href="/">
          <Image
            onClick={() => setToggleMenu(false)}
            alt="logo"
            src={code}
            width={40}
            height={40}
            style={{ borderRadius: "50px" }}
          />
        </Link>
      </div>

      <AnimatePresence>
        {toggleMenu && (
          //app__navbar-overylay_background
          <div className="">
            <motion.div
              className="app__navbar-smallscreen_overlay slideMenu "
              animate={{
                width: "285px",
              }}
              exit={{
                width: "-285px",
                transition: "5s ease-in-out",
              }}
            >
              <div style={{ backgroundColor: "#f9b22a", height: "54px" }}>
                {" "}
              </div>
              {showMenu ? (
                <ul
                  className={`app__navbar-smallscreen_links slideMenu ${
                    setshowMenu ? "slideOut" : "slideOut"
                  }`}
                >
                  <li
                    className="p__opensans "
                    onClick={() => setToggleMenu(false)}
                  >
                    <Link href="/">Index.JS</Link>
                  </li>
                  <li
                    className="p__opensans"
                    onClick={() => setToggleMenu(false)}
                  >
                    <Link href="/blog">Writing...</Link>
                  </li>

                  <li
                    className="p__opensans"
                    onClick={() => setToggleMenu(false)}
                  >
                    <Link href="/aboutme">whoAmI</Link>
                  </li>
                </ul>
              ) : (
                ""
              )}

              <hr />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
