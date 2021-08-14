export default {
  name: "bio",
  title: "Bio Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
    },
    {
      name: "bioCopy",
      title: "Bio Copy",
      type: "blockContent",
    },
  ],
};