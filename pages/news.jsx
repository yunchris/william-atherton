import React from 'react';
import MainLayout from '../layout/';
import styles from '../styles/news.module.css';
import { getNewsPageCMSData } from '../utils/cms/api'
import { customBlock } from '../utils/cms/sanityContent';

export async function getStaticProps() {
  const newsPageContent = await getNewsPageCMSData();
  if (!newsPageContent) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: { newsPageContent } }; 
}

export default function News(props) {
  const { newsPageContent } = props;
  
  return (
    <MainLayout
      title="William Atherton News"
      description="William Atherton News"
    >
      <div className={styles.newsContainer}>
        <div className={styles.newsCopyContainer}>
          <div className={styles.newsTitle}>Recent Projects</div>
          {newsPageContent?.map((project, index) => (
            <div className={styles.project} key={index}>
              <div className={styles.bullet}>◆</div>
              <div>{customBlock(project.newsCopy)}</div>
            </div>
          ))}
        </div>
        <div className={styles.newsGraphicContainer}>
          <img src="/bgNews.png" className={styles.bgImage} />
          <img src="/photostrip.jpeg" className={styles.bottomImage} />
        </div>
      </div>
    </MainLayout>
  );
}
