import MainLayout from '../layout/';
import Image from "next/image";
import styles from '../styles/news.module.css';
import {
  getNewsPageCMSData,
  getProjectsCMSData,
  getAppearancesCMSData,
  getInterviewsCMSData,
  getFactsCMSData,
} from "../utils/api";
import { customBlock } from '../utils/sanityContent';
import { urlFor } from "../utils/sanityContent";
import backgroundImage from "../public/bgNews.png";
import photoStrip from "../public/photostrip.jpeg";

export async function getStaticProps() {
  const newsPageCMSContent = await getNewsPageCMSData()
  const projectsContent = await getProjectsCMSData();
  const appearancesContent = await getAppearancesCMSData();
  const interviewsContent = await getInterviewsCMSData();
  const factsContent = await getFactsCMSData();

  if (!newsPageCMSContent) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      newsPageCMSContent,
      projectsContent,
      appearancesContent,
      interviewsContent,
      factsContent,
    },
  }; 
}

export default function News(props) {
  const {
    newsPageCMSContent,
    projectsContent,
    appearancesContent,
    interviewsContent,
    factsContent,
  } = props;
  const imageLoaderBackground = ({width}) => {
    return `${urlFor(newsPageCMSContent?.backgroundImage).url()}?w=${width}`;
  };

  const imageLoaderBottom = ({width}) => {
    return `${urlFor(newsPageCMSContent?.bottomImage).url()}?w=${width}`;
  };
  return (
    <MainLayout
      title="William Atherton News"
      description="William Atherton News"
    >
      <div className={styles.newsContainer}>
        <div className={styles.newsCopyContainer}>
          <div className={styles.newsTitle}>
            {newsPageCMSContent?.projectsTitle}
          </div>
          {projectsContent?.map((project, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.bullet}>◆</div>
              <div>{customBlock(project.newsCopy)}</div>
            </div>
          ))}
          <div className={styles.sectionTitle}>
            {newsPageCMSContent?.appearancesTitle}
          </div>
          {appearancesContent?.map((appearance, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.bullet}>◆</div>
              <div>{customBlock(appearance.appearanceCopy)}</div>
            </div>
          ))}
          <div className={styles.sectionTitle}>
            {newsPageCMSContent?.interviewsTitle}
          </div>
          {interviewsContent?.map((interview, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.bullet}>◆</div>
              <div>{customBlock(interview.interviewCopy)}</div>
            </div>
          ))}
          <div className={styles.sectionTitle}>
            {newsPageCMSContent?.triviaTitle}
          </div>
          {factsContent?.map((fact, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.bullet}>◆</div>
              <div>{customBlock(fact.factsCopy)}</div>
            </div>
          ))}
        </div>
        <div className={styles.newsGraphicContainer}>
          <Image
            loader={imageLoaderBackground}
            src={backgroundImage}
            priority
            className={styles.bgImage}
            alt="News Background Image - William Atherton"
            width={825}
            height={820}
            layout="responsive"
            objectFit="contain"
          />
          <Image
            loader={imageLoaderBottom}
            src={photoStrip}
            priority
            className={styles.bottomImage}
            alt="News Reel Image - William Atherton"
            width={796}
            height={119}
            layout="responsive"
            objectFit="contain"
          />
        </div>
      </div>
    </MainLayout>
  );
}
