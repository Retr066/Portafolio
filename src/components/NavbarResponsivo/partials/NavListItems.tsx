import { FC } from 'react';

import { NavItem } from './NavItem';

export const NavListItems: FC<any> = ({ links, toggleMenuResponsive }) => {
  return (
    <ul className="flex flex-col space-y-2">
      {links.map((link: any, index: any) => (
        <NavItem key={index} index={index} toggleMenuResponsive={toggleMenuResponsive} {...link} />
      ))}
    </ul>
  );
};
