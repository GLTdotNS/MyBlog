import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import toast from "react-hot-toast";
import logo from "../../styles/assets/a.jpg";
const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [sent, setSent] = useState(true);
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (e) => {
    e.preventDefault();
    let data = {
      name,
      email,
      company,
      message,
    };
    setSent(false);

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
            window.scrollTo(0, 0);
            setMessage("");
            setSent(true);
            toast.remove(toastId);
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
      className=" modal"
      style={{ backgroundImage: `url(${logo.src})` }}
    >
      <Link
        className="btn"
        style={{
          color: "white",
          marginLeft: "1%",
          padding: "10px",
        }}
        href={"/blog"}
      >
        Назад към блога
      </Link>
      <div className="container modal-content animate contactForm ">
        <h2 style={{ color: "black" }}>Пиши ни</h2>
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
              placeholder="Name"
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
              type="text"
              placeholder="Email Address"
              data-sb-validations="required"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="emailAddress">
              Причина
            </label>
            <input
              id="emailAddress"
              type="text"
              placeholder="Reason"
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
              placeholder="Message"
              data-sb-validations="required"
            ></textarea>
          </div>

          <div className="d-grid">
            {!message ||
            message.trim().length === 0 ||
            email.trim().length === 0 ||
            name.trim().length === 0 ? (
              <button className="hiddenBtn" style={{ visibility: "hidden" }}>
                Send
              </button>
            ) : sent === true ? (
              <button className="btn" type="submit">
                Submit
              </button>
            ) : (
              "Sending..."
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
