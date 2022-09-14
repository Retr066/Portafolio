import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

import styles from '../../../styles/embla.module.css';
import { NextButton, PrevButton } from './components/SeminariosCarruselButton';
import { SeminarioSlide } from './components/SeminarioSlide';
import Projects from './data/projects.json';

export const SeminariosSlides = () => {
  const [viewportRef, embla] = useEmblaCarousel({ loop: false, skipSnaps: false, dragFree: false, draggable: false });

  const SCALE_FACTOR = 3;

  const numberWithinRange = (number: number, min: number, max: number) => Math.min(Math.max(number, min), max);

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [posicionActualSlide, setPosicionActualSlide] = useState(1);
  const [scaleValues, setScaleValues] = useState<number[]>([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setPosicionActualSlide(embla.selectedScrollSnap() + 1);
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  const onScroll = useCallback(() => {
    if (!embla) return;

    const engine = embla.internalEngine();
    const scrollProgress = embla.scrollProgress();

    const styles = embla.scrollSnapList().map((scrollSnap, index) => {
      if (!embla.slidesInView().includes(index)) return 0;
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.location.get();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const scale = 1 - Math.abs(diffToTarget * SCALE_FACTOR);
      return numberWithinRange(scale, 0, 1);
    });
    setScaleValues(styles);
  }, [embla, setScaleValues]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    onScroll();
    embla.on("select", onSelect);
    embla.on("scroll", onScroll);
    embla.on("resize", onScroll);

    return () => {
      embla.off("select", onSelect);
      embla.off("scroll", onScroll);
      embla.off("resize", onScroll);
    };
  }, [embla, onSelect, onScroll]);

  return (
    <div className="relative mx-auto  max-w-full sm:max-w-[95%] xl:max-w-[1000px] ">
      <div className={styles.embla__viewport} ref={viewportRef}>
        <div className={styles["embla__container-seminarios"]}>
          {Projects.map((project, index) => (
            <div className={styles["embla__slide-seminarios"]} key={project.id}>
              <div
                className="flex overflow-hidden origin-center  h-[54rem] sm:h-[48rem] md:h-[32rem] lg:h-[30rem] xl:h-[30rem] "
                style={{ transform: `scale(${scaleValues[index]})` }}
              >
                <div className={styles.embla__slide__img}>
                  <SeminarioSlide {...project} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center w-full mt-4 ">
        <div className="flex items-center ">
          <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} className="fill-primary" aria-label="Atrás" />
          <p className="flex items-center justify-center w-40 text-center text-tertiary dark:text-white font-gil text-14 leading-18 tracking-4 ">
            <span className="mr-1 font-bold ">{posicionActualSlide}</span>/ {Projects.length}
          </p>
          <NextButton onClick={scrollNext} enabled={nextBtnEnabled} className="fill-primary" aria-label="Siguiente" />
        </div>
      </div>
    </div>
  );
};
