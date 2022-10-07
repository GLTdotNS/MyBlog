import React, { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

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
              primary: "#713200",
              secondary: "#FFFAEE",
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
    <div>
      <div className="contactFormContainer aboutme">
        <h2>Contacts </h2>
        <form onSubmit={(e) => handleSubmit(onSubmit(e))}>
          <label htmlFor="fname">Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
            required
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="lname">Email</label>
          <input
            type="email"
            id="mail"
            name="mail"
            placeholder="Your email.."
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="lname">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Your company.."
            required
            onChange={(e) => setCompany(e.target.value)}
          />

          <label htmlFor="subject">Message</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            style={{ height: "100px" }}
            required
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          {!message || message.trim().length === 0 ? (
            <button className="hiddenBtn" style={{ visibility: "hidden" }}>
              Send
            </button>
          ) : sent === true ? (
            <button className="sentBtn">Send</button>
          ) : (
            "Sending..."
          )}
        </form>
      </div>
    </div>
  );
};

export default Contacts;
