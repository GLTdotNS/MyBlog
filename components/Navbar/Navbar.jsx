import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { RiMenuUnfoldFill, RiCloseCircleLine } from "react-icons/ri";
import { CgMenuLeftAlt } from "react-icons/cg";
import { useRouter } from "next/router";
const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showMenu, setshowMenu] = useState(false);
  const [valueToSearch, setValueToSearch] = useState("");
  const [text, setText] = useState(false);
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();

    if (valueToSearch) {
      router.push(`/search/${valueToSearch}`);
    }
  };
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
      backgroundColor: "#333",
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
        <div className="ovarlay_open">
          <CgMenuLeftAlt
            fillOpacity={0.8}
            color="blue"
            cursor={"pointer"}
            className=""
            fontSize={40}
            onClick={() => setToggleMenu(true)}
          />
        </div>
      ) : (
        <RiCloseCircleLine
          style={{ transition: 5 }}
          fontSize={40}
          className="overlay__close slide"
          onClick={() => setToggleMenu(false)}
          color={"#fff"}
        />
      )}{" "}
      <form onSubmit={handleSearch} className="box ">
        <div className="search ">
          <input
            onFocus={() => setText("asd")}
            onMouseLeave={() =>
              setText(String.fromCharCode(parseInt(16, `U+1F50D`)))
            }
            onChange={(e) => setValueToSearch(e.target.value.trim())}
            className="input"
            placeholder="&#128269;"
            autoComplete="off"
          />
        </div>
      </form>
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
                  backgroundColor: "#333",
                  height: "54px",
                  padding: "1%",
                }}
              ></div>

              {showMenu ? (
                <ul className={`app__navbar-smallscreen_links  slide`}>
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
