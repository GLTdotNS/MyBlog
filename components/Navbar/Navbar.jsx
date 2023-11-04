import React, { useState } from "react";
import Link from "next/link";

import { useRouter } from "next/router";
import logo from "../../styles/assets/background.jpg";
import { Rubik_Distressed } from "next/font/google";
import RingCanvas from "../canvas/animated";
const rubik = Rubik_Distressed({
  weight: "400",
  subsets: ["cyrillic"],
});
const Navbar = ({ category, posts }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showMenu, setshowMenu] = useState(false);
  const [valueToSearch, setValueToSearch] = useState("");

  const [click, setClick] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setClick(!click);
    const element = document.getElementById("burger");
    element.classList.toggle("is-active");
    const el = document.getElementById("main-container");
  };
  const handleSearch = (e) => {
    e.preventDefault();

    if (valueToSearch) {
      router.push(`/search/${valueToSearch} `, undefined, { shallow: false });
    }
  };

  setTimeout(() => {
    if (toggleMenu) {
      setshowMenu(true);
    } else {
      setshowMenu(false);
    }
  });

  return (
    <>
      <div
        className="bg"
        style={{
          height: "70vh",
          width: "100%",
          backgroundSize: "cover",
          backgroundAttachment: "",
          margin: "auto",
          backgroundImage: ` linear-gradient(
            
            rgba(0, 0, 0, 0.1), 
            #262626
            ),
            url(${logo.src})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            position: "absolute",
            top: "155px",
            left: "30px",
            right: "30px",
            color: "#262626",
          }}
          className=" siteLogo"
        >
          NONCREATIVEBLOG
        </h1>{" "}
        {/* <RingCanvas /> */}
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
          <div class="burger" id="burger">
            <span class="burger-line"></span>
            <span class="burger-line"></span>
            <span class="burger-line"></span>
          </div>
        </label>

        <input type="checkbox" id="drop" />
        <ul class={`menu ${rubik.className}`}>
          <li>
            <Link href={"/"}>Блог</Link>
          </li>
          <li id="firstDrop">
            <label for="drop-1" class="toggle">
              Богове & създания +{" "}
            </label>
            <a href="#">Богове & създания</a>
            <input type="checkbox" id="drop-1" />
            <ul>
              {posts &&
                posts
                  ?.filter((p) => p.category === "TheGods")
                  .slice(0, 6)
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
              <li>
                <Link
                  style={{
                    fontFamily: "-moz-initial",
                    fontSize: "15px",
                    color: "#4ba6e7",
                  }}
                  href={"/gods"}
                >
                  {" "}
                  Виж всички
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <label for="drop-2" class="toggle">
              Космология +
            </label>
            <a href="#"> Космология </a>
            <input type="checkbox" id="drop-2" />
            <ul>
              {posts &&
                posts
                  ?.filter((p) => p.category === "Cosmology")
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

              {/* <li>
                <a href="#">VALHALLA</a>
              </li>
              <li>
                <a href="#">BIFROST</a>
              </li>
              <li>
                <a href="">HLIÐSKJÁLF</a>
              </li> */}
              <li>
                <label for="drop-3" class="toggle">
                  Световете +
                </label>
                <a id="worldsLink" href="#">
                  {" "}
                  Светове{" "}
                </a>
                <input type="checkbox" id="drop-3" />
                <ul id="worlds">
                  {posts &&
                    posts
                      ?.filter((p) => p.category === "Worlds")
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
              {/* <li>
                <a href="">GINNUNGAGAP</a>
              </li>
              <li>
                <a href="">FOLKVANG</a>
              </li> */}
            </ul>
          </li>
          {/* <li>
            <label for="drop-3" class="toggle">
              Völuspá +
            </label>
            <a href="#">Völuspá</a>
            <input type="checkbox" id="drop-1" />
            <ul>
              {posts &&
                posts
                  ?.filter((p) => p.category === "Voluspa")
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
          </li> */}
          {/* <li>
            <Link href={"/recipes"}>Рецепти</Link>
          </li> */}
          <li>
            <Link href={"/runes"}>Руни</Link>
          </li>
          <li>
            {/* <Link href={"https://voluspa.noncreativeblog.net/voluspa"}>
              Völuspá
            </Link> */}
          </li>
          {/* <li>
            <Link href={"/movies/1"}>Филми</Link>
          </li> */}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
