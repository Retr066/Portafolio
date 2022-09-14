import Head from 'next/head';
import { Fragment, useEffect, useRef, useState } from 'react';

import { Footer, Header } from '../components';

interface PropsHead {
  children: JSX.Element | JSX.Element[];
  title: string;
  name: string;
  description: string;
}

export const Layout = ({ title, name, children, description }: PropsHead) => {
  const windowGlobal = typeof window !== "undefined" && window;

  const [buttonView, setButtonView] = useState(false);
  const buttonElement = useRef(null);

  const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setButtonView(true);
    } else {
      setButtonView(false);
    }
  };

  useEffect(() => {
    windowGlobal && windowGlobal.addEventListener("scroll", scrollFunction);
    return () => {
      windowGlobal && windowGlobal.removeEventListener("scroll", scrollFunction);
    };
  }, [windowGlobal]);

  const backToTopWithAnimation = () => {
    if (windowGlobal) {
      windowGlobal.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-quinary dark:bg-tertiary">
      <Head>
        <title>{title}</title>
        <meta name={name} content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {children}
      <Footer />
      <button
        onClick={backToTopWithAnimation}
        ref={buttonElement}
        type="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        className={`${
          buttonView ? "opacity-100" : "opacity-0"
        } p-3 animate-bounce bg-primary text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-primary-light hover:shadow-lg focus:bg-primary-light focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary active:shadow-lg transition duration-150 ease-in-out bottom-10 right-5 fixed`}
        id="btn-back-to-top"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          className="w-4 h-4"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
          ></path>
        </svg>
      </button>
    </div>
  );
};
