export default {
  name: "news",
  title: "News Page: Projects",
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
      description: "Sorted by Date (newest first)",
    },
    {
      name: "newsCopy",
      title: "Project Copy",
      type: "blockContent",
    },
  ],
};
