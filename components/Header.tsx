import { BeakerIcon } from "@heroicons/react/solid";
import { useState } from "react";
import ThemeToogleButton from "./ThemeToogleButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faWhatsapp,
  faGithub,
  faEarlybirds,
} from "@fortawesome/free-brands-svg-icons";
export default function Header() {
  const [theme, setTheme] = useState(false);
  const handleChangeTheme = () => {
    document.documentElement.classList.toggle("dark");
    if (typeof document !== "undefined") {
      const data = document.documentElement.classList.contains("dark");
      setTheme(data);
    }
  };

  return (
    <div className="flex justify-center h-16  bg-slate-300   dark:bg-gray-600 ">
      <nav className="min-w-[50%] flex self-center flex-row  flex-wrap">
        <div className="flex mr-5 items-center dark:text-slate-100">
          <span className="flex">
            <FontAwesomeIcon
              icon={faEarlybirds}
              className="flex h-7 w-7 -rotate-6 hover:rotate-12 transform-gpu duration-300"
            />
          </span>
          <p className="font-sans  font-bold">Jherson Lopez</p>
        </div>
        <div className="flex grow items-center ">
          <ul className="flex  dark:text-slate-100">
            <li className="flex mx-2">Habilidades</li>
            <li className="flex mx-2">Proyectos</li>
            <li className="flex mx-2">GitHub</li>
          </ul>
        </div>
        <div className="flex justify-end  grow">
          <ThemeToogleButton
            onclick={handleChangeTheme}
            theme={theme}
          ></ThemeToogleButton>
        </div>
      </nav>
    </div>
  );
}
