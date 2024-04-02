import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { client } from "../lib/sanityClient";
import groq from "groq";
import Image from "next/image";
import edda from "../styles/assets/eddacover.jpg";
import voluspa from "../styles/assets/voluspa.png";
import UserPopup from "../components/ComingSoon/CommingSoon";
  import Link from "next/link";
const Sagas = ({ posts }) => {
  const [clicked, setclicked] = useState(false);
  return (
    <Layout posts={posts}>
      <div style={{ marginBottom: "20%", position: "relative" }}>
        <div className=" container content-wrapper sagas">
          <h2 style={{ width: "100%", margin: "auto" }}>Саги и разкази</h2>
          <div className="columns">
            <div className="title" style={{ marginTop: "10px !important" }}>
              <h3 style={{ padding: "5px" }}>
                <span style={{ padding: "5px", width: "100px" }}>
                  Völuspá (Волюшпау)
                </span>
              </h3>
              <div
                id="floatLeft"
                style={{
                  float: "left",
                  marginTop: "5%",
                  marginRight: "20px",
                  padding: "2%",
                  border: "1px solid #333",
                }}
              >
                <Image
                  width={300}
                  height={400}
                  src={edda}
                  alt="Волюшпау Волюспа Старата Едда Снори Стурлусон"
                />
              </div>

              <div style={{ marginTop: "10%" }}>
                Völuspá, на староисландски Vǫluspá, е първата и в повечето
                отношения най-забележителна поема-песен от така наречената
                Поетична Еда (Codex Regius). Тя представлява история на света и
                съдбата на боговете и хората, завършваща с кратко, но възторжено
                описание на един нов и по-добър свят, който ще последва. Името
                на поемата - "Предсказанието на Пророчицата" (или "Пророчеството
                на гадателката") - идва от факта, че то е поставено в устата на
                призована от Один гадателка, така наречената völva (гадателка),
                която отправя думите си към целия човешки род.
                <br />
                <br />
                <br />
                Поетичната Еда, позната още като Старата Еда, е модерното
                наименование на колекция нордически стихотворения, които са
                различни от Прозаичната (или Младата) Еда, написана от Снуре
                Стурласон. Съществуват няколко версии, всички предимно от
                текстове от исландския средновековен ръкопис – Codex Regius.
                Codex Regius е може би най-важният запазен източник на
                скандинавската митология и германските героични легенди, а от
                началото на XIX век насам, той има силно влияние върху
                по-късните скандинавски литератури. Поети, повлияни от Codex
                Regius са: Вилхелм Екелунд, Аугуст Стриндберг, Дж. Р. Р. Толкин,
                Езра Паунд, Хорхе Луис Борхес и Карин Бойе. Codex Regius е
                написан през XIII век, но нищо не се знае за неговото
                местонахождение до 1643 г., когато влиза в притежание на
                Бриньолфур Свейнсон, а след това – на епископа на Скалхолт. По
                това време версии на Еда са били известни в Исландия, но учени
                спекулират, че някога е имало друга Еда, Стара Еда, която
                съдържа езическите поеми, които Снуре цитира в своята Еда.
                Епископ Бриньолфур изпраща Codex Regius като подарък на датския
                крал, откъдето идва и името. В продължение на векове се
                съхранява в Кралската библиотека в Копенхаген, но е върната
                обратно в Исландия през 1971 г. Codex Regius или Кралската книга
                (на исландски: Konungsbók), в който са запазени много нордически
                поеми. Състои се от 45 листа и се смята, че е написан през 70-те
                години на XIII век. Първоначално е съдържал още 8 листа, които
                сега липсват. Той е единственият източник за повечето от
                включените в него поеми. В научни текстове този ръкопис
                обикновено се съкращава като [R] за Codex Regius, или като [К]
                за Konungsbók. Нищо не е известно за местонахождението на
                книгата до 1643 г., когато става притежание на Бриньолфур
                Свейнсон, а след това и на епископа на Скалхолт, който през 1662
                г. я подарява на крал Фредерик III на Дания, откъдето идва и
                името ѝ. След това се държи в Кралската библиотека в Копенхаген
                до 21 април 1971 г., когато е върната обратно в Рейкявик и се
                пази в института Арни Магнусон за исландски науки. Тъй като
                превозът със самолет не е бил изцяло безопасен за такива ценни
                товари, ръкописът е транспортиран с кораб и придружен от военен
                ескорт.
              </div>

              <h4 style={{ textAlign: "center", marginTop: "5%" }}>
                На български език
              </h4>

              <div
                style={{
                  float: "right",

                  padding: "2%",

                  textAlign: "center",
                }}
              >
                <Image
                  style={{
                    width: "50%",
                    height: "30%",
                    border: "1px solid #333",
                    padding: "2%",
                  }}
                  src={voluspa}
                  alt="Волюшпау Волюспа Старата Едда Снори Стурлусон"
                />
                <p
                  style={{
                    textEmphasis: "-moz-initial",
                    textAlign: "left",

                    marginTop: "2%",
                  }}
                >
                  "Предсказанието на Пророчицата" е вдъхновяващ превод на
                  епичната поема Völuspá. Този превод, извършен от Айгир
                  Сверисон и Яна Чанкова, съчетава майсторство и преданост към
                  оригиналния текст. Книгата разказва за пророчество на
                  загадъчната гадателка , която води читателя през древни
                  времена и събужда в него вълнението и любопитството към
                  скритите истории на света. Съдържанието е обогатено със
                  символизъм и мистика, които правят "Предсказанието на
                  Пророчицата" несравнимо литературно произведение. Важно е да
                  се подчертае, че този превод подлежи на авторски права, което
                  гарантира уважение към интелектуалната собственост и работата
                  на преводачите.
                </p>
              </div>

              <button
                className="loadmore-btn"
                onClick={() =>
                  window.open("https://voluspa.noncreativeblog.net/")
                }
              >
                Чети онлайн
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
        "type": categories[1]->title,
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
export default Sagas;
