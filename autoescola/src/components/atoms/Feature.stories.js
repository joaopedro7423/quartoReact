import React from "react";
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";


import Feature from "./Feature";
import Grid from "../atoms/Grid";





export default{
title: "Components|Atoms/Feature",
  component: Feature
};

export const usage = () =>(
   <Feature icon={<FaCar />} title="Titulo">
     <p>Loejlmrl,awdm kmasmdkmaskmd</p>
   </Feature>
)

export const withGrid = ()=>(
  <Grid sm={2} md={4}>
    <Feature icon={<FaCar />} title="Maior e melhor frota">
     <p>Loejlmrl,awdm kmasmdkmaskmd</p>
   </Feature>
   <Feature icon={<FaKey />} title="Habilitação mais rápida">
     <p>Loejlmrl,awdm kmasmdkmaskmd</p>
   </Feature>
   <Feature icon={<FaMapMarkedAlt />} title="Excelente localização">
     <p>Loejlmrl,awdm kmasmdkmaskmd</p>
   </Feature>
   <Feature icon={<FaAccessibleIcon />} title="Acessibilidade">
     <p>Loejlmrl,awdm kmasmdkmaskmd</p>
   </Feature>
  </Grid>

)