import { useContext, useEffect, useLayoutEffect, useState } from 'react';

import { NavActiveItemContext } from '../../../context/NavActiveItem';

export const useIsVisible = (inView: boolean, nombre: string) => {
  const canUseDOM = typeof window !== "undefined";
  const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;
  const { handleSetActiveItem } = useContext(NavActiveItemContext);
  useIsomorphicLayoutEffect(() => {
    if (inView) {
      handleSetActiveItem(nombre);
    }
  }, [inView]);
};
