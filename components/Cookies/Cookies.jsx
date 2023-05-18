import React from "react";

const Cookies = () => {
  return (
    <div className="nonModal" style={{ backgroundColor: "transparent" }}>
      <div>
        <div class="cookie-popup cookie-popup--short cookie-popup--dark ">
          <div>
            Този уебсайт използва бисквитки, за да ви осигури по - добро
            потребителско изживяване. Като го използвате, Вие приемате нашата
            политика за{" "}
            <a href="https://help.crisp.chat/en/article/crisp-chatbox-cookie-ip-policy-1147xor/">
              използване на бисквитки
            </a>
            .
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
