import MainLayout from "../layout/";
import styles from "../styles/news.module.css";

export default function News() {
  return (
    <MainLayout
      title="William Atherton News"
      description="William Atherton News"
    >
      <div className={styles.newsContainer}>
        <div className={styles.newsCopyContainer}>
          <div className={styles.newsTitle}>Recent Projects</div>
        </div>
        <div className={styles.newsGraphicContainer}>
          <img src="/bgNews.png" className={styles.bgImage} />
          <img src="/photostrip.jpeg" className={styles.bottomImage} />
        </div>
      </div>
    </MainLayout>
  );
}
