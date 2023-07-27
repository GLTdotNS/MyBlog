import React, { useState } from "react";
import Image from "next/image";
import image from "../styles/assets/bg1.png";
import Layout from "../components/Layout/Layout";
import groq from "groq";
import { BsGithub, BsLinkedin, BsMailbox2, BsFacebook } from "react-icons/bs";
import Link from "next/link";
import { Shrikhand, Ubuntu } from "next/font/google";

const rubik = Shrikhand({
  weight: "400",
  subsets: ["latin"],
  adjustFontFallback: false,
});
const ubuntu = Ubuntu({
  weight: "400",
  subsets: ["cyrillic", "latin"],
  adjustFontFallback: false,
});
import { client } from "../lib/sanityClient";
import Head from "next/head";
const Runes = ({ category, posts }) => {
  const [runicSymbol, setRunicSymbol] = useState("Canis Lupus");
  const [displayResult, setDisplayResult] = useState("ᚲᚨᚾᛁᛊ ᛚᚢᛈᚢᛊ");
  const [latinOrEF, setLatinOrEf] = useState("Latin");

  function latinToRunic(runicSymbol) {
    const runicToLatinMap = {
      A: "ᚨ",
      B: "ᛒ",
      C: "ᚲ",
      D: "ᛞ",
      E: "ᛖ",
      F: "ᚠ",
      G: "ᚷ",
      H: "ᚺ",
      I: "ᛁ",
      J: "ᛃ",
      K: "ᚲ",
      L: "ᛚ",
      M: "ᛗ",
      N: "ᚾ",
      O: "ᛟ",
      P: "ᛈ",
      Q: "ᚲ",
      R: "ᚱ",
      S: "ᛊ",
      T: "ᛏ",
      U: "ᚢ",
      V: "ᚢ",
      W: "ᚹ",
      X: "ᚦ",
      Y: "ᛇ",
      Z: "ᛉ",
      TH: "ᚦ",
      NG: "ᛝ",
      " ": "    " + "  ",
    };

    return runicToLatinMap[runicSymbol.toUpperCase()] || runicSymbol;
  }
  function runicToLatin(runicSymbol) {
    const runicToLatinMap = {
      ᚨ: "A",
      ᛒ: "B",
      ᚲ: "C",
      ᛞ: "D",
      ᛖ: "E",
      ᚠ: "F",
      ᚷ: "G",
      ᚺ: "H",
      ᛁ: "I",
      ᛃ: "J",
      ᚲ: "K",
      ᛚ: "L",
      ᛗ: "M",
      ᚾ: "N",
      ᛟ: "O",
      ᛈ: "P",
      ᚲ: "Q",
      ᚱ: "R",
      ᛊ: "S",
      ᛏ: "T",
      ᚢ: "U",
      ᚹ: "V",
      ᚹ: "W",
      ᚦ: "X",
      ᛇ: "Y",
      ᛉ: "Z",
      ᚦ: "TH",
      ᛝ: "NG",
    };

    return runicToLatinMap[runicSymbol] || runicSymbol;
  }

  const converFunctionLatinToEF = () => {
    let result = "";
    for (let i = 0; i < runicSymbol.length; i++) {
      const element = runicSymbol[i];
      const char = latinToRunic(element);
      result = result += char;
    }
    setDisplayResult(result);
  };
  const converFunctionEFtoLatin = () => {
    let result = "";
    for (let i = 0; i < runicSymbol.length; i++) {
      const element = runicSymbol[i];
      const char = runicToLatin(element);
      result = result += char;
    }
    setDisplayResult(result);
  };
  return (
    <Layout posts={posts}>
      <Head>
        <title>
          Най - старата позната протогерманска руническа азбука - Elder Futhark
        </title>
      </Head>
      <div style={{ marginBottom: "20%" }}>
        <div className=" container content-wrapper ">
          {" "}
          <table className={`${rubik.className}`}>
            <caption>
              Руни
              <br />
              <span>
                Най - старата позната протогерманска руническа азбука - Elder
                Futhark
              </span>
            </caption>
            <tr className={`${ubuntu.className}`}>
              <th>Elder Futhark</th>
              <th>Латиница</th>
              <th>Наименование</th>

              <th>Значение</th>
            </tr>
            <tr>
              <td>ᚨ</td>
              <td>A</td>
              <td>Ansuz</td>

              <td>Один и предците богове, въздух , комуникация</td>
            </tr>
            <tr>
              <td>ᛒ</td>
              <td>B</td>

              <td>Berkana</td>
              <td>Раждане , плодородие , женственост , защита , здраве</td>
            </tr>
            <tr>
              <td>ᚲ</td>
              <td>C</td>
              <td>Kaunaz</td>

              <td>Светлина, енергия, страст, креативност , преобразяване</td>
            </tr>{" "}
            <tr>
              <td>ᛞ</td>
              <td>D</td>
              <td>Dagaz</td>
              <td>Светлина , Интуиция , Креативност , Визия</td>
            </tr>{" "}
            <tr>
              <td>ᛖ</td>
              <td>E</td>
              <td>Ehwaz</td>
              <td>Кон, партньорство , напредък , приятелство.</td>
            </tr>{" "}
            <tr>
              <td>ᚠ</td>
              <td>F</td>
              <td>Fehu</td>
              <td>Крави, изобилие, богатство , материални придобивки</td>
            </tr>{" "}
            <tr>
              <td>ᚷ</td>
              <td>G</td>
              <td>Gebo</td>

              <td>
                Подарък, благодарност, обмен, получаване чрез жертвоприношение
              </td>
            </tr>{" "}
            <tr>
              <td>ᚺ</td>
              <td>H</td>

              <td>Hagalaz</td>
              <td>
                Градушка, временни затруднения, промяна на планове, забавяне
              </td>
            </tr>{" "}
            <tr>
              <td>ᛁ</td>
              <td>I</td>
              <td>Isaz</td>

              <td>Лед, инерция</td>
            </tr>{" "}
            <tr>
              <td>ᛃ</td>
              <td>J</td>
              <td>Jera</td>

              <td>Жетва, цикъл, отблагодаряване,реколта</td>
            </tr>{" "}
            <tr>
              <td>ᚲ</td>
              <td>K</td>
              <td>Kaunaz</td>

              <td>Светлина, енергия, страст, креативност , преобразяване</td>
            </tr>{" "}
            <tr>
              <td>ᛚ</td>
              <td>L</td>
              <td>Laguz</td>
              <td>Вода, течение, пътуване навътре, дълбина.</td>
            </tr>{" "}
            <tr>
              <td>ᛗ</td>
              <td>M</td>
              <td>Mannaz</td>

              <td>Човечност, баланс, божествен потенциал, талантлитвост.</td>
            </tr>{" "}
            <tr>
              <td>ᚾ</td>
              <td>N</td>
              <td>Nauthiz</td>

              <td>
                Нужда, преодоляване на предизвикателства, изявление , проявление
              </td>
            </tr>{" "}
            <tr>
              <td>ᛟ</td>
              <td>O</td>
              <td>Othala</td>

              <td> Наследство , завещание, мъдрост, таланти, завръщане</td>
            </tr>{" "}
            <tr>
              <td>ᛈ</td>
              <td>P</td>
              <td>Perthro</td>

              <td>Гадание, търсене на самопознание, съдба</td>
            </tr>{" "}
            <tr>
              <td>ᚲ</td>
              <td>Q</td>
              <td>Kaunaz</td>

              <td>Светлина, енергия, страст, креативност , преобразяване</td>
            </tr>{" "}
            <tr>
              <td>ᚱ</td>
              <td>R</td>
              <td>Raidho</td>

              <td>Колесница, пътуване , ритъм , пътешествие</td>
            </tr>{" "}
            <tr>
              <td>ᛊ</td>
              <td>S</td>
              <td>Sowulo</td>

              <td>
                Слънце, духовна сила и просветление, успех, личностно израстване
              </td>
            </tr>{" "}
            <tr>
              <td>ᛏ</td>
              <td>T</td>
              <td>Tiwaz</td>

              <td>
                Тир, храброст, борба за справедливост и чест, саможертва за
                по-висша обществена цел.
              </td>
            </tr>{" "}
            <tr>
              <td>ᚢ</td>
              <td>U</td>
              <td>Uruz</td>

              <td>Див бивол, сила , добро здраве.</td>
            </tr>{" "}
            <tr>
              <td>ᚢ</td>
              <td>V</td>
              <td>Uruz</td>
              <td>Див бивол, сила , добро здраве.</td>
            </tr>{" "}
            <tr>
              <td>ᚹ</td>
              <td>W</td>
              <td>Wunjo</td>

              <td>Радост, удовлетворение, благополучие, период на щастие</td>
            </tr>
            <tr>
              <td>ᚦ</td>
              <td>X</td>
              <td>Thurisaz</td>

              <td>Гигант, трън, защита , нарушение</td>
            </tr>
            <tr>
              <td>ᛇ</td>
              <td>Y</td>
              <td>Eihwaz</td>

              <td>Тис, мъдрост, тайната на живота и смъртта, отвъдното</td>
            </tr>
            <tr>
              <td>ᛉ</td>
              <td>Z</td>

              <td>Algiz</td>
              <td>Елк, късмет и защита, духовна връзка със себеси, убежище</td>
            </tr>
            <tr>
              <td>ᚦ</td>
              <td>Th</td>
              <td>Thurisaz</td>

              <td>Гигант, трън, защита , нарушение</td>
            </tr>
            <tr>
              <td>ᛝ</td>
              <td>Ng</td>
              <td>Ingwaz</td>

              <td>
                Плодородие, сексуалност, потенциална енергия, семейство и рода.
              </td>
            </tr>
          </table>
          <div
            style={{
              backgroundColor: "#333",
              textAlign: "center",
              padding: "1%",
            }}
          >
            <h2 style={{ textAlign: "center", margin: "none !important" }}>
              Конвентор
            </h2>
            <div class="l-container">
              <div class="select-control  box-shadow">
                <select
                  value={latinOrEF}
                  class="select"
                  id="js-select"
                  onChange={(e) => {
                    setLatinOrEf(e.target.value);
                    setRunicSymbol(" ");
                    setDisplayResult("");
                  }}
                >
                  <option class="select__item" value="Latin">
                    Latin - Elder Furthark
                  </option>
                  <option class="select__item" value="EF">
                    Elder Furthark - Latin
                  </option>
                </select>
              </div>

              <span style={{ fontSize: "30px" }}>
                {latinOrEF == "Latin" ? " Elder Furthark" : "Latin"}:{" "}
                <span style={{ fontSize: "40px", fontWeight: "600" }}>
                  {displayResult}
                </span>
              </span>
            </div>

            <div class="input-container">
              <input
                type="text"
                class="custom-input"
                placeholder="Въведете текст"
                value={runicSymbol}
                onChange={(e) => setRunicSymbol(e.target.value)}
              />
              <button
                style={{ width: "50%" }}
                class="loadmore-btn"
                onClick={() => {
                  if (latinOrEF == "Latin") {
                    converFunctionLatinToEF();
                  } else {
                    converFunctionEFtoLatin();
                  }
                }}
              >
                Конвертирай
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export const getServerSideProps = async () => {
  const query = groq`*[_type == "post"] | order(_createdAt desc)
    {
    title,
    slug,
    "authorImage": author->image,
    "category": categories[0]->title,
    description,
    likes,
    rowTitle,

    _id,
    body,
    publishedAt,
    mainImage{
      asset->{
      _id,
      url
    }
  },
  
  }`;
  const category = await client.fetch(
    groq`*[_type == "category"]{
    _id,
    slug,
    title,
    mainImage{
      asset->{
      _id,
      url
    }
  }
  
    }`
  );

  const posts = await client.fetch(query);

  return {
    props: { posts, category },
  };
};

export default Runes;
