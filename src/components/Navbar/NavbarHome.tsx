import { useEffect, useLayoutEffect, useState } from 'react';

import { NavbarResponsivo } from '../NavbarResponsivo';
import { ToggleDarkMode } from '../ToggleDarkMode';
import links from './links';
import { NavListItem, SpanMenu } from './partials';

export const NavbarHome = () => {
  const canUseDOM = typeof window !== "undefined";
  const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;
  const [navShow, setNavShow] = useState(true);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const toggleMenuResponsive = () => {
    setNavShow(!navShow);
  };

  useIsomorphicLayoutEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIsVisible]);

  return (
    <>
      <div
        className={`${
          isVisible ? "" : "shadow"
        }  transition-shadow duration-500 ease-in-out  sticky bg-transparent top-0 left-0 right-0 z-30 w-full backdrop-blur-[20px] `}
      >
        <div className="max-w-6xl px-4 mx-auto">
          <nav className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-10 h-10 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
            </div>

            <div className="flex items-center gap-4">
              <div className="items-center hidden md:flex">
                <NavListItem links={links} />
              </div>
              <ToggleDarkMode className="hidden md:flex" />
              <SpanMenu toggleMenuResponsive={toggleMenuResponsive} />
            </div>
          </nav>
        </div>
      </div>
      <NavbarResponsivo navShow={navShow} links={links} toggleMenuResponsive={toggleMenuResponsive} />
    </>
  );
};
