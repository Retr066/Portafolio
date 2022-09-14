import { createContext, useCallback, useEffect, useState } from "react";

export const SizeContext = createContext({ innerWidth: 0 });

const SizeObserver = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const [innerWidth, setInnerWidth] = useState(0);
  const manejarTamano = useCallback(() => {
    setInnerWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    manejarTamano();
    window.addEventListener("resize", manejarTamano, { passive: true });
    return () => window.removeEventListener("resize", manejarTamano);
  }, [manejarTamano]);

  return <SizeContext.Provider value={{ innerWidth }}>{children}</SizeContext.Provider>;
};

export default SizeObserver;
