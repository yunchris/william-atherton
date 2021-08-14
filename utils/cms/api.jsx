import groq from "groq";
import { getCMSData } from "./sanityContent";

// Sanity queries //

const GET_HOME_PAGE_QUERY = groq`*[_type == "home"][0]{title, backgroundImage}`;

const GET_BIO_PAGE_QUERY = groq`*[_type == "bio"][0]{title, backgroundImage, bioCopy}`;

const GET_NEWS_PAGE_QUERY = groq`*[_type == "news"] | order(publishDate desc){title, newsCopy}`;


// Query functions //

// Home Page query
export const getHomePageCMSData = async () => {
  return getCMSData(GET_HOME_PAGE_QUERY, {});
};

// Bio Page queries
export const getBioPageCMSData = async () => {
  return getCMSData(GET_BIO_PAGE_QUERY, {});
};

// News Page query
export const getNewsPageCMSData = async ()=> {
    return getCMSData(GET_NEWS_PAGE_QUERY, {});
  };
