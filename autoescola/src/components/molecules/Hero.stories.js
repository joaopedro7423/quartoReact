import React from "react";

import Hero from "./Hero";
import fundoImage from "C:/Users/user/Desktop/quartoReact/autoescola/src/stories/assets/fundo.jpg";
import fundo2Image from "C:/Users/user/Desktop/quartoReact/autoescola/src/stories/assets/user.jpg";
//import GlobalStyle from "./style/GlobalStyle";
import Heading from "../atoms/Heading";
import { text } from '@storybook/addon-knobs'
import Button from "../atoms/Button";
 

export default {
  title: 'Components|Molecules/Hero',
  component: Hero,
};

export const usage = () => (
  <Hero image={fundoImage}>
   <h1>{text("title","Ganhe sua liberdade para ir e vir")}
   
   </h1>
   <p>A auto escola lider de aprovação</p>
  </Hero>
);

export const withList = () => (

  <Hero 
  image={fundo2Image}>
    <Heading>
    <h1 >
      Ganhe sua <strong>liberdade</strong> <br />
      para ir e vir.
    </h1>
    </Heading>
    <ul>
      <li>dsadasdasdsaaaaaaaaaasdasdaskfhasuhfbhasuhfu</li>
      <li>dilasln sand nas ndnas ndasn ndasnjkd njkasd</li>
      <li>
        sakldjklsak dnm ksamdklmaslmdlkmasmdnmslam klm lasmmlasmdklm alsml m
      </li>
    </ul>
    <Button color="primary" variant="outlined">Matricule-se agora</Button>
  </Hero>

);

