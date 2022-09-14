import Image from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Element } from 'react-scroll';

import { Container } from '../../container';
import { useIsVisible } from './hooks/useIsVisible';

export const AboutMe = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useIsVisible(inView, "Sobre mí");
  return (
    <Element name="Sobre mí" className="py-20">
      <Container ref={ref}>
        <div className="flex flex-col items-center justify-between h-full gap-4 ">
          <h4 className="text-4xl font-extrabold text-tertiary dark:text-primary font-kdam">{"< Sobre mí />"}</h4>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <div className="flex justify-center w-full md:w-1/2">
              <picture className="inline-block relative w-52 h-52 md:w-[500px] md:h-[500px]">
                <Image
                  className="w-full"
                  alt="Escribiendo código en pc"
                  width={500}
                  height={500}
                  src="/Code-bro.svg"
                  objectFit="cover"
                  layout="responsive"
                />
              </picture>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-4 md:w-1/2 ">
              <h4 className="text-2xl font-bold text-tertiary dark:text-white">
                Soy <span className="text-secondary">Desarrollador Web Full Stack</span> en formación y bachiller en{" "}
                <span className="text-secondary">Ingeniería de Sistemas.</span>
              </h4>
              <p className="text-xl text-center break-words text-quaternary dark:text-white md:text-left">
                Hola, me llamo Jherson López Pérez, soy un desarrollador Web, me gusta mucho aprender cosas nuevas, me gusta mucho el diseño
                web y el diseño de interfaces de usuario, estoy en constante aprendizaje y actualización de mis conocimientos.
                <br />
                Mi objetivo es ganar experiencia en el área del Desarrollo Web y colaborar a que la empresa para la que trabaje pueda dar un
                servicio de calidad a sus clientes potenciales o actuales.
              </p>
              <div className="flex items-center justify-between w-full">
                <p className="text-lg underline text-quaternary dark:text-white underline-offset-8 decoration-quaternary dark:decoration-quinary">
                  <span className="font-bold text-tertiary dark:text-secondary">Estado:</span> Freelancer
                </p>
                <p className="text-lg underline text-quaternary dark:text-white underline-offset-8 decoration-quaternary dark:decoration-quinary">
                  <span className="font-bold text-tertiary dark:text-secondary">País:</span> Peru
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Element>
  );
};
