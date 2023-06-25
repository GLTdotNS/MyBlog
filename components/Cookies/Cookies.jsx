import Link from "next/link";
import React from "react";

const Cookies = () => {
  return (
    <div className="nonModal" style={{ backgroundColor: "transparent" }}>
      <div>
        <div class="cookie-popup cookie-popup--short cookie-popup--dark ">
          <div>
            Този уебсайт използва бисквитки, за да ви осигури по - добро
            потребителско изживяване. Като го използвате, Вие приемате нашата
            политика за <Link href="/privacy">поверителност .</Link>.
          </div>
          <div class="cookie-popup-actions">
            <button className="btn">Съгласявам се</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
