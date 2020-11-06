import React from "react";

import Hero from "../components/Hero";
import fundoImage from "./assets/fundo.jpg";
import fundo2Image from "./assets/user.jpg";
//import GlobalStyle from "./style/GlobalStyle";
import Heading from "../components/Heading";
import { text } from '@storybook/addon-knobs'
 

export default {
  title: 'Hero',
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
  </Hero>

);
