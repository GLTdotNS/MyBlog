import React from "react";
import Image from "next/image";
import notFoundImage from "../styles/assets/monkey.png";
import { useRouter } from "next/router";

const Sorry = () => {
  const router = useRouter();
  return (
    <div
      className="modal"
      style={{
        minHeight: "100vh",
        width: "100%",
        margin: "auto",
        textAlign: "center",
        padding: "10%",
        backgroundColor: "#181818",
      }}
    >
      <h2>Oooops!...</h2>
      <Image src={notFoundImage} width="350px" height="300px" alt="not found" />
      <p>I am probably working on something that has blown up.</p>
      <button className="btn" onClick={() => router.back()}>
        Go back
      </button>
    </div>
  );
};

export default Sorry;
