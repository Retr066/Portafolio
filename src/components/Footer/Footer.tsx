import { scroller } from 'react-scroll';

import links from '../Navbar/links';

export const Footer = () => {
  return (
    <footer className="bg-tertiary">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          {links.map(({ nombre }, index) => {
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
              <div key={index} className="px-5 py-2">
                <p
                  onClick={() => {
                    scrollTo(nombre);
                  }}
                  className="text-base text-gray-500 hover:text-primary cursor-pointer"
                >
                  {nombre}
                </p>
              </div>
            );
          })}
        </nav>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2022, Todos los derechos reservados. Creado por
          <a href="https://www.linkedin.com/in/eduardo-ulloa-ram%C3%ADrez-0b1b3b1b3/" className="ml-1 text-gray-500 hover:text-primary">
            Jherson Lopez Perez
          </a>
        </p>
      </div>
    </footer>
  );
};
