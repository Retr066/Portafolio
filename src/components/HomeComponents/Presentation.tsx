import { GithubOutlined, LinkedinOutlined, MailOutlined, WhatsAppOutlined } from '@ant-design/icons';
import Lottie from 'lottie-react';
import { useInView } from 'react-intersection-observer';
import { Element } from 'react-scroll';
import Typewriter from 'typewriter-effect';

import lottieImage from '../../../public/99312-developer-skills.json';
import { Container } from '../../container';
import { useIsVisible } from './hooks/useIsVisible';

export const Presentation = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useIsVisible(inView, "Inicio");

  return (
    <Element name="Inicio">
      <Container ref={ref} className="h-[calc(100vh_-_5.2rem)] py-4 sm:py-0">
        <div className="flex flex-col items-center justify-between h-full gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-6 md:items-start">
            <h1 className={`text-3xl sm:text-5xl  font-extrabold text-tertiary dark:text-primary font-kdam`}>
              <p className="p-2">Jherson López Pérez</p>
            </h1>
            <Typewriter
              options={{
                loop: true,
                delay: 75,
                autoStart: true,
                wrapperClassName: "text-xl sm:text-3xl text-quaternary dark:text-gray-300 text-center md:text-left",
                cursorClassName: "text-xl sm:text-3xl text-quaternary dark:text-gray-300 ",
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("< Bienvenido a mi sitio Web />")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("< Soy Desarrollador Web Full Stack />")
                  .pauseFor(2000)
                  .start();
              }}
            />
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 text-white transition duration-300 rounded-md shadow-md bg-primary hover:bg-secondary dark:bg-primary dark:text-white hover:shadow-lg dark:shadow-lg hover:dark:bg-secondary dark:shadow-primary/50">
                Contactame
              </button>

              <a
                className="text-lg border-b-2 text-quaternary border-b-primary dark:text-gray-100"
                href="./CV_actualizado.pdf"
                target="_blank"
              >
                Ver CV
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/in/jherson-lopez-perez" target="_blank">
                <LinkedinOutlined className="text-3xl text-primary dark:text-gray-100" />
              </a>
              <a href="https://github.com/Retr066" target="_blank">
                <GithubOutlined className="text-3xl text-primary dark:text-gray-100" />
              </a>
              <a href="https://wa.link/4dh6go" target="_blank">
                <WhatsAppOutlined className="text-3xl text-primary dark:text-gray-100" />
              </a>
              <a
                href="mailto:jherson.lopez88@gmail.com?subject=Contacto%20desde%20el%20sitio%20web&body=Hola%20Jherson,%20me%20gustaría%20contactarte%20para..."
                target="_blank"
              >
                <MailOutlined className="text-3xl text-primary dark:text-gray-100" />
              </a>
            </div>
          </div>
          <div className="flex justify-center w-full md:w-1/2">
            <Lottie
              className="w-96 min-h-96 md:w-full md:min-h-full"
              animationData={lottieImage}
              loop={true}
              onAnimationStart={() => console.log("Animation started")}
            />
          </div>
        </div>
      </Container>
    </Element>
  );
};
