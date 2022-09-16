import Link from 'next/link';
import React, { FC, useContext, useRef } from 'react';
import * as Scroll from 'react-scroll';

import { NavActiveItemContext } from '../../../context/NavActiveItem';
import { NavItemProps } from '../../../interfaces/NavItem.interface';

export const NavItem: FC<NavItemProps> = ({ nombre, Icon }) => {
  const element = useRef<HTMLLIElement>(null);
  //scroll components
  // const scroll = Scroll.animateScroll;
  const scroller = Scroll.scroller;
  const { activeItem } = useContext(NavActiveItemContext);

  const scrollTo = (element: string) => {
    if (nombre === "Inicio") {
      scroller.scrollTo(element, {
        duration: 500,
        delay: 150,
        smooth: true,
        offset: -85,
      });
    } else {
      scroller.scrollTo(element, {
        duration: 500,
        delay: 150,
        smooth: true,
        offset: -25,
      });
    }
  };
  return (
    <li
      onClick={() => {
        scrollTo(nombre);
      }}
      ref={element}
      className={` ${
        activeItem === nombre ? "text-primary" : "text-tertiary dark:text-white"
      } hover:text-primary flex flex-col justify-center items-center  px-3 py-2 cursor-pointer transition-colors duration-150 `}
    >
      <Link href="/">
        <>
          <Icon className={`text-xl `} />
          <p className={`  text-base font-semibold `}>{nombre}</p>
        </>
      </Link>
    </li>
  );
};
