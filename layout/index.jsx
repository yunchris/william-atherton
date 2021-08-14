import Head from "next/head";
import NavBar from "./navbar";

export default function MainLayout({...props}) {
  return (
    <div className="container">
      <Head>
        <meta name="description" content={props.description} />
        <meta name="keywords" content="William Atherton"/>

        {/* Open Graph */}
        <meta property="og:url" content="https://williamatherton.com" key="ogurl" />
        <meta property="og:site_name" content="William Atherton" key="ogsitename" />
        <meta property="og:title" content={props.title} key="ogtitle" />
        <meta
          property="og:description"
          content={props.description}
          key="ogdesc"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preconnect"
          href="/fonts/PelicanRegular.ttf"
          as="font"
          crossOrigin="true"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <NavBar />
      {props.children}
    </div>
  );
}
