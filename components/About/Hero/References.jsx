import React from "react";
import { urlForImg } from "../../../lib/sanityClient";
const References = ({ references }) => {
  return (
    <div className="marquee">
      <h2>References</h2>
      {references.map((ref, index) => (
        <div
          className="card initial-post forMarquee"
          style={{ width: "60%" }}
          key={index}
        >
          <img
            className="mypic"
            width={100}
            src={urlForImg(ref.image).url()}
            alt="Elon Musk maybe..."
          />
          <h2>{ref.name}</h2>

          <span>{ref.description}</span>
        </div>
      ))}
    </div>
  );
};

export default References;
