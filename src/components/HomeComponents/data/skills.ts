interface skillsProps {
  name: string;
  image: string;
  description: string;
  details: {
    percentage: number;
    domain: string;
  };
}

const lenguajes: skillsProps[] = [
  {
    name: "HTML",
    image: "/html.svg",
    description: "Lenguaje de marcado para la elaboración de páginas web en su versión 5",
    details: {
      percentage: 90,
      domain: "Avanzado",
    },
  },
  {
    name: "CSS",
    image: "/css-alt.svg",
    description: "Lenguaje de hojas de estilo en cascada para la elaboración de páginas web en su versión 3",
    details: {
      percentage: 90,
      domain: "Avanzado",
    },
  },
  {
    name: "JavaScript",
    image: "/javascript.svg",
    description:
      "JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos,​ basado en prototipos, imperativo, débilmente tipado y dinámico.",
    details: {
      percentage: 90,
      domain: "Avanzado",
    },
  },
  {
    name: "TypeScript",
    image: "/typescript.svg",
    description:
      "TypeScript es un lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft. Es un superset de JavaScript, y añade tipado estático y objetos basados en clases.",
    details: {
      percentage: 60,
      domain: "Intermedio",
    },
  },
  {
    name: "PHP",
    image: "/php.svg",
    description:
      "PHP es un lenguaje de programación de uso general de código del lado del servidor originalmente diseñado para el desarrollo web de contenido dinámico.",
    details: {
      percentage: 70,
      domain: "Intermedio",
    },
  },
  {
    name: "Jquery",
    image: "/jquery.svg",
    description:
      "jQuery es una biblioteca multiplataforma de JavaScript, creada inicialmente por John Resig, que permite simplificar la manera de interactuar con los documentos HTML, manipular el árbol DOM, manejar eventos, desarrollar animaciones y agregar interacción con la técnica AJAX a páginas web.",
    details: {
      percentage: 90,
      domain: "Avanzado",
    },
  },
  {
    name: "GitHub",
    image: "/github-logo.svg",
    description:
      "GitHub es una forja para alojar proyectos utilizando el sistema de control de versiones Git. Se utiliza principalmente para la creación de código fuente de programas de ordenador.",
    details: {
      percentage: 50,
      domain: "Intermedio",
    },
  },
  {
    name: "Firebase",
    image: "/firebase.svg",
    description:
      "Firebase es una plataforma de desarrollo de aplicaciones móviles y web creada por Firebase, Inc. en 2011, adquirida por Google el año siguiente. En la actualidad forma parte de la suite de herramientas de Google Cloud Platform.",
    details: {
      percentage: 50,
      domain: "Intermedio",
    },
  },
  {
    name: "MongoDB",
    image: "/mongodb.svg",
    description:
      "MongoDB es un software de base de datos orientado a documentos libre y multiplataforma, escrito en C++. Almacena datos en formatos de documentos similares a JSON con esquemas.",
    details: {
      percentage: 50,
      domain: "Intermedio",
    },
  },
  {
    name: "MySQL",
    image: "/mysql.svg",
    description:
      "MySQL es un sistema de gestión de bases de datos relacional, multihilo y multiusuario, que se ejecuta como un servicio de servidor independiente. Es desarrollado, distribuido y soportado por Oracle Corporation.",
    details: {
      percentage: 80,
      domain: "Avanzado",
    },
  },
];

const frameworks: skillsProps[] = [
  {
    name: "React",
    image: "/react.svg",
    description:
      "React es una biblioteca JavaScript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.",
    details: {
      percentage: 90,
      domain: "Avanzado",
    },
  },
  {
    name: "Nextjs",
    image: "/next-js.svg",
    description:
      "Next.js es un framework de desarrollo web de código abierto que permite a los desarrolladores crear aplicaciones web de React con funciones tales como renderizado del lado del servidor y generación de sitios estáticos.",
    details: {
      percentage: 60,
      domain: "Intermedio",
    },
  },
  {
    name: "Redux",
    image: "/redux.svg",
    description:
      "Redux es una biblioteca de JavaScript de código abierto para administrar el estado de aplicaciones web. Se usa comúnmente con bibliotecas como React o Angular para el desarrollo de interfaces de usuario.",
    details: {
      percentage: 60,
      domain: "Intermedio",
    },
  },
  {
    name: "Laravel",
    image: "/laravel.svg",
    description:
      'Laravel es un framework de código abierto para desarrollar aplicaciones y servicios web con PHP 5 y PHP 7. Su filosofía es desarrollar código PHP de forma elegante y simple, evitando el "código espagueti".',
    details: {
      percentage: 60,
      domain: "Intermedio",
    },
  },
  {
    name: "TailwindCSS",
    image: "/tailwind-css.svg",
    description:
      "Tailwind CSS es un framework de utilidades CSS para construir sitios web rápidamente. Es un framework de CSS sin clases, lo que significa que no genera clases de CSS predeterminadas que se pueden utilizar directamente en su HTML.",
    details: {
      percentage: 90,
      domain: "Avanzado",
    },
  },
  {
    name: "Bootstrap",
    image: "/bootstrap.svg",
    description:
      "Bootstrap es un framework o conjunto de herramientas de código abierto para diseño de sitios y aplicaciones web. Contiene plantillas de diseño con tipografía, formularios, botones, cuadros de diálogo, navegación y otros elementos de diseño basados en HTML y CSS.",
    details: {
      percentage: 90,
      domain: "Avanzado",
    },
  },
  {
    name: "NodeJS",
    image: "/node-js.svg",
    description:
      "Node.js es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome. Node.js usa un modelo de operaciones E/S sin bloqueo y orientado a eventos, que lo hace liviano y eficiente.",
    details: {
      percentage: 80,
      domain: "Avanzado",
    },
  },
  {
    name: "Express",
    image: "/express.svg",
    description:
      "Express es un framework de aplicaciones web de código abierto para Node.js, que se ejecuta en el lado del servidor y se puede utilizar para crear aplicaciones web y API.",
    details: {
      percentage: 80,
      domain: "Avanzado",
    },
  },
];

export { lenguajes, frameworks };
