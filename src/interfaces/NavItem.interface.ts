type IconProps = {
  className?: string;
};
export interface NavItemProps {
  nombre: string;
  Icon: (props: IconProps) => JSX.Element;
}
