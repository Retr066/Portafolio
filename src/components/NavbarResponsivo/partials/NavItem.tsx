import { FC, useContext, useRef } from 'react';
import * as Scroll from 'react-scroll';

import { NavActiveItemContext } from '../../../context';
import { NavItemProps } from '../../../interfaces/NavItem.interface';

interface NavItemResponsivoProps extends NavItemProps {
  index: number;
  toggleMenuResponsive: () => void;
}

export const NavItem: FC<NavItemResponsivoProps> = ({ nombre, index, Icon, toggleMenuResponsive }) => {
  const element = useRef<HTMLLIElement>(null);

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
    <li className={`${index >= 1 && "border-t"}`} onClick={toggleMenuResponsive}>
      <div
        onClick={() => {
          scrollTo(nombre);
        }}
        className={` ${
          activeItem === nombre ? "text-primary" : "text-tertiary dark:text-white"
        } flex items-center p-4 text-base font-normal hover:text-primary dark:hover:text-primary cursor-pointer transition-colors duration-150`}
      >
        <Icon className="flex-shrink-0 text-lg transition duration-75 " />
        <span className="flex-1 ml-3 text-lg font-bold whitespace-nowrap">{nombre}</span>
      </div>
    </li>
  );
};
