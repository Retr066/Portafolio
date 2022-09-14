import { FC, ReactNode, useCallback, useContext, useRef } from 'react';
import { useHoverDirty } from 'react-use';

import { SizeContext } from '../../context';
import { useAnimationFrame } from './hooks';

interface Props {
  children: JSX.Element | JSX.Element[];
  className?: string;
  style?: React.CSSProperties;
  initialOffsetX: number;
  contentWidth: number;
  direction?: "left" | "right";
}

export const SliderContainer: FC<Props> = ({ children, initialOffsetX, className, contentWidth, direction = "left" }) => {
  const { innerWidth } = useContext(SizeContext);
  const refSrollX = useRef(initialOffsetX);
  const refContainer = useRef<HTMLDivElement>(null);
  const refContent = useRef<HTMLDivElement>(null);

  const enabled = innerWidth < contentWidth;

  useAnimationFrame(
    enabled,
    useCallback(() => {
      const { current: elContainer } = refContainer;
      const { current: elContent } = refContent;
      if (elContainer && elContent) {
        if (direction === "left") {
          refSrollX.current += 1;
          elContainer.scrollLeft = refSrollX.current;
          if (elContainer.scrollLeft >= elContent.clientWidth) {
            refSrollX.current = 0;
            elContainer.scrollLeft = 0;
          }
        }
        if (direction === "right") {
          refSrollX.current -= 1;
          elContainer.scrollLeft = refSrollX.current;
          if (elContainer.scrollLeft <= 0) {
            refSrollX.current = elContent.clientWidth;
            elContainer.scrollLeft = elContent.clientWidth;
          }
        }
      }
    }, [direction])
  );
  return (
    <div ref={refContainer} className={`slider-container overflow-hidden whitespace-nowrap max-w-full ${className}`}>
      <div ref={refContent} className={"inline-block"}>
        {children}
      </div>
      <div className={`${enabled ? "inline-block" : "hidden"} `}>{children}</div>
    </div>
  );
};

interface sliderItemProps {
  children: ReactNode;
  details: {
    percentage: number;
    domain: string;
  };
}

export const SliderItem: FC<sliderItemProps> = ({ children, details }) => {
  const element = useRef<HTMLDivElement>(null);
  const isHovering = useHoverDirty(element);

  const Tooltip = () => {
    return (
      <div className={`absolute  top-0 left-0 right-0  z-50  flex items-center justify-center`}>
        <div className="relative mx-2">
          <div className="bg-tertiary text-quinary text-sm rounded py-1 px-4 right-0 bottom-full">
            {details.domain}
            <div className="shadow w-full bg-slate-400 mt-2">
              <div
                className={`${
                  details.percentage >= 0 && details.percentage <= 40
                    ? "bg-red-500"
                    : details.percentage >= 41 && details.percentage <= 70
                    ? "bg-yellow-500"
                    : "bg-green-500"
                }  text-xs leading-none py-1 text-center text-quinary`}
                style={{
                  width: `${details.percentage}%`,
                }}
              >
                {details.percentage}%
              </div>
            </div>
            <svg className="absolute text-black h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve">
              <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
            </svg>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        ref={element}
        className="w-48 sm:w-[40vw] md:w-[30vw] lg:w-[25vw] xl:w-[20vw] inline-flex justify-center items-center mx-2 mt-3 transition duration-200 hover:scale-105 hover:drop-shadow-md p-3 overflow-x-hidden "
      >
        {isHovering && <Tooltip />}

        {children}
      </div>
    </>
  );
};
