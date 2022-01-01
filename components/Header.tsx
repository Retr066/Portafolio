import { useState } from "react";
import ThemeToogleButton from "./ThemeToogleButton";
import { MenuIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { faGithub, faEarlybirds } from "@fortawesome/free-brands-svg-icons";
export default function Header() {
  const [theme, setTheme] = useState(false);
  const router = useRouter();
  const path = router.pathname;
  const handleChangeTheme = () => {
    document.documentElement.classList.toggle("dark");
    if (typeof document !== "undefined") {
      const data = document.documentElement.classList.contains("dark");
      setTheme(data);
    }
  };

  const handleToogleMenu = () => {
    console.log("click");
  };

  const ListItem = ({ href, path, target, children, ...props }: any) => {
    const active = path == href;

    const activeColor = "bg-orange-300 rounded text-gray-900 p-1 ";
    const inactiveColor =
      "flex items-center  mx-2 hover:underline hover:underline-offset-4 ";
    return (
      <li className={`${inactiveColor} ${active ? activeColor : ""}`}>
        <Link href={href} passHref>
          <a {...props} target={target}>
            {children}
          </a>
        </Link>
      </li>
    );
  };

  return (
    <div className="flex justify-center h-16  bg-slate-300   dark:bg-gray-900 ">
      <nav className="lg:min-w-[50%] md:min-w-[70%]  min-w-[95%]  flex self-center flex-row  flex-wrap">
        <div className="flex mr-5 items-center dark:text-slate-100">
          <Link href="/" passHref>
            <a className="flex">
              <FontAwesomeIcon
                icon={faEarlybirds}
                className="flex h-7 w-7 -rotate-6 hover:rotate-12 transform-gpu duration-300"
              />
              <p className="font-sans  font-bold">JHERSON LOPEZ</p>
            </a>
          </Link>
        </div>
        <div className="hidden lg:flex xl:flex 2x1:flex md:flex sm:hidden grow items-center ">
          <ul className="flex  dark:text-slate-100">
            <ListItem href="/habilidades" path={path}>
              Habilidades
            </ListItem>
            <ListItem href="/proyectos" path={path}>
              Proyectos
            </ListItem>
            <ListItem
              className="flex"
              href="https://github.com/Retr066"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} className="flex h-5 w-5 " />
              GitHub
            </ListItem>
          </ul>
        </div>
        <div className="flex justify-end  grow">
          <ThemeToogleButton
            onclick={handleChangeTheme}
            theme={theme}
          ></ThemeToogleButton>
          <button onClick={handleToogleMenu}>
            <MenuIcon
              className="h-10 w-10 p-2 border-solid rounded border-2 border-gray-600  
            hover:bg-white-900 dark:text-slate-100 dark:border-slate-400 ml-2"
            />
          </button>
        </div>
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-0"
            >
              Account settings
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-1"
            >
              Support
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-2"
            >
              License
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
