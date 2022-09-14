import { AboutMe, Contact, Presentation, Projects, Services, Skills } from '../src/components';
import { Layout } from '../src/layout';

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout
      title={"Portafolio - Jherson Lopez Perez"}
      name={"Jherson Lopez Perez"}
      description={"Website personal para presentar proyectos,habilidades y ser contactado por empresas"}
    >
      <Presentation />
      <AboutMe />
      <Skills />
      <Services />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default Home;
