import MainLayout from '../layout'
import styles from '../styles/home.module.css'
import { getHomePageCMSData } from '../utils/cms/api';
import { urlFor } from '../utils/cms/sanityContent'

export async function getStaticProps() {
  const homePageContent = await getHomePageCMSData();
  if (!homePageContent) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: { homePageContent } }; 
}

const Home = (props) => {
  const { homePageContent } = props;

  return (
    <MainLayout title="William Atherton Home" description="William Atherton">
      <div className={styles.homeContainer}>
        <div className={styles.homeTitle}>{homePageContent?.title}</div>
        <div className={styles.homeGraphicContainer}>
          <img src={urlFor(homePageContent?.backgroundImage).url()} className={styles.image}/>
        </div>
      </div>
    </MainLayout>
  );
}

export default Home