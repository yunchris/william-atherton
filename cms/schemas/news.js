export default {
  name: "news",
  title: "News Page",
  type: "document",
  fields: [
    {
      name: "projectTitle",
      title: "Project Title",
      type: "string",
    },
    {
      name: "publishDate",
      title: "Publish Date",
      type: "date",
      description: "Sorted by Date (newest first)"
    },
    {
      name: "newsCopy",
      title: "News Copy",
      type: "blockContent",
    },
  ],
};
