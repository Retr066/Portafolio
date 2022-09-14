import { createContext, useCallback, useMemo, useState } from 'react';

interface NavActiveItemContextProps {
  activeItem: string;
  handleSetActiveItem: (item: string) => void;
}

export const NavActiveItemContext = createContext<NavActiveItemContextProps>({ activeItem: "", handleSetActiveItem: () => {} });

export default function NavActiveItemProvider({ children }: { children: JSX.Element | JSX.Element[] }) {
  const [activeItem, setActiveItem] = useState("");

  const handleSetActiveItem = useCallback((item: string) => {
    setActiveItem(item);
  }, []);

  const value = useMemo(() => ({ activeItem, handleSetActiveItem }), [activeItem]);

  return <NavActiveItemContext.Provider value={value}>{children}</NavActiveItemContext.Provider>;
}
