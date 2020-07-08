import React from "react";

import Card from "../../components/Card";

import Title from "./Title";
import Banner from "./Banner";
import Text from './Text'

const About = () => {
  return (
    <Card>
      <Title />

      <Banner />

      <Text>
        A presente aplicação foi desenvolvida utilizando React e Tailwind CSS, e
        visa simular as principais funcionalidades do Flexbox. Por estar na
        Versão 1.0, o Flexbox Simulator entrega a base desse poderoso modelo de
        layout da Web CSS3. A escolha de um framework CSS (Tailwind CSS) para
        desenvolvimento da interface da aplicação, se deu pelo desejo de me
        aprimorar os meus conhecimento no mesmo.<br /> <br />
        Críticas e sugestões são sempre bem-vindas =)
      </Text>
    </Card>
  );
};

export default About;
