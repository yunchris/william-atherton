export default {
  name: "interviews",
  title: "Interviews - News Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Interview Title",
      type: "string",
    },
    {
      name: "publishDate",
      title: "Publish Date",
      type: "date",
      description: "Sorted by Date (newest first)",
    },
    {
      name: "interviewCopy",
      title: "Interview Copy",
      type: "blockContent",
    },
  ],
};
