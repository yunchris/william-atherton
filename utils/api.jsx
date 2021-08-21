import groq from "groq";
import { getCMSData } from "./sanityContent";

// Sanity queries //

const GET_HOME_PAGE_QUERY = groq`*[_type == "home"][0]{title, backgroundImage}`;

const GET_BIO_PAGE_QUERY = groq`*[_type == "bio"][0]{title, backgroundImage, bioCopy}`;

const GET_NEWS_PAGE_QUERY = groq`*[_type == "newsPage"][0]{projectsTitle, appearancesTitle, interviewsTitle, triviaTitle, backgroundImage, bottomImage}`;

const GET_PROJECTS_QUERY = groq`*[_type == "news"] | order(publishDate desc){newsCopy}`;

const GET_APPEARANCES_QUERY = groq`*[_type == "appearances"] | order(publishDate desc){appearanceCopy}`;

const GET_INTERVIEWS_QUERY = groq`*[_type == "interviews"] | order(publishDate desc){interviewCopy}`;

const GET_FACTS_QUERY = groq`*[_type == "facts"] | order(publishDate desc){title, factsCopy}`;


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

// Projects query
export const getProjectsCMSData = async ()=> {
  return getCMSData(GET_PROJECTS_QUERY, {});
};

// Appearances query
export const getAppearancesCMSData = async ()=> {
  return getCMSData(GET_APPEARANCES_QUERY, {});
};

// Interviews query
export const getInterviewsCMSData = async ()=> {
  return getCMSData(GET_INTERVIEWS_QUERY, {});
};

// Facts query
export const getFactsCMSData = async ()=> {
  return getCMSData(GET_FACTS_QUERY, {});
};
