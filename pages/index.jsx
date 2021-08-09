import MainLayout from '../layout/'
import Image from 'next/image'

export default function Home() {
  return (
    <MainLayout title="William Atherton Home" description="William Atherton">
      <div className="pageContainer homeContainer">
        <div className="homeTitle">William Atherton</div>
        <div className="homeGraphic">
          <Image  src="/bgHome.png" layout="fill" objectFit="contain"className="image" />
        </div>
      </div>
    </MainLayout>
  );
}