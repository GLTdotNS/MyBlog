import React from "react";

const Admin = ({ message }) => {
  return (
    <div className="svg-container wrap wrapper ">
      <div className="succes-content ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="100"
          width="100"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <circle className="circle" fill="#5bb543" cx="24" cy="24" r="22" />
          <path
            className="tick"
            fill="none"
            stroke="#FFF"
            stroke-width="6"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            d="M14 27l5.917 4.917L34 17"
          />
        </svg>
        <p>{message} </p>
      </div>
    </div>
  );
};

export default Admin;
