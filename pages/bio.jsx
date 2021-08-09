import MainLayout from "../layout/";
import Image from "next/image";

export default function Bio() {
  return (
    <MainLayout title="William Atherton Bio" description="William Atherton Bio">
      <div className="pageContainer">
        <div className="bioTitle">BIO</div>
        <div className="bioGraphic">
          <Image
            src="/bgBio.png"
            layout="fill"
            objectFit="contain"
            className="image"
          />
        </div>
      </div>
        <div className="bioCopy">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. In my case it
          did not helped me. Changing back to the default font in the footer did
          fix it though... So I added height: 1.5rem to the footer and it did
          the fix. I guess there is some edge on how vh/flex-grow compute the
          height with some fonts
        </div>
    </MainLayout>
  );
}
