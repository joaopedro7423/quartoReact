import React from "react";

import Hero from "../components/Hero";
import fundoImage from "./assets/fundo.jpg";
import fundo2Image from "./assets/user.jpg";

export default {
  title: 'Hero',
  component: Hero,
};

export const usage = () => (
  <Hero title="Ganhe sua liberdade para ir e vir" image={fundoImage}>
    <p>A auto escola lider de aprovação</p>
  </Hero>
);

export const withList = () => (
  <Hero title="Ganhe sua liberdade para ir e vir"image={fundo2Image}>
    <ul>
      <li>dsadasdasdsaaaaaaaaaasdasdaskfhasuhfbhasuhfu</li>
      <li>dilasln sand nas ndnas ndasn ndasnjkd njkasd</li>
      <li>
        sakldjklsak dnm ksamdklmaslmdlkmasmdnmslam klm lasmmlasmdklm alsml m
      </li>
    </ul>
  </Hero>
);
