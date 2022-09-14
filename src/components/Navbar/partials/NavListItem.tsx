import React from 'react';
import { FC } from 'react';

import { NavItemProps } from '../../../interfaces/NavItem.interface';
import { NavItem } from './NavItem';

//saber si un div esta visible en la pantalla

interface NavListItemsProps {
  links: NavItemProps[];
}

export const NavListItem: FC<NavListItemsProps> = ({ links }) => {
  return (
    <ul className="flex space-x-1">
      {links.map((link, index: number) => (
        <NavItem key={index} {...link} />
      ))}
    </ul>
  );
};
