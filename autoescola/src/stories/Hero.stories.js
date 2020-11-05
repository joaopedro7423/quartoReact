import React from "react";

import Hero from "../components/Hero";

export default {
  title: 'Hero',
  component: Hero,
};

export const usage = () => (
  <Hero title="Ganhe sua liberdade para ir e vir">
    <p>A auto escola lider de aprovação</p>
  </Hero>
);

export const withList = () => (
  <Hero title="Ganhe sua liberdade para ir e vir">
    <ul>
      <li>dsadasdasdsaaaaaaaaaasdasdaskfhasuhfbhasuhfu</li>
      <li>dilasln sand nas ndnas ndasn ndasnjkd njkasd</li>
      <li>
        sakldjklsak dnm ksamdklmaslmdlkmasmdnmslam klm lasmmlasmdklm alsml m
      </li>
    </ul>
  </Hero>
);
