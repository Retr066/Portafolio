import { HomeOutlined, ProjectOutlined, SendOutlined, SolutionOutlined, TagOutlined, UserOutlined } from '@ant-design/icons';

import { NavItemProps } from '../../interfaces/NavItem.interface';

const links: NavItemProps[] = [
  {
    nombre: "Inicio",
    Icon: ({ className }) => <HomeOutlined className={`${className}`} />,
  },
  {
    nombre: "Sobre mí",
    Icon: ({ className }) => <UserOutlined className={`${className}`} />,
  },
  {
    nombre: "Habilidades",
    Icon: ({ className }) => <SolutionOutlined className={`${className}`} />,
  },
  {
    nombre: "Servicios",
    Icon: ({ className }) => <TagOutlined className={`${className}`} />,
  },
  {
    nombre: "Proyectos",
    Icon: ({ className }) => <ProjectOutlined className={`${className}`} />,
  },
  {
    nombre: "Contacto",
    Icon: ({ className }) => <SendOutlined className={`${className}`} />,
  },
];
export default links;
