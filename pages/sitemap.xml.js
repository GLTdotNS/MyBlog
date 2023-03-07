//pages/sitemap.xml.js
import { client } from "../lib/sanityClient";
const EXTERNAL_DATA_URL = "https://noncreativeblog.net/post";

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://noncreativeblog.net</loc>
     </url>
    
     ${posts
       .map((p) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${p.slug.current}`}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const query = `*[_type == "post"] | order(_createdAt desc)
  {
  title,
  slug,
  "authorImage": author->image,
  description,
  body,
  publishedAt,
  mainImage{
    asset->{
    _id,
    url
  }
},

}`;
  const posts = await client.fetch(query);
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
