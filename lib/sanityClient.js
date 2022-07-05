import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const client = sanityClient ({
    projectId: "6kqgsbl2",
    dataset: "production", 
    apiVersion: '2022-05-06',
    token: "sk81LclXTK5lqwpAZsQf5LuQz4ihNKUqvTn7YxA9IIcdUnteJcgbKjpwAJkU3l3GL2b7vbQTcmoc6TOGtDMuprjD55c7BhejPTqAYdLKMTJ865MX7J22K15FFaokU9IjZXJ6yqOL6yJjmCfGcBf2sCeqF2rjvM5UD0p8NCI8MIxZQkA1hPck",
    ignoreBrowserTokenWarning: true,
    useCdn: false,
  });

  const builder = imageUrlBuilder(client);

  export const urlForImg = (source) => builder.image(source); 
