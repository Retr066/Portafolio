import '../styles/globals.css';

import ColorModeProvider from '../src/context/ColorModeContext';
import NavActiveItemProvider from '../src/context/NavActiveItem';
import SizeObserver from '../src/context/SizeObserver';

import type { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ColorModeProvider>
      <SizeObserver>
        <NavActiveItemProvider>
          <Component {...pageProps} />
        </NavActiveItemProvider>
      </SizeObserver>
    </ColorModeProvider>
  );
}

export default MyApp;
