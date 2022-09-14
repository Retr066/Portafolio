import { FC, useCallback, useRef } from 'react';

import { ToggleDarkMode } from '../ToggleDarkMode';
import { MenuTitulo, NavListItems } from './partials';

export const NavbarResponsivo: FC<any> = ({ navShow, links, toggleMenuResponsive }) => {
  const sidebarElement = useRef(null);
  //types onclick event
  const switchBackground = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (sidebarElement.current === e.target) {
        toggleMenuResponsive();
      }
    },
    [toggleMenuResponsive]
  );

  return (
    <>
      {!navShow && (
        <div
          onClick={switchBackground}
          ref={sidebarElement}
          className="bg-[rgba(0,0,0,.35)] inset-0 xl:hidden w-full h-screen fixed right-0 z-50"
        ></div>
      )}

      <aside
        className={`${
          navShow ? "-translate-x-[120%]" : "translate-x-[0%]"
        } transition ease-out inset-0  duration-300 fixed w-full sm:max-w-[380px] xl:hidden h-screen bg-quinary dark:bg-tertiary z-[51]`}
        aria-label="Sidebar"
      >
        <div className="flex flex-col h-full px-3 py-4 rounded ">
          <MenuTitulo toggleMenuResponsive={toggleMenuResponsive} />

          <NavListItems links={links} toggleMenuResponsive={toggleMenuResponsive} />
          <div className="flex justify-end pt-5 md:hidden">
            <ToggleDarkMode />
          </div>
        </div>
      </aside>
    </>
  );
};
