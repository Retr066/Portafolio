import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

interface PropsHead {
  children: JSX.Element | JSX.Element[];
  title: string;
  name: string;
  description: string;
}

export default function Layout({
  children,
  title,
  name,
  description,
}: PropsHead) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name={name} content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}
