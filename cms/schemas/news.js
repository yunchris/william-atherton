export default {
  name: "news",
  title: "News Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "News Title",
      type: "string",
    },
    {
      name: "newsCopy",
      title: "News Copy",
      type: "blockContent",
    },
  ],
};
