import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../styles/assets/grayscale_transparent.png";
const UserPopup = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="user-popup ">
          <div className="">
            <Image src={logo} alt="Noncreativeblog" />

            <p style={{ marginBottom: "5%" }}>
              Проектът е в разработка. Очаквайте съвсем скоро.
            </p>
            <iframe
              width="100%"
              height="200px"
              src="https://www.youtube.com/embed/sV6Q2MRvD54"
              title="Gealdýr - Völuspá (Official Music Video)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <button
              style={{ marginTop: "5%" }}
              className="loadmore-btn"
              onClick={handleClose}
            >
              Затвори
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UserPopup;
