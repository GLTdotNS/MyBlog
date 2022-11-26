import React, { useEffect, useState } from "react";
import game from "../../styles/assets/Screenshot (2).png";
import blog from "../../styles/assets/blog.png";
import { animation } from "../../animations/animation";
import Image from "next/image";
import { useRouter } from "next/router";

const ProjectsComponent = () => {
  useEffect(() => {
    document.title = "Проекти...";
    window.scrollTo(0, 0);
  }, []);
  const [showBtn, setShowBtn] = useState(true);
  const [showGameBtn, setShowGameBtn] = useState(true);
  const router = useRouter();
  return (
    <div className="project-container marquee">
      <h2>Portfolio</h2>

      <div className="leftcolumn"></div>
      <h2></h2>

      <div className="project-row">
        <div className="project-column forMarquee">
          <div className="project-content">
            <h3>
              <p>E-commerce site</p>
            </h3>
            <hr />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
              distinctio necessitatibus laboriosam doloribus cupiditate
              exercitationem minima numquam eligendi quod voluptates nihil id
              assumenda molestias deserunt aperiam repudiandae, veritatis
              explicabo eveniet.
            </p>

            <div className="btn-container">
              <button
                className="btn"
                onClick={() =>
                  window.open("https://mtb-world-shop.vercel.app/")
                }
              >
                Demo
              </button>
              <button
                className="btn"
                onClick={() =>
                  window.open("https://github.com/GLTdotNS/mtb-world-shop")
                }
              >
                Code
              </button>
            </div>
          </div>
        </div>

        <div className="project-column forMarquee">
          <div className="project-content">
            <Image src={game} />
            <h3>
              <p>Gaming Blog</p>
            </h3>
            <hr />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
              distinctio necessitatibus laboriosam doloribus cupiditate
              exercitationem minima numquam eligendi quod voluptates nihil id
              assumenda molestias deserunt aperiam repudiandae, veritatis
              explicabo eveniet.
            </p>

            <div className="btn-container">
              {showGameBtn ? (
                <button
                  className="btn"
                  onMouseEnter={() => setShowGameBtn(false)}
                  onClick={() => router.push("/sorry")}
                >
                  Demo
                </button>
              ) : (
                <button
                  className="btn"
                  style={{ marginRight: "60%" }}
                  onMouseEnter={() => setShowGameBtn(true)}
                  onClick={() => router.push("/sorry")}
                >
                  Demo
                </button>
              )}
              {!showGameBtn ? (
                <button
                  onMouseEnter={() => setShowGameBtn(true)}
                  onClick={() => router.push("/sorry")}
                  className="btn"
                >
                  Code
                </button>
              ) : (
                <button
                  onMouseEnter={() => setShowGameBtn(false)}
                  onClick={() => router.push("/sorry")}
                  className="btn"
                >
                  Code
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="project-column forMarquee">
          <div className="project-content">
            <Image src={blog} />
            <h3>
              <p>My Blog</p>
            </h3>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              magni hic minus doloribus iste a doloremque, minima iure unde
              officia obcaecati illum enim cumque dolor, recusandae deserunt
              praesentium officiis. Dolorem.
            </p>

            <div className="btn-container">
              <button
                className="btn"
                onClick={() => window.open("https://glt-blog.vercel.app/")}
              >
                Demo
              </button>
              <button
                className="btn"
                onClick={() =>
                  window.open("https://github.com/GLTdotNS/MyBlog")
                }
              >
                Code
              </button>
            </div>
          </div>
        </div>

        <div className="project-column forMarquee">
          <div className="project-content">
            <Image src={blog} />
            <h3>
              <p>Restaurant site</p>
            </h3>
            <hr />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
              repellat doloremque beatae facere enim quod cum, magnam inventore.
              Aperiam expedita repudiandae earum enim amet delectus temporibus
              dolorem, optio error nihil.
            </p>

            <div className="btn-container">
              {showBtn ? (
                <button
                  className="btn"
                  onMouseEnter={() => setShowBtn(false)}
                  onClick={() => router.push("/sorry")}
                >
                  Demo
                </button>
              ) : (
                <button
                  className="btn"
                  style={{ marginRight: "50%" }}
                  onMouseEnter={() => setShowBtn(true)}
                  onClick={() => router.push("/sorry")}
                >
                  Demo
                </button>
              )}
              {!showBtn ? (
                <button
                  onMouseEnter={() => setShowBtn(true)}
                  className="btn"
                  onClick={() => router.push("/sorry")}
                >
                  Code
                </button>
              ) : (
                <button
                  onMouseEnter={() => setShowBtn(false)}
                  className="btn"
                  onClick={() => router.push("/sorry")}
                >
                  Code
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsComponent;
