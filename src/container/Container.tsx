import React, { FC, LegacyRef, RefObject } from 'react';

interface ContainerProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
  const { children, className } = props;
  return (
    <div ref={ref} className={`container max-w-6xl mx-auto px-4 ${className}`}>
      {children}
    </div>
  );
});
