export default {
  name: "video",
  title: "Video",
  type: "document",
  fields: [
    {
      name: "caption",
      title: "Caption",
      type: "string",
    },
    {
      name: "video",
      title: "Video",
      type: "file",
      options: {
        hotspot: true,
      },
    },

    {
      name: "topic",
      title: "Topic",
      type: "string",
    },
  ],
};
