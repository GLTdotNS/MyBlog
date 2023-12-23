import React, { useState } from "react";
import Image from "next/image";
import Layout from "../components/Layout/Layout";
import groq from "groq";
import RingCanvas from "../components/canvas/animated";
import { Shrikhand, Ubuntu } from "next/font/google";
import { toast } from "react-hot-toast";
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
  const copyToClipboard = (text) => {
    const elem = document.createElement("textarea");
    elem.value = text;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    toast.success("Копирано в клипборда", {
      position: "top-center",
      style: {
        border: "1px solid #333",
        padding: "5px",
        color: "#713200",
      },
      iconTheme: {
        primary: "wheat",
        secondary: "blue",
      },
    });
  };

  const convertFunctionLatinToEF = (input) => {
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
      Q: "ᚳ",
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

      " ": "  ",
    };

    let result = "";
    for (let i = 0; i < input.length; i++) {
      const element = input[i].toUpperCase();
      let char = runicToLatinMap[element] || element;
      if (i + 1 < input.length) {
        const nextTwoChars = input.substr(i, 2).toUpperCase();
        if (runicToLatinMap[nextTwoChars]) {
          char = runicToLatinMap[nextTwoChars];
          i += 2;
        }
      }
      result += char;
    }

    setDisplayResult(result);
  };
  const convertFunctionEFtoLatin = (input) => {
    const elderToLatinMap = {
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

      ᛚ: "L",
      ᛗ: "M",
      ᚾ: "N",
      ᛟ: "O",
      ᛈ: "P",
      ᚳ: "Q",
      ᚱ: "R",
      ᛊ: "S",
      ᛏ: "T",
      ᚢ: "U",
      ᚹ: "W",
      ᚦ: "X",
      ᛇ: "Y",
      ᛉ: "Z",

      ᚦ: "TH",
      ᛝ: "NG",
      " ": " ",
    };

    let result = "";
    for (let i = 0; i < input.length; i++) {
      const element = input[i].toUpperCase();
      let char = elderToLatinMap[element] || element;
      if (i + 1 < input.length) {
        const nextTwoChars = input.substr(i, 2).toUpperCase();
        if (elderToLatinMap[nextTwoChars]) {
          char = elderToLatinMap[nextTwoChars];
          i += 2;
        }
      }
      result += char;
    }

    setDisplayResult(result);
  };

  return (
    <Layout posts={posts}>
      <Head>
        <meta
          name="description"
          content={`${"Руни , Протогерманска азбука , Runes convertor,История на протогермански руни Elder Futhark , Scandinavian runes , Norse Runes , Runes , Odin , Valhalla , Elder Furthark"}}`}
          key="desc"
        />
        <title>Руни / Конвертор</title>
      </Head>
      <div style={{ marginBottom: "20%", padding: "5%" }}>
        <div className=" container content-wrapper ">
          {" "}
          <hr /> Протогерманската писменост е една от най-старите познати на
          човечеството, като първите сведения за нея датират от 160 години преди
          христа, но за първата руническа азбука се сочи Elder Furthark ,която е
          използвана между II и VII век.Тя е широко разпространена сред
          германските народи и най-вече в Скандинавия . За произхода и се говори
          , че Бог Один след като слязъл от дървото на живота Игдрасил получил
          руни , които му шепнели и надарили с мъдрост. Самата дума руна
          означава "шепот"/"мистериозен шепот"/. С навлизането на християнството
          в Европа руните са били изместени от латиницата , но руните са
          използвани и до днес - за декорация , за изготвянето на амулети ,
          медальони и други украшения . Всяка една от руните има своето
          значение, както и всяка една от тях отговаря на звук или буква от
          латинската азбука.
          <br />
          <figure style={{ textAlign: "center" }}>
            <Image
              width={300}
              height={300}
              src={`https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bj%C3%B6rketorpsstenen_runor.jpg/1280px-Bj%C3%B6rketorpsstenen_runor.jpg`}
            />

            <figcaption
              style={{ background: "#333", width: "300px", margin: "auto" }}
            >
              Björketorp рунен камък намиращ се в Блекинге, Швеция
            </figcaption>
          </figure>
          <br />В таблицата по - долу можете да се запознаете със Elder Futhark
          и значението на руните, които съставляват азбуката. Руните са
          комплексни знаци използвани за гадаене, пречистване и лечение. Трудно
          би могло да се опише тяхното значение, както и да се преведат. Въпреки
          това, ако ви е интересно как изглежда името Ви изписано с руни, то
          може да използвате нашия
          <a style={{ color: "blue" }} href="#convertor">
            конвертор
          </a>
          <p
            style={{
              color: "yellow",
              textAlign: "center",

              backgroundColor: "black",
              width: "80%",
              margin: "auto",
              marginTop: "2%",
              marginBottom: "5%",
            }}
          >
            {" "}
            <span style={{ color: "red", fontSize: "20px", fontwe: "bold" }}>
              !
            </span>
            Бележка: Конвертира само и единствено знаците.В никакъв случай не
            може да се преведе рунически надпис.{" "}
          </p>
          <table>
            <caption>
              <div
                style={{
                  width: "100%",
                  margin: "auto",
                  textAlign: "center", // Центрира текста на цялата страница
                  fontSize: "15px",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "5%",
                }}
              >
                <p style={{ textAlign: "left" }}>Знам дванайсто,</p>
                <p style={{ textAlign: "left" }}>ако на дърво обесник</p>
                <p style={{ textAlign: "left" }}>да виси съзра,</p>
                <p style={{ textAlign: "left" }}>руна тъй изсичам</p>
                <p style={{ textAlign: "left" }}>и умея да я оцветя,</p>
                <p style={{ textAlign: "left" }}>че мъртвецa призовавам</p>
                <p style={{ textAlign: "left" }}>и с него разговарям.</p>
                <br />
                <p style={{ textAlign: "left" }}>
                  - Тъй речени са на Високия Словата...
                </p>
              </div>
              <RingCanvas />
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
          <span id="convertor"></span>
          <div
            style={{
              backgroundColor: "#333",
              textAlign: "center",
              padding: "1%",
            }}
          >
            <h2 style={{ textAlign: "center", margin: "none !important" }}>
              Конвертор
            </h2>
            <div class="l-container">
              <div class="select-control  box-shadow">
                <select
                  value={latinOrEF}
                  class="select"
                  id="js-select"
                  onChange={(e) => {
                    setLatinOrEf(e.target.value);

                    if (e.target.value == "Latin") {
                      setDisplayResult("ᚲᚨᚾᛁᛊ ᛚᚢᛈᚢᛊ");
                      setRunicSymbol("Canis Lupus");
                    } else {
                      setRunicSymbol(" ᚲᚨᚾᛁᛊ ᛚᚢᛈᚢᛊ");

                      setDisplayResult("Canis Lupus");
                    }
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
                {latinOrEF == "Latin" ? " Elder Furthark" : "Latin"}:
                <span
                  style={{
                    fontSize: "40px",
                    fontWeight: "600",
                    color: "#4ba6e7",
                    borderBottom: "1px solid silver",
                    boxShadow: "0px 0.4px 0px 0px white",
                  }}
                >
                  {displayResult}
                  <button
                    style={{ cursor: "pointer", marginLeft: "10px" }}
                    onClick={() => copyToClipboard(displayResult)}
                  >
                    Копирай
                  </button>
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
                    convertFunctionLatinToEF(runicSymbol);
                  } else {
                    convertFunctionEFtoLatin(runicSymbol);
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
