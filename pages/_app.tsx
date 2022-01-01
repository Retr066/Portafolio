import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-slate-200   transition-all  ease-in-out dark:bg-gray-800">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
