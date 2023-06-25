import React from "react";
import Layout from "../components/Layout/Layout";
import groq from "groq";
import { client } from "../lib/sanityClient";
const ToS = ({ posts }) => {
  return (
    <Layout posts={posts}>
      <div className=" wrapper wrap">
        <strong>Условия за политика на поверителност:</strong>
        <br /> <br />
        <p>
          Noncreativeblog се стреми да защитава вашата лична информация. Моля,
          прочетете внимателно нашата политика на поверителност, за да разберете
          каква информация събираме и как я използваме.
        </p>
        <br />
        <br />
        <p>
          1.1 Събиране на информация: Noncreativeblog може да събира определена
          информация от вас, включително, но не само, име, електронна поща,
          контактни данни и демографски данни. Тази информация се изисква само
          когато изрично я предоставите доброволно, например чрез попълване на
          формуляр, регистрация на акаунт или изпращане на съобщение.
        </p>
        <br />
        <br />
        <p>
          1.2 Използване на информацията: Noncreativeblog използва събраната
          информация за целите, за които е била предоставена, както и за
          персонализиране и подобряване на нашите услуги, комуникация с вас и
          предоставяне на актуални новини и информация.
        </p>
        <br />
        <br />
        <p>
          1.3 Споделяне на информацията: Noncreativeblog може да споделя вашата
          информация с трети страни само когато е необходимо за предоставяне на
          услугите или в случаи, предвидени от законодателството.
        </p>
        <br />
        <br />
        <p>
          1.4 Бисквитки: Noncreativeblog, използва бисквитки с цел подобряване
          на потребителското изживяване и предоставяне на функционалност за чат
          съпорт.
        </p>
        <br />
        <br />
      </div>
      ;
    </Layout>
  );
};
export const getStaticProps = async () => {
  const query = groq`*[_type == "post"] | order(publishedAt desc)
  {
  title,
  slug,
  "authorImage": author->image,
  "category": categories[0]->title,
  description,
  "author": author->name,
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
export default ToS;
