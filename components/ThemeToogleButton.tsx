import { MoonIcon } from "@heroicons/react/solid";
import { SunIcon } from "@heroicons/react/outline";
export default function ThemeToogleButton({
  onclick,
  theme,
}: {
  onclick?: () => void;
  theme: boolean;
}) {
  const clases = `h-10 w-10 p-2 border-solid rounded border-2 border-yellow-600 bg-amber-300 
                  hover:bg-amber-500 dark:bg-indigo-700 dark:border-indigo-900 `;

  return (
    <button onClick={onclick} className="transition-all delay-200">
      {theme ? (
        <MoonIcon className={clases}></MoonIcon>
      ) : (
        <SunIcon className={clases}></SunIcon>
      )}
    </button>
  );
}
