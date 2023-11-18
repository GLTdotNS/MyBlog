import React from "react";
import Layout from "../components/Layout/Layout";
import { BsPinAngleFill } from "react-icons/bs";
const Donate = () => {
  return (
    <Layout>
      <div>
        <div className="donate-newsletter midcolumn  container content-wrapper">
          <h2 className="donate-logo">NONCREATIVEBLOG</h2>
          <h1 style={{ position: "absolute", top: "-52px", right: "35px" }}>
            <BsPinAngleFill color={"yellow"} />
          </h1>
          <hr />
          <p>
            Както знаете, сайтът , който поддържам, е един от най-добрите по
            темата (на български език). Той предлага богата информация за
            митовете, боговете, героите и културата на древните скандинавци.
          </p>
          <p>
            В последните месеци потреблението на сайта се е вдигнало много рязко
            , около 400%. Това се дължи на нарастващия интерес към
            скандинавската митология, както и на популяризирането на сайта в
            социалните мрежи и доброто SEO ,което изисква много работа и
            отделено време.
          </p>
          <p>
            За да мога да поддържам сайта и да предоставя актуална и качествена
            информация, се нуждая от вашата помощ.
          </p>
          <h3>Защо да дарите?</h3>
          <ul>
            <li>
              Вашата подкрепа ще ми помогне да закупя нови книги и материали, за
              да предоставя най-актуалната и достоверна информация.
            </li>
            <li>
              Вашата подкрепа ще ми помогне да наема помощници, за да мога да
              обработвам по-голямо количество информация.
            </li>
            <li>
              Вашата подкрепа ще ми помогне да развивам нови функции, които да
              направят сайта още по-полезен и интересен.
            </li>
            <li>
              Вашата подкрепа ще ми помогне да отделя средства за реклама в
              социалните мрежи и търсачки.
            </li>
          </ul>
          <h3>Как можете да помогнете?</h3>
          <ul>
            <li>
              Можете да направите дарение чрез{" "}
              <a
                href={""}
                onClick={() =>
                  window.open(
                    "https://www.paypal.com/donate/?hosted_button_id=DSMYWHRGK6VWE"
                  )
                }
              >
                PayPal
              </a>{" "}
              или{" "}
              <a
                href={""}
                onClick={() =>
                  window.open(
                    "https://www.paypal.com/donate/?hosted_button_id=DSMYWHRGK6VWE"
                  )
                }
              >
                банков превод
              </a>{" "}
              .
            </li>
            <li>Можете да споделите сайта в социалните мрежи.</li>
            <li>Можете да пишете коментари и отзиви за сайта.</li>
          </ul>

          <h3>Как ще се използва дарението ви?</h3>
          <p>
            Ще използвам даренията, за да поддържам сайта актуален и интересен.
            Ще закупя нови книги и материали, ще наема помощници и ще развивам
            нови функции.
          </p>
          <p>Ще публикувам отчети за използването на даренията в сайта.</p>
          <p>Благодаря ви за подкрепата!</p>
          <br />
          <br />
          <p>С уважение,</p>

          <p>Canis Lupus.</p>
          <form
            action="https://www.paypal.com/donate"
            method="post"
            target="_top"
          >
            <input
              type="hidden"
              name="hosted_button_id"
              value="DSMYWHRGK6VWE"
            />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
              border="0"
              name="submit"
              title="PayPal - The safer, easier way to pay online!"
              alt="Donate with PayPal button"
            />
            <img
              alt=""
              border="0"
              src="https://www.paypal.com/en_BG/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Donate;
