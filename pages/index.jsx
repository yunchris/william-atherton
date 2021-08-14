import MainLayout from '../layout'
import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <MainLayout title="William Atherton Home" description="William Atherton">
      <div className={styles.homeContainer}>
        <div className={styles.homeTitle}>William Atherton</div>
        <div className={styles.homeGraphicContainer}>
          <img src="/bgHome.png" className={styles.image}/>
        </div>
      </div>
    </MainLayout>
  );
}