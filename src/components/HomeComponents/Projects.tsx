import { useInView } from 'react-intersection-observer';
import { Element } from 'react-scroll';

import { Container } from '../../container';
import { SeminariosSlides } from '../SeminariosCarrusel';
import { useIsVisible } from './hooks/useIsVisible';

export const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useIsVisible(inView, "Proyectos");
  return (
    <Element className="py-20" name="Proyectos">
      <Container ref={ref}>
        <div className="flex flex-col items-center justify-center gap-4 mb-5">
          <h4 className="text-4xl font-extrabold text-tertiary dark:text-primary font-kdam">{"< Proyectos />"}</h4>
          <p className="text-xl text-center text-quaternary dark:text-white md:text-left">
            Aquí puedes ver algunos de mis proyectos, puedes ver más en mi perfil de GitHub.
          </p>
        </div>
        <SeminariosSlides />
      </Container>
    </Element>
  );
};
