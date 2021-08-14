import MainLayout from '../layout/';
import styles from '../styles/bio.module.css'
import { getBioPageCMSData } from '../utils/cms/api'
import { urlFor, customBlock } from '../utils/cms/sanityContent';

export async function getStaticProps() {
  const bioPageContent = await getBioPageCMSData();
  if (!bioPageContent) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: { bioPageContent } };
}

export default function Bio(props) {
  const { bioPageContent } = props;

  return (
    <MainLayout title="William Atherton Bio" description="William Atherton Bio">
      <div className={styles.bioContainer}>
        <div className={styles.bioGraphicContainer}>
          <div className={styles.bioTitle}>{bioPageContent?.title}</div>
          <img
            src={urlFor(bioPageContent?.backgroundImage).url()}
            className={styles.image}
          />
        </div>
        <div className={styles.bioCopy} style={{paddingTop: '4rem'}}>
          {customBlock(bioPageContent?.bioCopy)}
        </div>
      </div>
    </MainLayout>
  );
}
