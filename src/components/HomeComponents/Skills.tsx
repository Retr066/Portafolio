import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { Element } from 'react-scroll';

import { Container } from '../../container';
import { SliderContainer, SliderItem } from '../SliderContainer';
import { frameworks, lenguajes } from './data/skills';
import { useIsVisible } from './hooks/useIsVisible';

export const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useIsVisible(inView, "Habilidades");
  return (
    <Element className="py-20" name="Habilidades">
      <Container ref={ref}>
        <h2 className="text-4xl font-extrabold text-center text-tertiary dark:text-primary font-kdam mb-7 ">{"< Habilidades />"}</h2>
        <SliderContainer className="" contentWidth={100000} initialOffsetX={0} direction="right">
          {lenguajes.map((lenguaje, index) => (
            <SliderItem details={lenguaje.details} key={index}>
              <div className="flex flex-col items-center justify-center">
                <div className="relative w-32 h-32 md:w-44 md:h-44">
                  <Image
                    className="!p-2"
                    style={{ filter: "drop-shadow(1px 1px 5px #fff)" }}
                    src={lenguaje.image}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-center text-quaternary dark:text-white">{lenguaje.name}</h3>
              </div>
            </SliderItem>
          ))}
        </SliderContainer>
        <SliderContainer className="" contentWidth={100000} initialOffsetX={0} direction="left">
          <>
            {frameworks.map((framework, index) => (
              <SliderItem details={framework.details} key={index}>
                <div className="flex flex-col items-center justify-center">
                  <div className="relative w-32 h-32 md:w-44 md:h-44">
                    <Image
                      className="!p-2"
                      style={{ filter: "drop-shadow(1px 1px 5px #fff)" }}
                      src={framework.image}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-center text-quaternary dark:text-white">{framework.name}</h3>
                </div>
              </SliderItem>
            ))}
          </>
        </SliderContainer>
      </Container>
    </Element>
  );
};
