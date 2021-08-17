import { createClient } from "next-sanity";

/** Based off https://github.com/sanity-io/sanity-template-nextjs-blog-comments/blob/4848bb2725254d6b6c9b2dc26ca5aa7b1829f401/template/lib/sanity.js */

const baseConfig = {
  projectId: 'rhgqcj9t',
  dataset: 'production',
  useCdn: true,
  apiVersion: "2021-03-25",
};

const client = createClient(baseConfig);

export default client;
