export default {
  name: "facts",
  title: "News Page: Facts",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Facts Title",
      type: "string",
    },
    {
      name: "publishDate",
      title: "Publish Date",
      type: "date",
      description: "Sorted by Date (newest first)",
    },
    {
      name: "factsCopy",
      title: "Facts Copy",
      type: "blockContent",
    },
  ],
};
