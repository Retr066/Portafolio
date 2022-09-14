import { EyeOutlined, GithubOutlined } from '@ant-design/icons';
import Image from 'next/image';
import React, { FC } from 'react';

import { frameworks, lenguajes } from '../../HomeComponents/data/skills';

type billProps = {
  user: string;
  password: string;
};

interface SeminarioSlideProps {
  id: string;
  name: string;
  description: string;
  url: string;
  repository: string;
  technology: Array<string>;
  image: string;
  bill: string | billProps;
}
type accumulator = {
  [key: string]: string;
};

const imgsFrameworksAndLenguajes = {
  ...lenguajes.reduce((acc: accumulator, lenguaje) => {
    acc[lenguaje.name] = lenguaje.image;
    return acc;
  }, {}),
  ...frameworks.reduce((acc: accumulator, framework) => {
    acc[framework.name] = framework.image;
    return acc;
  }, {}),
};

export const SeminarioSlide: FC<SeminarioSlideProps> = ({ name, description, url, image, technology, repository, bill }) => {
  return (
    <div className="flex flex-col-reverse bg-white md:flex-row dark:bg-secondary-dark dark:text-white rounded-3xl">
      <div className="flex flex-col justify-between w-full md:w-2/5 ">
        <h2 className="my-4 ml-4 text-2xl font-bold text-tertiary xs:ml-10 sm:ml-10 xl:pr-6">{name}</h2>
        <p className="my-4 ml-4 text-quaternary xs:ml-10 sm:ml-10 xl:pr-6">{description}</p>

        <div className="flex flex-col my-4 ml-4 xs:ml-10 sm:ml-10 xl:pr-6 text-quaternary">
          <p className="font-bold">Cuenta para acceder a la aplicación</p>
          {typeof bill === "string" ? (
            <p className="mb-4 mr-2 font-base">{bill}</p>
          ) : (
            <div className="mb-4 mr-2 font-base">
              <p>
                <span className="font-bold">Usuario:</span> {bill.user}
              </p>
              <p>
                <span className="font-bold">Contraseña:</span> {bill.password}
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-col items-start justify-between w-full px-4 pb-4 xs:px-10 sm:px-10">
          <p className="mb-2 font-bold text-quaternary">Tecnologías usadas:</p>
          <div className="flex flex-row flex-wrap gap-4 items-center ">
            {technology.map((tech, index) => (
              <div key={index} className="flex flex-row items-center mr-4">
                <Image src={imgsFrameworksAndLenguajes[tech]} alt={tech} width={30} height={30} className="rounded-full" />
                <p className="ml-2 text-quaternary">{tech}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex self-end justify-center w-full gap-10 py-4 bg-primary rounded-b-3xl md:rounded-b-none md:rounded-bl-3xl ">
          <div className="flex flex-col items-center justify-center gap-1 text-base sm:flex-row hover:underline">
            <EyeOutlined className="text-white" />
            <a href={url} target="_blank" className="text-center text-white font-extralight">
              Ver Demo
            </a>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 text-base sm:flex-row hover:underline">
            <GithubOutlined className="text-white" />
            <a href={repository} target="_blank" className="text-center text-white font-extralight">
              Ver repositorio
            </a>
          </div>
        </div>
      </div>
      <div className="flex w-full md:w-3/5 ">
        <picture className="relative w-full h-96 md:h-full">
          <Image
            className="aspect-w-16 aspect-h-9 rounded-t-3xl md:rounded-tl-none md:rounded-r-3xl"
            src={image}
            layout="fill"
            objectFit="cover"
            alt={description}
          />
        </picture>
      </div>
    </div>
  );
};
