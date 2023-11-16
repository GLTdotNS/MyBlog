import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import toast from "react-hot-toast";
import Router from "next/router";
import Layout from "../Layout/Layout";
import Admin from "../Admin/admin";
import Widget from "../Cloudflare/Cloudflare";
const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [sent, setSent] = useState(true);
  const [succes, setSucces] = useState(false);
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (e) => {
    e.preventDefault();
    let data = {
      name,
      email,
      company,
      message,
    };
    setSent(true);

    const toastId = toast.loading();

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Thanks ! :)", {
            position: "top-center",
            style: {
              border: "1px solid #333",
              padding: "5px",
              color: "#713200",
            },
            iconTheme: {
              primary: "wheat",
              secondary: "blue",
            },
          });

          setTimeout(() => {
            e.target.reset();
            setMessage("");
            setSent(true);
            toast.remove(toastId);
            setSucces(true);
            // Router.push("/");
          }, 100);
        }
      })
      .catch((e) => {
        toast.success("Failed , try again ", {
          position: "top-center",
          style: {
            border: "1px solid #333",
            padding: "5px",
            color: "#713200",
          },
          iconTheme: {
            primary: "#713200",
            secondary: "#FFFAEE",
          },
        });
      });
  };
  return (
    <div
      id="1"
      className="       "
      style={{ zIndex: "1000000", padding: "5%" }}
    >
      <div className="" style={{ margin: "0 auto !important" }}>
        <div className="pc-window_component is-home-main">
          <div className="pc-window_top-wrapper">
            <div className="pc-window_top-bar">
              <div
                id="w-node-_712c206d-f420-08ca-a2af-4b05406a0873-5fe902a0"
                className="pc-window_top-bar-lines-wrapper"
              >
                <div className="pc-window_top-bar-horizontal-line"></div>
                <div className="pc-window_top-bar-horizontal-line"></div>
                <div className="pc-window_top-bar-horizontal-line"></div>
                <div className="pc-window_top-bar-horizontal-line"></div>
                <div className="pc-window_top-bar-horizontal-line"></div>
              </div>
              <div
                id="w-node-_712c206d-f420-08ca-a2af-4b05406a0879-5fe902a0"
                className="pc-window_top-bar-square"
              ></div>
              <div
                id="w-node-_712c206d-f420-08ca-a2af-4b05406a087a-5fe902a0"
                className="pc-window_top-bar-lines-wrapper"
              >
                <div className="pc-window_top-bar-horizontal-line"></div>
                <div className="pc-window_top-bar-horizontal-line"></div>
                <div className="pc-window_top-bar-horizontal-line"></div>
                <div className="pc-window_top-bar-horizontal-line"></div>
              </div>
              <div
                id="w-node-_423c0a09-2ab8-fed4-8e73-d86b76be509e-5fe902a0"
                className="pc-window_top-bar-text "
                style={{ color: "black", textTransform: "uppercase" }}
              >
                NONCREATIVEBLOG
              </div>
              <div
                id="w-node-_33815bc8-3278-cde7-feee-00d339ed310a-5fe902a0"
                class="pc-window_top-bar-lines-wrapper"
              >
                <div className="pc-window_top-bar-horizontal-line"></div>
                <div className="pc-window_top-bar-horizontal-line"></div>
                <div className="pc-window_top-bar-horizontal-line"></div>
                <div className="pc-window_top-bar-horizontal-line"></div>
                <div className="pc-window_top-bar-horizontal-line"></div>
              </div>
              <div
                onClick={() => Router.back()}
                id="w-node-_712c206d-f420-08ca-a2af-4b05406a0880-5fe902a0"
                className="pc-window_top-bar-square"
              >
                <img
                  src="https://uploads-ssl.webflow.com/62781264fb6e62279063d828/62781264fb6e6242f363d868_Cross%20Icon.svg"
                  loading="eager"
                  alt=""
                  className="pc-window_top-bar-cross-icon"
                />
              </div>
            </div>
            <div
              className="pc-window_inner-countdown "
              style={{ backgroundColor: "#fff" }}
            >
              <div className="">
                {succes ? (
                  <div style={{ color: "#333", textAlign: "center" }}>
                    <Admin
                      message={
                        "Съобщението Ви е получено ! Очаквайте отговор в рамките на 3 дни."
                      }
                    />

                    <Link style={{ color: "blue" }} href={"/"}>
                      Назад към началната страница
                    </Link>
                  </div>
                ) : (
                  <div className="container">
                    <h2 className="">Пиши ни</h2>
                    <form
                      id="contactForm "
                      onSubmit={(e) => handleSubmit(onSubmit(e))}
                      style={{ marginTop: "15px" }}
                    >
                      <div className="mb-3 ">
                        <label className="form-label" htmlFor="name">
                          Име
                        </label>
                        <input
                          id="name"
                          type="text"
                          placeholder="Име"
                          data-sb-validations="required"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="emailAddress">
                          Email
                        </label>
                        <input
                          id="emailAddress"
                          type="email"
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="emailAddress">
                          Причина
                        </label>
                        <input
                          id="emailAddress"
                          type="text"
                          placeholder="Причина"
                          data-sb-validations="required"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="mb-3 w-2">
                        <label className="form-label" htmlFor="message">
                          Съобщение
                        </label>
                        <textarea
                          onChange={(e) => setMessage(e.target.value)}
                          className="form-control"
                          id="message"
                          type="text"
                          placeholder="Съобщение"
                          data-sb-validations="required"
                        ></textarea>
                      </div>
                      <Widget />
                      <div className="d-grid">
                        {!message ||
                        message.trim().length === 0 ||
                        email.trim().length === 0 ||
                        name.trim().length === 0 ? (
                          <button
                            className="hiddenBtn"
                            style={{ visibility: "hidden" }}
                          >
                            Send
                          </button>
                        ) : sent === true ? (
                          <button className="btn slide" type="submit">
                            Изпрати
                          </button>
                        ) : (
                          "Sending..."
                        )}
                      </div>
                      <div style={{ color: "black", width: "50%" }}>
                        <p>
                          При попълване и изпращане на съобщението , Вие
                          доброволно се съгласявате с нашата политика за{" "}
                          <Link href={"/privacy"} style={{ color: "#0099ff" }}>
                            поверителност
                          </Link>
                          .
                        </p>
                      </div>{" "}
                    </form>
                  </div>
                )}
              </div>
              <div className="spacer grow is-home"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
