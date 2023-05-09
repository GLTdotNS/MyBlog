import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { RiMenuUnfoldFill, RiCloseCircleLine } from "react-icons/ri";
import { CgMenuLeftAlt } from "react-icons/cg";
import { useRouter } from "next/router";
import logo from "../../styles/assets/niffleheim.png";
const Navbar = ({ category, posts }) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showMenu, setshowMenu] = useState(false);
  const [valueToSearch, setValueToSearch] = useState("");
  const [text, setText] = useState(false);
  const [click, setClick] = useState(false);
  const router = useRouter();
  const handleClick = () => {
    setClick(!click);
    var element = document.getElementById("nav-icon3");
    element.classList.toggle("open");
  };
  const handleSearch = (e) => {
    e.preventDefault();

    if (valueToSearch) {
      router.push(`/search/${valueToSearch}`);
    }
  };

  setTimeout(() => {
    if (toggleMenu) {
      setshowMenu(true);
    } else {
      setshowMenu(false);
    }
  });

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      backgroundColor: "transparent",
    },
    hidden: {
      backgroundColor: "black",
    },
  };

  return (
    <>
      <div
        style={{
          height: "50vh",
          backgroundImage: ` linear-gradient(
            rgba(0, 0, 0, 0.1), 
            #262626
            ),
            url(${logo.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            position: "absolute",
            top: "35%",
            left: "30px",
            right: "30px",
          }}
          className=" siteLogo"
        >
          NONCREATIVEBLOG
        </h1>{" "}
      </div>
      <form class="search-form" onSubmit={handleSearch}>
        <div class="input-group">
          <div class="input-group2">
            <label>
              <input
                onChange={(e) => setValueToSearch(e.target.value.trim())}
                type="search"
                class="search-field"
                placeholder="Потърси..."
              />
            </label>
            <input
              type="submit"
              class="rstore-domain-search-button search-submit  btn-primary"
              value="Търси  "
            />
          </div>
        </div>
      </form>
      <nav>
        <label
          onClick={handleClick}
          className="hamburger-icon"
          aria-label="Open navigation menu"
          htmlFor="drop"
        >
          <div id="nav-icon3" className="">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </label>

        <input type="checkbox" id="drop" />
        <ul class="menu">
          <li>
            <Link href={"/"}>Blog</Link>
          </li>
          <li>
            <label for="drop-1" class="toggle">
              The gods +
            </label>
            <a href="#">The gods</a>
            <input type="checkbox" id="drop-1" />
            <ul>
              {posts &&
                posts
                  ?.filter((p) => p.category === "TheGods")
                  .map((post, index) => (
                    <li className="" key={post.title}>
                      {!post ? (
                        "Something went wrong..."
                      ) : (
                        <Link
                          href={"/post/asd[slug]"}
                          as={`/post/${post.slug.current}`}
                        >
                          {post.rowTitle}
                        </Link>
                      )}
                    </li>
                  ))}
            </ul>
          </li>
          <li>
            <label for="drop-2" class="toggle">
              Cosmology +
            </label>
            <a href="#"> Cosmology </a>
            <input type="checkbox" id="drop-2" />
            <ul>
              <li>
                <a href="#">YGGDRASIL</a>
              </li>
              <li>
                <a href="#">VALHALLA</a>
              </li>
              <li>
                <a href="#">BIFROST</a>
              </li>
              <li>
                <a href="">HLIÐSKJÁLF</a>
              </li>
              <li>
                <label for="drop-3" class="toggle">
                  Worlds +
                </label>
                <a id="worldsLink" href="#">
                  {" "}
                  Worlds{" "}
                </a>
                <input type="checkbox" id="drop-3" />
                <ul id="worlds">
                  <li>
                    <a href="#">Asgard</a>
                  </li>
                  <li>
                    <a href="#">Álfheim</a>
                  </li>
                  <li>
                    <a href="#">Niðavellir</a>
                  </li>
                  <li>
                    <a href="#">Jötunheimr</a>
                  </li>
                  <li>
                    <a href="#">Vanaheim</a>
                  </li>{" "}
                  <li>
                    <a href="#">Niflheim</a>
                  </li>{" "}
                  <li>
                    <a href="#">Muspelheim</a>
                  </li>{" "}
                  <li>
                    <a href="#">Hel</a>
                  </li>{" "}
                </ul>
              </li>
              <li>
                <a href="">GINNUNGAGAP</a>
              </li>
              <li>
                <a href="">FOLKVANG</a>
              </li>
            </ul>
          </li>

          <li>
            <Link href={"/message"}>Contacts</Link>
          </li>
          <li>
            <Link href={"/comingsoon"}>About</Link>
          </li>
          <li>
            <Link href={"/comingsoon"}>Store</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
