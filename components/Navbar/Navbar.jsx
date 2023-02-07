import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { RiMenuUnfoldFill, RiMenuFoldFill } from "react-icons/ri";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showMenu, setshowMenu] = useState(false);
  const [location, setLocation] = useState("");

  const update = () => {
    const image = document.getElementById("blurBackground");
    if (scrollY?.current == 0) {
      setHidden(false);

      image.classList.remove("blurBackground");
    } else {
      if (toggleMenu) {
        return;
      }
      image?.classList.add("blurBackground");
      setHidden(true);
    }
  };
  setTimeout(() => {
    if (toggleMenu) {
      setshowMenu(true);
    } else {
      setshowMenu(false);
    }
  });
  useEffect(() => {
    return scrollY.onChange(() => update());
  });

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      backgroundColor: "transparent",
    },
    hidden: {
      backgroundColor: "#000324",
    },
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
        <div className="">
          <RiMenuUnfoldFill
            fillOpacity={0.8}
            color="#FFF"
            cursor={"pointer"}
            className=""
            fontSize={40}
            onClick={() => setToggleMenu(true)}
          />
        </div>
      ) : (
        <RiMenuFoldFill
          style={{ transition: 5 }}
          fontSize={40}
          className="overlay__close slide"
          onClick={() => setToggleMenu(false)}
          color={"#fff"}
        />
      )}

      {/* <div className="app__navbar-logo ">
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
      </div> */}

      <AnimatePresence>
        {toggleMenu && (
          <div
            className="app__navbar-overylay_background"
            onClick={() => setToggleMenu(false)}
          >
            <motion.div
              className="app__navbar-smallscreen_overlay slide  "
              animate={{
                width: "360px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#f9b22a",
                  height: "54px",
                  padding: "1%",
                }}
              ></div>

              {showMenu ? (
                <ul className={`app__navbar-smallscreen_links  slideMenu`}>
                  <li
                    className="p__opensans "
                    onClick={() => setToggleMenu(false)}
                  >
                    <Link href="/">Index.JS</Link>
                  </li>
                  <li
                    className="p__opensans "
                    onClick={() => setToggleMenu(false)}
                  >
                    <Link href="/blog">Writing...</Link>
                  </li>

                  {/* <li
                    className="p__opensans"
                    onClick={() => setToggleMenu(false)}
                  >
                    <Link href="/aboutme">whoAmI</Link>
                  </li> */}
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
