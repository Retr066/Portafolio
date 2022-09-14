import { AimOutlined, CodeOutlined, DashboardOutlined, EditOutlined, LikeOutlined, MobileOutlined } from '@ant-design/icons';
import React, { useMemo, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Element } from 'react-scroll';
import { useHoverDirty } from 'react-use';

import { Container } from '../../container';
import { useIsVisible } from './hooks/useIsVisible';

export const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useIsVisible(inView, "Servicios");

  const services = [
    {
      title: "Integración de redes sociales",
      description: "Existen muchas plataformas sociales y debes promover tu presencia en ellas en tu sitio web.",
      image: "/Code-bro.svg",
      Icon: ({ className }: { className: string }) => <LikeOutlined className={`${className}`} />,
    },
    {
      title: "Desarrollo",
      description: "Conozco la importancia del diseño web y puedo ayudarlo a crear un sitio web que le encantará.",
      image: "/Code-bro.svg",
      Icon: ({ className }: { className: string }) => <CodeOutlined className={`${className}`} />,
    },
    {
      title: "Responsive Design",
      description:
        "Su sitio se mostrará correctamente en cualquier dispositivo, incluidas computadoras de escritorio, tabletas y teléfonos móviles.",
      image: "/Code-bro.svg",
      Icon: ({ className }: { className: string }) => <MobileOutlined className={`${className}`} />,
    },
    {
      title: "Diseño Creativo",
      description: "Diseño web atractivo con una interfaz intuitiva que permita ofrecer una experiencia agradable a los clientes.",
      image: "/Code-bro.svg",
      Icon: ({ className }: { className: string }) => <EditOutlined className={`${className}`} />,
    },
    {
      title: "Seo",
      description:
        "Optimizaré su sitio con una estrategia inteligente de optimización de motores de búsqueda para generar clientes potenciales.",
      image: "/Code-bro.svg",
      Icon: ({ className }: { className: string }) => <AimOutlined className={`${className}`} />,
    },
    {
      title: "Rendimiento",
      description:
        "Retener a los usuarios es fundamental para mejorar las conversiones. Los sitios de alto rendimiento atraen y retienen a los usuarios.",
      image: "/Code-bro.svg",
      Icon: ({ className }: { className: string }) => <DashboardOutlined className={`${className}`} />,
    },
  ];
  const refArray = useMemo(() => services.map(() => React.createRef<HTMLDivElement>()), [services]);
  const refs = useRef(refArray);
  return (
    <Element className="py-20" name="Servicios">
      <Container ref={ref}>
        <h2 className="text-4xl font-extrabold text-center text-tertiary dark:text-primary font-kdam mb-7 ">{`< Servicios />`}</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const isHover = useHoverDirty(refs.current[index]);

            return (
              <div
                ref={refs.current[index]}
                key={index}
                className="flex flex-col items-center justify-center p-4 transition-all duration-200 ease-in hover:text-white hover:bg-primary hover:rounded-lg hover:shadow-lg dark:hover:shadow-primary/50"
              >
                <div className={`${isHover ? "bg-secondary" : "bg-primary"} flex items-center justify-center w-20 h-20 rounded-full`}>
                  <service.Icon className="text-2xl text-white dark:text-tertiary" />
                </div>
                <h3 className={`${isHover ? "text-white dark:text-tertiary" : "text-tertiary dark:text-white"}  text-xl font-bold mt-4`}>
                  {service.title}
                </h3>
                <p className={`${isHover ? "text-white dark:text-quaternary" : "text-quaternary dark:text-quinary"}   text-center mt-2`}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Element>
  );
};
