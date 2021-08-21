import MainLayout from '../layout/';
import Image from "next/image";
import styles from '../styles/news.module.css';
import {
  getProjectsCMSData,
  getAppearancesCMSData,
  getInterviewsCMSData,
  getFactsCMSData,
} from "../utils/api";
import { customBlock } from '../utils/sanityContent';

export async function getStaticProps() {
  const projectsContent = await getProjectsCMSData();
  const appearancesContent = await getAppearancesCMSData();
  const interviewsContent = await getInterviewsCMSData();
  const factsContent = await getFactsCMSData();

  if (!projectsContent) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      projectsContent,
      appearancesContent,
      interviewsContent,
      factsContent,
    },
  }; 
}

export default function News(props) {
  const {
    projectsContent,
    appearancesContent,
    interviewsContent,
    factsContent,
  } = props;
  
  return (
    <MainLayout
      title="William Atherton News"
      description="William Atherton News"
    >
      <div className={styles.newsContainer}>
        <div className={styles.newsCopyContainer}>
          <div className={styles.newsTitle}>Recent Projects</div>
          {projectsContent?.map((project, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.bullet}>◆</div>
              <div>{customBlock(project.newsCopy)}</div>
            </div>
          ))}
          <div className={styles.sectionTitle}>RECENT APPEARANCES</div>
          {appearancesContent?.map((appearance, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.bullet}>◆</div>
              <div>{customBlock(appearance.appearanceCopy)}</div>
            </div>
          ))}
          <div className={styles.sectionTitle}>RECENT INTERVIEWS</div>
          {interviewsContent?.map((interview, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.bullet}>◆</div>
              <div>{customBlock(interview.interviewCopy)}</div>
            </div>
          ))}
          <div className={styles.sectionTitle}>DID YOU KNOW?</div>
          {factsContent?.map((fact, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.bullet}>◆</div>
              <div>{customBlock(fact.factsCopy)}</div>
            </div>
          ))}
        </div>
        <div className={styles.newsGraphicContainer}>
          <Image
            src="/bgNews.png"
            className={styles.bgImage}
            alt="News Background Image - William Atherton"
            width={825}
            height={820}
            layout="responsive"
            objectFit="contain"
          />
          <Image
            src="/photostrip.jpeg"
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
