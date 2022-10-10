import React from "react";
import Image from "next/image";
import notFoundImage from "../styles/assets/monkey.png";
import { useRouter } from "next/router";
import Link from "next/link";

const Sorry = () => {
  const router = useRouter();
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "85%",
        marginLeft: "auto",
        textAlign: "center",
        borderLeft: "1px solid #333",
        padding: "10%",
      }}
    >
      <h2>Oooops!...</h2>
      <Image src={notFoundImage} width="350px" height="300px" />
      <p>I am probably working on something that has blown up.</p>
      <button className="btn" onClick={() => router.back()}>
        Go back
      </button>
    </div>
  );
};

export default Sorry;
