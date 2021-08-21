export default {
  name: "appearances",
  title: "News Page: Appearances",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Appearance Title",
      type: "string",
    },
    {
      name: "publishDate",
      title: "Publish Date",
      type: "date",
      description: "Sorted by Date (newest first)",
    },
    {
      name: "appearanceCopy",
      title: "Appearance Copy",
      type: "blockContent",
    },
  ],
};
